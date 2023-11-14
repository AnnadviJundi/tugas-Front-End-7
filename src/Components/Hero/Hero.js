import styles from './Hero.module.css'

function Hero  () {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman: No Way Home
                    </h2>
                    <h3 className={styles.hero__genre}>
                        Genre: Action, Adventure, Fantasy
                    </h3>
                    <p className={styles.hero__description}>With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                    className={styles.hero__image}
                    src="https://www.movieposters.com/cdn/shop/products/scan_6255a5e4-1506-4642-8766-529212d9d458_480x.progressive.jpg?v=1654619769"
                    alt="placeholder"
                    />
                </div>
            </section>
        </div>
    );
}

export default Hero;
