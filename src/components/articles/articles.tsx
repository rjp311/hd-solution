import styles from './articles.module.scss';

import { IArticle } from '@/types/global';
import { FunctionComponent, Key } from "react";
import Link from 'next/link';
import FallbackImage from '../image/image';

import ArticleImage01 from '../../assets/image-retro-pcs.jpg';
import ArticleImage02 from '../../assets/image-top-laptops.jpg';
import ArticleImage03 from '../../assets/image-gaming-growth.jpg';

interface IArticlesProps {
    data: Array<IArticle>,
    className: string,
}

const FallbackImages = [
    ArticleImage01,
    ArticleImage02,
    ArticleImage03
]

const Articles: FunctionComponent<IArticlesProps> = (props) => {
    const {data, className} = props;

    return (
        <div className={`${styles.articles} ${className}`}>
            {data && data.map((article: IArticle, i: Key) => {
                const ArticleNumber = String(Number(i) + 1).padStart(2, '0');

                return (
                    <Link key={i} href={article.url ?? '/'} className={styles.article}>
                        { article.imageUrl && 
                            <FallbackImage 
                                src={article.imageUrl} 
                                fallbackSrc={FallbackImages[Number(i)]}
                                alt={`Article Image - ${article.title}`} 
                                className={styles.image}
                                width={200}
                                height={254}
                            ></FallbackImage>
                        }
                        <div className={styles.info}>
                            <h3>{ArticleNumber}</h3>
                            {article.title && <h4>{article.title}</h4>}
                            {article.description && <small>{article.description}</small>}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Articles