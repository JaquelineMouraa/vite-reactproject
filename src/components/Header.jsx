import styles from './Header.module.css'
// import logo from '../assets/app-logo.svg'

export function Header() {
    return(
        <header className={styles.header}>
            {/* <img src={logo} alt="logotipo do app" />; */}
            <strong>Time line</strong>
        </header>
    )
}