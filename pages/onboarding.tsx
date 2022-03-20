import styles from '../styles/Register.module.css';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { localeContext, targetLocaleContext, userLocale, targetLocale } from '../lib/locale-context';

import Layout from '../components/Layout'; 
import Dropdown from '../components/Dropdown';
import { Box, TextField, Fab } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const langData = require('../lib/supportedLocales.json')
const countryData = require('../lib/supportedCountries.json')

export default function Register() {
    const [isFemale, setIsFemale] = useState(false);
    const router = useRouter();

    useEffect(
        () => {
            if (document.querySelector('input[name="female"]:checked')) {
                setIsFemale(true)
            } 
        }
    );

    function handleChange(event) {
        event.target.value == "female" ? setIsFemale(true) : setIsFemale(false)
    }

    return (
        <>
            <Layout>
                <div style={{position:"relative", padding:"10px 0 100px 0"}}>
            <h1>Welcome to ImmiHealth!</h1>
                    
                    <Box
                        component="form"
                        sx={{
                           display: 'flex',
                           flexDirection: 'column'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <p style={{marginBottom:"50px"}}>We would like to get to know you better. Please answer the questions below.</p>
                        
                            <label htmlFor="birthday">What is your date of birth?</label>
                            <input id="birthday" type="date" name="birthday" />

                            <p>What is your gender?</p>
                            <div className={styles.flex_row}>
                                <div onChange={handleChange}>
                                    <input type="radio" id="male" name="gender" value="male" onChange={ () => setIsFemale(false)} />
                                    <label for="male">Male</label>
                                </div>
                                <div onChange={handleChange}> 
                                    <input type="radio" id="female" name="gender" value="female" onChange={ () => setIsFemale(true)} />
                                    <label for="female">Female</label>
                                </div>
                            </div>

                            <div style={{display: isFemale ? "block" : "none" }}>
                                    <p>Are you pregnant?</p>
                                    <div className={styles.flex_row}>
                                        <div>
                                            <input type="radio" id="pregnant" name="pregnancy" value="pregnant" />
                                            <label for="pregnant">Yes</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="not_pregnant" name="pregnancy" value="not_pregnant" />
                                            <label for="not_pregnant">No</label>
                                        </div>
                                     </div>
                                   </div>

                                   <p>Have you been in Germany for longer than 15 months?</p>
                                   <div className={styles.flex_row}>
                                        <div>
                                            <input type="radio" id="longer" name="residency" value="longer" />
                                            <label for="male">Yes</label>
                                        </div>
                                    <div> 
                                         <input type="radio" id="shorter" name="residency" value="shorter" />
                                        <label for="female">No</label>
                                    </div>
                                </div>
                    </Box>
                    <Fab color="primary" 
                         aria-label="submit" 
                         className={styles.right_corner}
                         onClick={ () => { router.push('/main')}}
                    >
                        <CheckIcon />
                    </Fab>
                    </div>
            </Layout>
        </>
    )
}