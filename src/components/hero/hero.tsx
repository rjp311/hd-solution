import styles from './hero.module.scss';

import { FunctionComponent } from "react";
import Image from 'next/image';
import Link from 'next/link';

import ImageHeroDesktop from '../../assets/image-web-3-desktop.jpg';
import ImageHeroMobile from '../../assets/image-web-3-mobile.jpg';
import FallbackImage from '../image/image';

interface IHeroProps {
    data: {
        title: string,
        description: string,
        imageUrl: string,
        ctaButton: {
            name: string,
            url: URL,
        },
        fallback: boolean,
    },
    className: string
}

const Hero: FunctionComponent<IHeroProps> = (props) => {
    const {data, className} = props;

    return (
        <article className={`${styles.hero} ${className}`}>
            {data.imageUrl && 
                <FallbackImage 
                    src={data.imageUrl}
                    fallbackSrc={ImageHeroDesktop}
                    alt={`Hero Article Image - ${data.title}`} 
                    className={styles.desktop}
                    width={1460}
                    height={600}
                ></FallbackImage>
            }
            {data.imageUrl && 
                <FallbackImage 
                    src={data.imageUrl} 
                    fallbackSrc={ImageHeroMobile}
                    alt={`Hero Article Image - ${data.title}`} 
                    className={styles.mobile}
                    width={686}
                    height={600}
                ></FallbackImage>
            }
            <div className={styles.info}>
                <h1>{data.title}</h1>
                <div className={styles.details}>
                    <small>{data.description}</small>
                    <Link href={data.ctaButton?.url}>
                        <button>{data.ctaButton?.name}</button>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Hero