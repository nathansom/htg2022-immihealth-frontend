import React from 'react';
import styles from '../styles/Home.module.css';

import Link from 'next/Link'

export default function Layout({ children }:React.AllHTMLAttributes<HTMLElement>) {
    return (
        <div className={styles.container}>
      <header className={styles.main}>
      <Link href="/"><img src="/immihealth.svg" alt="Vercel Logo" /></Link>
        <p>Better Life, Better Health</p>
        </header>
      <main className={styles.main}>{ children }</main>
    </div>
    )
};