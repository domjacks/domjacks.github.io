import { A } from "@solidjs/router";
import styles from './Nav.module.css'

function Nav() {
    return (
        <nav>
            <ol>
                <li>
                    <A href="/" class={styles.link}>/home</A>
                </li>
                <li>
                    <A href="/now" class={styles.link}>/now</A>
                </li>
                <li>
                    <A href="/readme" class={styles.link}>/readme</A>
                </li>
                <li>
                    <a
                        class={styles.link}
                        href="https://github.com/domjacks"
                        target="_blank"
                        rel="noopener noreferrer">/code</a>
                </li>
                <li>
                    <a
                        class={styles.link}
                        href="mailto:hello@domjackson.xyz">/contact</a>
                </li>
            </ol>
        </nav>
    )
}

export default Nav