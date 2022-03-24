import styles from '../styles/Main.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import LayoutAlt from '../components/LayoutAlt'
import { Card, 
        CardContent, 
        Button
    } from '@mui/material';
import { StyledEngineProvider } from '@mui/material';

import ArticleIcon from '@mui/icons-material/Article';
import MedicationIcon from '@mui/icons-material/Medication';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

export default function Main() {
    const [userName, setUserName] = useState('');
    const router = useRouter();

    return (
        <LayoutAlt>
           <StyledEngineProvider injectFirst>
            <Card className={styles.margin_y__10}>
                <CardContent>
                    <h1>Welcome, Sara!</h1>
                    <p>Let’s learn more about health insurance</p>
                    <Button variant="contained">Get Started</Button>
                </CardContent>
            </Card>
            <Button 
                variant="contained" 
                className={styles.button_card} 
                onClick={ () => router.push('/documents')}
            >
                <ArticleIcon />
                <h2>My Document</h2>
            </Button>
            <Button 
                variant="contained" 
                className={styles.button_card}
                onClick={ () => router.push('medications')}
            >
                <MedicationIcon />
                <h2>My Medication</h2>
            </Button>
            <Button 
                variant="contained" 
                className={styles.button_card}
                onClick={ () => router.push('/profile')}
            >
                <PersonIcon />
                <h2>My Profile</h2>
            </Button>
            <Button 
                variant="contained" 
                className={styles.button_card}
                onClick={ () => router.push('/insurance')}
            >
                <VerifiedUserIcon />
                <h2>My Insurance</h2>
            </Button>
            <Button 
                variant="contained" 
                className={styles.button_card}
                onClick={ () => router.push('/interpretors')}
            >
                <PersonSearchIcon />
                <h2>Find Interpretor</h2>
            </Button>
            <Button 
                variant="contained" 
                color="error" 
                className={styles.button_card__danger}
                onClick={ () => router.push('/')}
            >
                <LogoutIcon />
                <h2>Logout</h2>
            </Button>
           </StyledEngineProvider>
        </LayoutAlt>
    )
}