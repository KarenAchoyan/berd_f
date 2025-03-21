"use client"
import React, {useContext, useState} from 'react';
import styles from './header.module.css';
import Link from "next/link";
import {MenuOutlined} from "@ant-design/icons";
import {Drawer, Space} from 'antd';
import {AppContext} from "@/providers/AppProvider";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
    const [performanceMenuOpen, setPerformanceMenuOpen] = useState(false);
    const events = useContext(AppContext);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        setAboutMenuOpen(false);
        setPerformanceMenuOpen(false);
    };

    const toggleAboutMenu = () => {
        setAboutMenuOpen(!aboutMenuOpen);
    };

    const togglePerformanceMenu = () => {
        setPerformanceMenuOpen(!performanceMenuOpen);
    };

    return (
        <>
            <div className={`header ${styles.header}`}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <ul>
                            <li>
                                <a>Մեր մասին</a>
                                <div className={styles.drb}>
                                    <div className={styles.drbContent}>
                                        <ul>
                                            <li><Link href='/about/biography'>Կենսագրություն</Link></li>
                                            <li><Link href='/about/managers'>Ղեկավարներ</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li><Link href="/gallery">Պատկերասրահ</Link></li>
                            <li>
                                <a href="#">Ելույթներ</a>
                                <div className={styles.drb}>
                                    <div className={styles.drbContent}>
                                        <ul>
                                            {events.map((item, index) => (
                                                <li key={index}><Link href={'/events/'+item.id}>{item.name}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.middleTitle}>
                        <Link href='/'><img src="/logo.png" alt="Logo"/></Link>
                    </div>
                    <div className={styles.title}>
                        <ul>
                            <li><Link href='/costumes'>Մեր տարազները</Link></li>
                            {/*<li><Link href='/news'>Նորություններ</Link></li>*/}
                            <li><Link href='/studio'>Մեր ստուդիան</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.menuOutlined}>
                    <MenuOutlined onClick={showDrawer}/>
                    <Space/>
                    <Drawer
                        title="Menu"
                        placement={placement}
                        closable={true}
                        onClose={onClose}
                        open={open}
                        key={placement}
                    >
                        <div className={styles.box}>
                            <div className={styles.titles}>
                                <ul>
                                    <li>
                                        <a onClick={toggleAboutMenu}>Մեր մասին</a>
                                        {aboutMenuOpen && (
                                            <div className={styles.customDropdown}>
                                                <ul>
                                                    <li><Link href='/about/biography'>Կենսագրություն</Link></li>
                                                    <li><Link href='/about/managers'>Ղեկավարներ</Link></li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    <li><Link href='/gallery'>Պատկերասրահ</Link></li>
                                    <li>
                                        <a onClick={togglePerformanceMenu}>Ելույթներ</a>
                                        {performanceMenuOpen && (
                                            <div className={styles.customDropdown}>
                                                <ul>
                                                    {events.map((item, index) => (
                                                        <li key={index}><Link href={'/events/'+item.id}>{item.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.titles}>
                                <ul>
                                    <li><Link href='/costumes'>Մեր տարազները</Link></li>
                                    {/*<li><Link href='/news'>Նորություններ</Link></li>*/}
                                    <li><Link href='/studio'>Մեր ստուդիան</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Drawer>
                </div>
            </div>
        </>
);
};

export default Header;
