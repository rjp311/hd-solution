import Hero from "@/components/hero/hero";
import Sidebar from "@/components/sidebar/sidebar"
import styles from "./page.module.scss";
import Articles from "@/components/articles/articles";

const getContent = async () => {
  const res = await fetch(process.env.URL + '/api/content', { method: 'GET' })
  if (res.ok) {
      const data = await res.json();
      return data?.body;
  }
  return undefined;
}

export default async function Home() {
  const data = await getContent();
  const hero = data?.hero ?? undefined
  const sidebar = data?.sidebar ?? undefined
  const articles = data?.articles ?? undefined

  return (
    <main>
      <section className={styles.top}>
        <Hero data={hero} className={styles.hero}></Hero>
        <Sidebar data={sidebar} className={styles.sidebar}></Sidebar>
      </section>
      <section>
        <Articles data={articles} className={styles.articles}></Articles>
      </section>
    </main>
  );
}
