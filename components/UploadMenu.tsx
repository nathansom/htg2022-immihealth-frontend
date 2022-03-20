import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Box,
        SwipeableDrawer,
        List,
        ListItem,
        ListItemIcon,
        ListItemText
        } 
        from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export default function UploadMenu({ toggle }) {
    const router = useRouter();

    const handleChange = (e) => {
        console.log(e.target.value);
        router.push('/success')
    }

    return (
        <Box
            sx={{width:'auto'}}
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
                    size="50000000"
                    accept=".jpeg, .jpg, .png, .bmp, .tiff, .pdf"
                />
                <label htmlFor="fileupload">Upload File</label>
            </form> 

            <List style={{display:'flex',flexDirection:'row'}}>
                <ListItem 
                    button 
                    key="Scan" 
                    style={{justifyContent:"space-evenly", margin:"0 10vw", color:"#ffffff", backgroundColor:"#0071DA", borderRadius:"10px"}}
                    onClick={
                        () => {
                            const camScan = document.getElementById('camera');
                            camScan.click();
                            console.log(camScan);
                            console.log('camvalue',camScan.value);
                        }
                    }
                >
                    <ListItemIcon>
                        <PhotoCameraIcon />
                    </ListItemIcon>
                    <ListItemText primary="Scan"/>
                </ListItem>
                    <ListItem 
                        button 
                        key="Upload" 
                        style={{justifyContent:"space-evenly", margin:"0 10vw", color:"#ffffff", backgroundColor:"#0071DA", borderRadius:"10px"}}
                        onClick={
                            () => {
                                const fileUpld = document.getElementById('fileupload');
                                fileUpld.click();
                            }
                        }
                    >
                    <ListItemIcon>
                        <UploadIcon />
                    </ListItemIcon>
                    <ListItemText primary="Upload"/>
                </ListItem>
            </List>
        </Box>
    )
}
