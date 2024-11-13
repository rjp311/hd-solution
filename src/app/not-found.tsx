import styles from './page.module.scss';

export default function NotFound() {

    return (
        <main>
            <section className={styles.section}>
                <h1 className={styles.sorry}>Sorry! We couldn't find what you're looking for.</h1>
            </section>
        </main>
    )
}