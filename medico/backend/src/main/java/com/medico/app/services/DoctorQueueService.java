package com.medico.app.services;

import com.medico.app.dao.QueueDao;
import com.medico.app.dto.ConsultationDto;
import com.medico.app.dto.DoctorQueueDto;
import com.medico.app.entities.Consultation;
import com.medico.app.repositories.ConsultationRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DoctorQueueService {

    private final Map<Long, Queue<QueueDao>> doctorQueuesMap = new HashMap<>();
    private final Map<Long, Long> ongoingConsultationsMap = new HashMap<>();
    private final ConsultationRepository consultationRepository;

    public DoctorQueueService(ConsultationRepository consultationRepository) {
        this.consultationRepository = consultationRepository;
    }

    public Integer enterIntoQueue(DoctorQueueDto doctorQueueDto) {
        if(!doctorQueuesMap.containsKey(doctorQueueDto.getDocId())){
            Queue<QueueDao> queue = new LinkedList<>();
            QueueDao queueDao = new QueueDao();
            queueDao.setPatientId(doctorQueueDto.getPatientId());
            queueDao.setConsultationId(doctorQueueDto.getConsultationId());
            queue.add(queueDao);

            doctorQueuesMap.put(doctorQueueDto.getDocId(), queue);
            return 0;
        }else {
            QueueDao queueDao = new QueueDao();
            queueDao.setPatientId(doctorQueueDto.getPatientId());
            queueDao.setConsultationId(doctorQueueDto.getConsultationId());
            doctorQueuesMap.get(doctorQueueDto.getDocId()).add(queueDao);

            return doctorQueuesMap.get(doctorQueueDto.getDocId()).size()-1;
        }
    }

//    public String getSocketOfNextPatientFromQueue(Long doctorId) {
//        return doctorQueuesMap.get(doctorId).poll();
//    }

    public QueueDao getNextPatient(Long doctorId){
        return doctorQueuesMap.get(doctorId).poll();
    }

    public QueueDao callNextPatient(Long doctorId){
        return doctorQueuesMap.get(doctorId).peek();
    }

    public String deleteQueueOfDoctor(Long doctorId) {
        if(doctorQueuesMap.containsKey(doctorId)){
            doctorQueuesMap.remove(doctorId);
            return "SUCCESSFULL";
        }
        return "NO QUEUE FOUND";
    }

    public Integer getWaitingCount(DoctorQueueDto doctorQueueDto) {
        Queue<QueueDao> queue = doctorQueuesMap.get(doctorQueueDto.getDocId());
        int count = 0;
        for (QueueDao queueDao : queue) {
            if (Objects.equals(queueDao.getPatientId(), doctorQueueDto.getPatientId())) {
                return count;
            }
            count++;
        }
        return -1;
    }

    public String setOngoingConsultation(Long consultationId) {
        Consultation consultation = consultationRepository.findById(consultationId).orElseThrow();
        if(ongoingConsultationsMap.containsKey(consultation.getDoctor().getDocId())){
            ongoingConsultationsMap.remove(consultation.getDoctor().getDocId());
            ongoingConsultationsMap.put(consultation.getDoctor().getDocId(), consultationId);
        }else{
            ongoingConsultationsMap.put(consultation.getDoctor().getDocId(), consultationId);
        }
        return "SET ONGOING CONSULTATION";
    }

    public ConsultationDto getOngoingConsultation(Long doctorId) {
        if(ongoingConsultationsMap.containsKey(doctorId)){
            Long consultationId = ongoingConsultationsMap.get(doctorId);
            Consultation consultation = consultationRepository.findById(consultationId).orElseThrow();
            ConsultationDto consultationDto = new ConsultationDto();
            consultationDto.setPatientID(consultation.getPatient().getPatientID());
            consultationDto.setDocID(doctorId);
            consultationDto.setConsultationId(consultation.getConsultationId());
            return consultationDto;
        }
        return new ConsultationDto();
    }
}
