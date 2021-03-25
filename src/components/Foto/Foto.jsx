import React from 'react'
import { RecordRTCPromisesHandler ,invokeSaveAsDialog } from 'recordrtc'


const handleFoto = async ()=> {
    let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
let recorder = new RecordRTCPromisesHandler(stream, {
    type: 'gif'
});
recorder.startRecording();

const sleep = m => new Promise(r => setTimeout(r, m));
await sleep(3000);

await recorder.stopRecording();
let blob = await recorder.getBlob();
invokeSaveAsDialog(blob);
}


export const Foto = () => {
    return (
        
        <img onClick={handleFoto}
         style={{
            width:'25px',
            cursor:'pointer'
        }} src="/camara-fotografica.svg"/>
    )
}
