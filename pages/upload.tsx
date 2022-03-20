import styles from '../styles/Main.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LayoutAlt from '../components/LayoutAlt';

export default function Upload() {
    useEffect(
        () => { 
            const camScan = document.getElementById('camera');
            const fileUpld = document.getElementById('fileupload');
            console.log(camScan)
        }, []
    );
    
    return (
        <LayoutAlt>
            <div className={styles.card_white}>
            <form style={{display:'none'}}>
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
            </div>
        </LayoutAlt>
    );
}