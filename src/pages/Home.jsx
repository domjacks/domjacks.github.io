import styles from './Home.module.css'

function Home() {
    return (
        <div class={styles.home}>
            <p>
                <span role="img" aria-label="wave" class={styles.bioWave}>
                    👋
                </span>
            </p>
            <h1>
                Dom Jackson
            </h1>
            <h2><span class={styles.blink}>&gt;</span> software engineer</h2>
        </div>
    )
}

export default Home