import styles from '../styles/Register.module.css';

import { useEffect, useState } from 'react';
import { localeContext, targetLocaleContext, userLocale, targetLocale } from '../lib/locale-context';

import Layout from '../components/Layout'; 
import Dropdown from '../components/Dropdown';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';

const langData = require('../lib/supportedLocales.json')
const countryData = require('../lib/supportedCountries.json')

export default function Register() {
    function handleClick() {
        console.log("");
    }

    

    return (
        <>
            <Layout>
                <div style={{position:"relative", padding:"10px 0 100px 0"}}>
            <h1>Welcome!</h1>
                    <p>Please confirm your preferred language</p>
                    <localeContext.Consumer>
                        { ({ userLocale, changeLocale }) => (
                            <Dropdown 
                            label="Preferred Language" 
                            shortLabel="user-language"
                            locale={userLocale} 
                            handleChange={changeLocale} 
                            data={langData}  
                        />
                        )}
                    </localeContext.Consumer>
                
                    <p>Please confirm the official language of your new country</p>
                    <targetLocaleContext.Consumer>
                        { ({ targetLocale, changeTargetLocale }) =>
                            <Dropdown 
                            label="Official Language" 
                            shortLabel="official-language"
                            locale={targetLocale} 
                            handleChange={changeTargetLocale} 
                            data={countryData}  
                        />
                        }
                    </targetLocaleContext.Consumer>
                    <Fab color="primary" 
                         aria-label="submit" 
                         className={styles.right_corner}
                         onClick={handleClick}
                    >
                        <CheckIcon />
                    </Fab>
                    </div>
            </Layout>
        </>
    )
}