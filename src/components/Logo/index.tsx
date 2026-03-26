import { TimerIcon } from 'lucide-react';

import styles from './style.module.css';



export function Logo() {
    return (
        <div className={styles.logo}>
            <a href='#' className={styles.LogoLink}>
            <TimerIcon className={styles.LogoIcon}/>
             <span className={styles.LogoText}>Chronos</span>
            </a>
        </div>
    );
}   