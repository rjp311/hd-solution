'use client'

import styles from './header.module.scss'

import { useState, useCallback, useEffect, FunctionComponent, Key } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Logo from '../../assets/logo.svg';
import Menu from '../../assets/icon-menu.svg';
import MenuClose from '../../assets/icon-menu-close.svg';

interface INavItem {
    name: String,
    url: URL,
}

interface INavProps {
    props: Array<INavItem>,
}

const Navigation: FunctionComponent<INavProps> = ({props}) => {
    const path = usePathname();
    const nav = props

    const [isBurgerOpen, setBurgerOpen] = useState(false);

    // Toggle burger menu state.
    const ToggleHamburger = useCallback(() => {
        setBurgerOpen(!isBurgerOpen);
    }, [isBurgerOpen]);

    // Close burger menu on successful navigation / path change.
    useEffect(() => {
        setBurgerOpen(false);
    }, [path])

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image 
                    src={Logo}
                    alt='Logo'
                ></Image>
            </div>
            <div className={`${styles.nav} ${isBurgerOpen && styles.open}`}>
                {nav.map((item: INavItem ,i: Key) => {
                    return (
                        <Link key={i} href={item.url} className={styles.link}>
                            {item.name}
                        </Link>
                    )
                })}
            </div>
            <div className={styles.hamburger} onClick={() => ToggleHamburger()}>
                { !isBurgerOpen && <Image src={Menu} alt='Open Menu' /> }
                { isBurgerOpen && <Image src={MenuClose} alt='Close Menu' /> }
            </div>
        </div>
    )
}

export default Navigation