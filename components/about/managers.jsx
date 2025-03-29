"use client"
import React, {useContext} from 'react';
import styles from "@/app/about/about.module.css";
import {ManagerContext} from "@/providers/ManagerProvider";
import parse from "html-react-parser";

const Managers = () => {
    const managers = useContext(ManagerContext);
    return (
        <div className={styles.container}>
            {managers.map((item)=>(
                <div key={item.id} className={styles.row}>
                    <h2>{item.fullname}</h2>
                    <div className={styles.avatar}>
                        <img src={process.env.IMAGE_URL+item.image} alt=""/>
                    </div>
                    <div className={styles.content}>

                        <p>{parse(item?.content || "")}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Managers;