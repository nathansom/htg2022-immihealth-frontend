import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Box,
        Button,
        Drawer,
        List,
        ListItem,
        ListItemIcon,
        ListItemText
        } 
        from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export default function UploadMenu({ toggle }:any) {
    const router = useRouter();
    const [showSubmit, setShowSubmit] = useState(false);
    const [filepath, setFilepath] = useState('');

    const handleChange = (e:any) => {
        const camUpload:HTMLInputElement = document.querySelector('input#camera');
        const fileUpload:HTMLInputElement = document.querySelector('input#fileupload');
        if (camUpload.value.length > 0 || fileUpload.value.length > 0) {
            if (fileUpload.value.length > 0) {
                setFilepath(fileUpload.value);
            } else if (camUpload.value.length > 0) {
                setFilepath(camUpload.value);
            } else {
                alert("Please upload your document")
            }
            setShowSubmit(true);
            toggleSubmit(true);
        }
    }

    const handleCancel = (e:any) => {
        const camUpload:HTMLInputElement = document.querySelector('input#camera');
        const fileUpload:HTMLInputElement = document.querySelector('input#fileupload');
        camUpload.value = '';
        fileUpload.value = '';
        setFilepath('');
        setShowSubmit(false);
    }

    const toggleSubmit = (show:boolean) => (event:any) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
        setShowSubmit(show);
      };

    const sendFile = async () => {
        await fetch(process.env.SOME_URL, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                file: filepath
            })
        })
        .then( () => router.push('/success'))
        .catch( (err) => alert(err))
    } 

    /* TO DO on the backend, 
    * 1. process file with FHIR API, convert to FHIR format and store
    * 2. use Form Recognizer to grab text from file
    * 3. use Translator to translate text
    * 4. process the text file with FHIR API to store the data
    */

    return (
        <div>
        <Box
            sx={{width:'auto', display: 'flex', flexDirection: 'column', alignItems:'center'}}
            role="presentation"
            onClick={toggle}
            onKeyDown={toggle}
        >
            <form style={{display:'none'}} onChange={handleChange}>
                <input id="camera" type="file" accept="image/*" capture="environment" />
                <label htmlFor="camera">Scan</label>
                <input 
                    id="fileupload" 
                    type="file" 
                    size={50000000}
                    accept=".jpeg, .jpg, .png, .bmp, .tiff, .pdf"
                />
                <label htmlFor="fileupload">Upload File</label>
            </form> 

            <List style={{display:'flex',flexDirection:'row'}}>
                <ListItem 
                    button 
                    key="Scan" 
                    style={{justifyContent:"space-evenly", width: '50%', margin:"0 10vw", color:"#ffffff", backgroundColor:"#0071DA", borderRadius:"10px"}}
                    onClick={
                        () => {
                            const camScan = document.getElementById('camera');
                            camScan?.click();
                        }
                    }
                >
                    <ListItemIcon>
                        <PhotoCameraIcon sx={{color:'#ffffff'}} />
                    </ListItemIcon>
                    <ListItemText primary="Scan"/>
                </ListItem>
                    <ListItem 
                        button 
                        key="Upload" 
                        style={{justifyContent:"space-evenly", width: '50%', margin:"0 10vw", color:"#ffffff", backgroundColor:"#0071DA", borderRadius:"10px"}}
                        onClick={
                            () => {
                                const fileUpld = document.getElementById('fileupload');
                                fileUpld?.click();
                            }
                        }
                    >
                    <ListItemIcon>
                        <UploadIcon sx={{color:'#ffffff'}} />
                    </ListItemIcon>
                    <ListItemText primary="Upload"/>
                </ListItem>

                <Button 
                variant="outlined" 
                sx={{
                    width: '10rem', 
                    marginBottom: '10px', 
                    display: showSubmit ? 'block' : 'none'
                    }}
                /* 
                *Send POST request to Form Recognizer 
                onClick = {sendFile}
                */
                onClick = { () => router.push('/success') }
            >
            Proceed
            </Button>
            </List>

        </Box>

        <Drawer
                anchor="bottom"
                open={showSubmit}
                /*onClose={toggleSubmit(false)}*/
            >
                <Box
        sx={{
            width:'auto', 
            display: showSubmit ? 'flex' : 'none', 
            flexDirection: 'column', 
            alignItems:'center',
            margin:'10px 0px'}}
        role="presentation"
        >
            <Button 
                variant="contained" 
                sx={{ 
                    marginBottom: '15px', 
                    display: showSubmit ? 'flex' : 'none'
                    }}
                /* 
                *Send POST request to Form Recognizer 
                onClick = {sendFile}
                */
                onClick = { () => router.push('/success') }
            >
            Proceed
            </Button>
            <Button 
                variant="outlined" 
                color="error"
                onClick={handleCancel}
                sx={{marginBottom:"10px"}}
            >
                Cancel
            </Button>
          </Box>
        </Drawer>
    </div>
    )
}
