import styles from '../styles/Register.module.css';

import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { localeContext, targetLocaleContext, userLocale, targetLocale } from '../lib/locale-context';
import { userLocaleInterface, targetLocaleInterface} from '../lib/locale-context';

import Layout from '../components/Layout'; 
import Dropdown from '../components/Dropdown';
import { Box, TextField, Fab } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const langData = require('../lib/supportedLocales.json')
const countryData = require('../lib/supportedCountries.json')

export default function Register() {
    const router = useRouter();

    const [userLocale,setUserLocale] = useState('en');
    const [targetLocale,setTargetLocale] = useState('');


  const changeLocale = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setUserLocale(e.target.value);
  }

  const changeTargetLocale = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setTargetLocale(e.target.value);
  }

    const userLocaleState: userLocaleInterface = {
        locale: userLocale,
        changeLocale: changeLocale
      }
    
      const targetLocaleState: targetLocaleInterface = {
        locale: userLocale,
        changeTargetLocale: changeTargetLocale
      }

    return (
        <>
            <Layout>
                <div style={{position:"relative", padding:"10px 0 100px 0"}}>
            <h1>Welcome!</h1>
                    <p>Please confirm your preferred language</p>
                    <localeContext.Consumer>
                        { (userLocaleState) => (
                            <Dropdown 
                            fieldLabel="Preferred Language" 
                            shortLabel="user-language"
                            locale={userLocale} 
                            handleChange={userLocaleState?.changeLocale} 
                            data={langData}  
                        />
                        )}
                    </localeContext.Consumer>
                
                    <p>Please confirm the official language of your new country</p>
                    <targetLocaleContext.Consumer>
                        { (targetLocaleState) =>
                            <Dropdown 
                            fieldLabel="Official Language" 
                            shortLabel="official-language"
                            locale={targetLocale} 
                            handleChange={targetLocaleState?.changeTargetLocale} 
                            data={countryData}  
                        />
                        }
                    </targetLocaleContext.Consumer>
                    
                    <Box
                        component="form"
                        sx={{
                           display: 'flex',
                           flexDirection: 'column'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <p style={{marginTop:"50px"}}>Great! Now please answer the questions below to create your account</p>
                        <TextField id="firstname" label="Firstname" variant="filled" sx={{backgroundColor:"rgba(250,250,250,0.7)", margin:"15px 0"}} />
                        <TextField id="lastname" label="Lastname" variant="filled" sx={{backgroundColor:"rgba(250,250,250,0.7)", margin:"15px 0"}} />
                        <TextField id="email" label="Email" variant="filled" sx={{backgroundColor:"rgba(250,250,250,0.7)", margin:"15px 0"}} />
                        <TextField id="password" label="Password" variant="filled" sx={{backgroundColor:"rgba(250,250,250,0.7)", margin:"15px 0"}} />
                        <TextField id="confirm-password" label="Confirm Your Password" variant="filled" sx={{backgroundColor:"rgba(250,250,250,0.7)", margin:"15px 0"}} />
                    
                    </Box>
                    <Fab color="primary" 
                         aria-label="submit" 
                         className={styles.right_corner}
                         onClick={ () => router.push('./onboarding')}
                    >
                        <CheckIcon />
                    </Fab>
                    </div>
            </Layout>
        </>
    )
}