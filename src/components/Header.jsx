import Nav from './Nav'
import styles from './Header.module.css'

function Header() {
    return (
        <div class={styles.header}>
            <p>
                <span role="img" aria-label="wave" class={styles.bioWave}>
                    👋
                </span>
            </p>
            <h1>
                Dom Jackson
            </h1>
            <h2><span class={styles.blink}>&gt;</span> software engineer</h2>
            <Nav />
        </div>
    )
}

export default Header