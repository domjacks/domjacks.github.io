import Nav from './Nav'
import styles from './Header.module.css'

function Header() {
    return (
        <div class={styles.header}>
            <h1>
                Dom Jackson
            </h1>
            <Nav />
        </div>
    )
}

export default Header