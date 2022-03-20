import styles from '../styles/Main.module.css';

import Link from 'next/Link';

export default function LayoutAlt({ children }) {
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