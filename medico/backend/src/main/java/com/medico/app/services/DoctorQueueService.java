package com.medico.app.services;

import com.medico.app.dto.DoctorQueueDto;
import com.medico.app.entities.Socket;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;

@Service
public class DoctorQueueService {

    private final Map<Long, Queue<String>> doctorQueuesMap = new HashMap<>();

    public Integer enterIntoQueue(DoctorQueueDto doctorQueueDto) {
        if(!doctorQueuesMap.containsKey(doctorQueueDto.getDocId())){
            Queue<String> queue = new PriorityQueue<>();
            queue.add(doctorQueueDto.getSocketId());
            doctorQueuesMap.put(doctorQueueDto.getDocId(), queue);
            return 1;
        }else {
            doctorQueuesMap.get(doctorQueueDto.getDocId()).add(doctorQueueDto.getSocketId());
            return doctorQueuesMap.get(doctorQueueDto.getDocId()).size()-1;
        }
    }

    public String getSocketOfNextPatientFromQueue(Long doctorId) {
        return doctorQueuesMap.get(doctorId).poll();
    }

    public String deleteQueueOfDoctor(Long doctorId) {
        if(doctorQueuesMap.containsKey(doctorId)){
            doctorQueuesMap.remove(doctorId);
            return "SUCCESSFULL";
        }
        return "NO QUEUE FOUND";
    }
}
