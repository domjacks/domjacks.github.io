import { Link } from 'preact-router/match';
import './Nav.css'

function Nav() {
    return (
        <nav>
            <ol>
                <li>
                    <Link href="/" class="link">/home</Link>
                </li>
                <li>
                    <Link href="/now" class="link">/now</Link>
                </li>
                <li>
                    <Link href="/readme" class="link">/readme</Link>
                </li>
                <li>
                    <a
                        class="link"
                        href="https://github.com/domjacks"
                        target="_blank"
                        rel="noopener noreferrer">/code</a>
                </li>
                <li>
                    <a
                        class="link"
                        href="mailto:hello@domjackson.xyz">/contact</a>
                </li>
            </ol>
        </nav>
    )
}

export default Nav