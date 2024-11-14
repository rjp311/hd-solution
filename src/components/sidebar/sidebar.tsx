import styles from './sidebar.module.scss';

import { IArticle } from '@/types/global';
import { FunctionComponent, Key } from "react";
import Link from 'next/link';

interface ISidebarProps {
    data: {
        title: string,
        articles: Array<IArticle>
    },
    className: string
}

const Sidebar: FunctionComponent<ISidebarProps> = (props) => {
    const {data, className} = props;

    return (
        <aside className={`${styles.sidebar} ${className}`}>
            {data.title && <h2>{data.title}</h2>}
            <div className={styles.list}>
                {data.articles && data.articles.map((article: IArticle, i: Key) => {
                    return (
                        <Link key={i} href={article.url} className={styles.article}>
                            {article.title && <h4>{article.title}</h4>}
                            {article.description && <small>{article.description}</small>}
                        </Link>
                    )
                })}
            </div>
        </aside>
    )
}

export default Sidebar