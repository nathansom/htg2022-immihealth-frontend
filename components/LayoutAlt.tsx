import React from 'react';
import styles from '../styles/Main.module.css';

export default function LayoutAlt({ children }:React.AllHTMLAttributes<HTMLElement>) {
    return (
        <div className={styles.container}>
            <main>{ children }</main>
            <footer>
                <img
                    src="/immihealth.svg"
                    alt="logo"
                    width="200px"
                />
            </footer>
        </div>
     )
};