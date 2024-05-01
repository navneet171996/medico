package com.medico.app.services;

import com.medico.app.dao.SocketQueueDao;
import com.medico.app.dto.DoctorQueueDto;
import com.medico.app.entities.Socket;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;

@Service
public class DoctorQueueService {

    private final Map<Long, Queue<SocketQueueDao>> doctorQueuesMap = new HashMap<>();

    public Integer enterIntoQueue(DoctorQueueDto doctorQueueDto) {
        if(!doctorQueuesMap.containsKey(doctorQueueDto.getDocId())){
            Queue<SocketQueueDao> queue = new LinkedList<>();
            SocketQueueDao socketQueueDao = new SocketQueueDao();
            socketQueueDao.setPatientId(doctorQueueDto.getPatientId());
            socketQueueDao.setSocketId(doctorQueueDto.getSocketId());
            queue.add(socketQueueDao);
            doctorQueuesMap.put(doctorQueueDto.getDocId(), queue);
            return 1;
        }else {
            SocketQueueDao socketQueueDao = new SocketQueueDao();
            socketQueueDao.setPatientId(doctorQueueDto.getPatientId());
            socketQueueDao.setSocketId(doctorQueueDto.getSocketId());
            doctorQueuesMap.get(doctorQueueDto.getDocId()).add(socketQueueDao);
            return doctorQueuesMap.get(doctorQueueDto.getDocId()).size()-1;
        }
    }

//    public String getSocketOfNextPatientFromQueue(Long doctorId) {
//        return doctorQueuesMap.get(doctorId).poll();
//    }

    public SocketQueueDao getNextPatient(Long doctorId){
        return doctorQueuesMap.get(doctorId).poll();
    }

    public String deleteQueueOfDoctor(Long doctorId) {
        if(doctorQueuesMap.containsKey(doctorId)){
            doctorQueuesMap.remove(doctorId);
            return "SUCCESSFULL";
        }
        return "NO QUEUE FOUND";
    }

    public Integer getWaitingCount(DoctorQueueDto doctorQueueDto) {
        Queue<SocketQueueDao> queue = doctorQueuesMap.get(doctorQueueDto.getDocId());
        int count = 0;
        for (SocketQueueDao socketQueueDao : queue) {
            if (Objects.equals(socketQueueDao.getPatientId(), doctorQueueDto.getPatientId())) {
                return count;
            }
            count++;
        }
        return -1;
    }
}
