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
    name: string,
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
                <Link href="/">
                    <Image 
                        src={Logo}
                        alt='Logo'
                    ></Image>
                </Link>
            </div>
            <nav className={`${styles.nav} ${isBurgerOpen && styles.open}`}>
                <div className={styles.closer} onClick={() => ToggleHamburger()}>
                    <Image src={MenuClose} alt='Close Menu'/>
                </div>
                {nav.map((item: INavItem ,i: Key) => {
                    return (
                        <Link key={i} href={item.url} className={styles.link}>
                            {item.name}
                        </Link>
                    )
                })}
            </nav>
            <div className={styles.opener} onClick={() => ToggleHamburger()}>
                <Image src={Menu} alt='Open Menu' />
            </div>
            <div className={`${styles.backdrop} ${isBurgerOpen && styles.open}`} onClick={() => ToggleHamburger()}></div>
        </div>
    )
}

export default Navigation