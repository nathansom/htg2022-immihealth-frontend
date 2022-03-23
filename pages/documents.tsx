import styles from '../styles/Main.module.css'
import React, { useState, useEffect, ReactEventHandler } from 'react';
import { useRouter } from 'next/router';

import LayoutAlt from '../components/LayoutAlt';
import UploadMenu from '../components/UploadMenu';
import { Card, 
        CardContent, 
        Button,
        SwipeableDrawer
    } from '@mui/material';
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArticleIcon from '@mui/icons-material/Article';
import MedicationIcon from '@mui/icons-material/Medication';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AddIcon from '@mui/icons-material/Add';
import UploadIcon from '@mui/icons-material/Upload';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export default function Main() {
    const router = useRouter();
    const [menuStat, setMenuStat] = useState(false);

    const toggleDrawer = (open:boolean) => (event:any) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
        setMenuStat(open);
      };

    return (
        <LayoutAlt>
            <div className={styles.flex_row}>
                <Fab 
                    color="primary" 
                    aria-label="submit"
                    style={{margin:"0 20px"}}
                    onClick={ () => router.push('/main') } 
                >
                    <ArrowBackIcon />
                </Fab>
                <Card className={styles.margin_x__10} style={{width:"80vw"}}>
                    <CardContent>
                      <h1>My Documents</h1>
                    </CardContent>
                 </Card>
            </div>
            <Button 
                variant="contained" 
                className={styles.button_card}
                onClick={ () => router.push('/medicalreports') } 
            >
                <MedicationIcon />
                <h2>Medical Reports</h2>
            </Button>
            <Button 
                variant="contained" 
                className={styles.button_card}
                onClick={ () => router.push('/bills') } 
            >
                <ArticleIcon />
                <h2>Bills</h2>
            </Button>
            <Button 
                variant="contained" 
                className={styles.button_card}
                style={{marginBottom:"100px"}}
                onClick={ () => router.push('/insurancedocs') } 
            >
                <VerifiedUserIcon />
                <h2>Insurance Documents</h2>
            </Button>
            <Fab 
                color="primary" 
                aria-label="submit"
                className={styles.bottom_center}
                onClick={toggleDrawer(true)}
            >
                <AddIcon />
            </Fab>
            <SwipeableDrawer
                anchor="bottom"
                open={menuStat}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <UploadMenu toggle={toggleDrawer(false)} />
            </SwipeableDrawer>
        </LayoutAlt>
    )
}