import { TimerIcon } from 'lucide-react';

import styles from './style.module.css';



export function Logo() {
    return (
        <div className={styles.Logo}>
            <a className={styles.LogoLink} href="#">
                <TimerIcon/>
                <span>Cronos</span>
            </a>
        </div>
    )
        
}   