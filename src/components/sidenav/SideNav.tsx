import React from "react";
import styles from "./SideNav.module.css"; 

const SideNav = () => {
    const arr:number[] = new Array(8).fill(1)
    return<div className={styles.wrapper}>
        <img src="/images/Glyph.svg" className={styles.brand} alt="glyph" />
        <ul className={styles.items}>
            {arr.map((item:number, key:number) => (
                <li key={key} className={styles.item}>
                    <div></div>
                </li>
            ))}
        </ul>
    </div>
}

export default SideNav;