import styles from './styles.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
          <a href="#">Entenda a técnica Pomodoro</a>
          <p>Chronos Pomodoro &copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
        </footer>
    )
}