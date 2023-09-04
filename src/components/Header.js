import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                {/* <img></img> */}
                <p>Calculator</p>
            </div>
            <div>
                <span className={styles.span}>-</span>
                <span className={styles.span}>=</span>
                <span className={styles.span}>x</span>
            </div>
        </header>
    )
}

export default Header;