import React,{useState} from 'react'
import { IconButton } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam'
import { VideocamOff } from '@mui/icons-material'

const CameraButton = ({localStream}) => {
    const [cameraEnabled,setCameraEnabled]=useState(true);

    const handleToggleCamera=()=>{
        localStream.getVideoTracks()[0].enabled=!cameraEnabled;
        setCameraEnabled(!cameraEnabled);
    }
  return (
    <IconButton onClick={handleToggleCamera} style={{color:'white'}}>
        {!cameraEnabled?<VideocamOff/>:<VideocamIcon/>}
    </IconButton>
  )
}

export default CameraButton