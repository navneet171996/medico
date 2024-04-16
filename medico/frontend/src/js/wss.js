import * as store from "./store.js";
import * as ui from "./ui.js";
import * as webRTCHandler from "./webRTCHandler.js";
import * as constants from "./constants.js";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useEffect } from "react";
import React from "react";
let socketIO = null;



export const registerSocketEvents = (socket) => {
  socketIO = socket;
  
  

  socket.on("connect", () => {
    const x = jwtDecode(localStorage.getItem("token"))
   if(x.role==='DOCTOR'){ 
    const profile = JSON.parse(localStorage.getItem("userProfile"))
    let payload = {
      docId:profile.id,
      socketId:socket.id
   }
   let apiResponse = axios.post("http://localhost:8081/api/doctor/putSocketOfDoctor",payload)
   console.log(apiResponse);
  }
    console.log("succesfully connected to socket.io server");
    

    store.setSocketId(socket.id);
  });

  socket.on("pre-offer", (data) => {
    webRTCHandler.handlePreOffer(data);
  });

  socket.on("pre-offer-answer", (data) => {
    webRTCHandler.handlePreOfferAnswer(data);
  });

  socket.on('user-hanged-up', () => {
    webRTCHandler.handleConnectedUserHangedUp();
  })
  socket.on("webRTC-signaling", (data) => {
    switch (data.type) {
      case constants.webRTCSignaling.OFFER:
        webRTCHandler.handleWebRTCOffer(data);
        break;
      case constants.webRTCSignaling.ANSWER:
        webRTCHandler.handleWebRTCAnswer(data);
        break;
      case constants.webRTCSignaling.ICE_CANDIDATE:
        webRTCHandler.handleWebRTCCandidate(data);
        break;
      default:
        return;
    }
  });
};

export const sendPreOffer = (data) => {
  console.log("emmiting to server pre offer event");
  socketIO.emit("pre-offer", data);
};

export const sendPreOfferAnswer = (data) => {
  socketIO.emit("pre-offer-answer", data);
};

export const sendDataUsingWebRTCSignaling = (data) => {
  socketIO.emit("webRTC-signaling", data);
}


export const sendUserHangUp = (data) => {
  socketIO.emit("user-hanged-up", data);
}