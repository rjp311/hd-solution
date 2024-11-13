import styles from './header.module.scss'
import Navigation from './navigation';

const getNav = async () => {
    const res = await fetch(process.env.URL + '/api/navigation', { method: 'GET' })
    if (res.ok) {
        const data = await res.json();
        return data?.body;
    }
    return undefined;
}

export default async function Header() {
    const data = await getNav();
    const navigation = data?.navigation ?? undefined
    // Fetch navigation data, pass to client component for interactivity
   
    return (
        <header className={styles.header}>
            <Navigation props={navigation}/>
        </header>
    );
}