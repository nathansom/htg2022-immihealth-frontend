import styles from '../styles/Main.module.css'
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import LayoutAlt from '../components/LayoutAlt';
import UploadMenu from '../components/UploadMenu';
import { Card, 
        CardContent, 
        Button,
        Drawer
    } from '@mui/material';
import { StyledEngineProvider } from '@mui/material';

import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArticleIcon from '@mui/icons-material/Article';
import MedicationIcon from '@mui/icons-material/Medication';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AddIcon from '@mui/icons-material/Add';


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
                <StyledEngineProvider injectFirst>
                <Fab 
                    color="primary" 
                    aria-label="submit"
                    style={{margin:"0 20px"}}
                    onClick={ () => router.push('/main') } 
                >
                    <ArrowBackIcon />
                </Fab>
                <Card className={styles.margin_y__10} sx={{width:"80vw"}}>
                    <CardContent>
                      <h1>My Documents</h1>
                    </CardContent>
                 </Card>
                </StyledEngineProvider>
            </div>
            <Button 
                variant="contained" 
                className={styles.button_card}
                onClick={ () => router.push('/medicalreports') } 
            >
                <MedicationIcon />
                <h2>Medical Reports</h2>
            </Button>
            <StyledEngineProvider injectFirst>
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
                sx={{marginBottom:"100px"}}
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
            <div style={{height:150}}></div>
            </StyledEngineProvider>
            <Drawer
                anchor="bottom"
                open={menuStat}
                variant="temporary"
                onClose={toggleDrawer(false)}
                ModalProps={{
                    keepMounted: true,
                  }}
            >
                <UploadMenu toggle={toggleDrawer(false)} />
            </Drawer>
        </LayoutAlt>
    )
}