import React from "react";
import styles from "./Header.module.css";

interface IProps {
    balance:number;
    payout:number
}

const Header = (props:IProps) => {
    const{balance, payout} = props;
   return(
       <nav className={styles.wrapper}>
           <div>
               <label>Balance</label>
               <p>{balance}$</p>
           </div>
           <div>
               <label>Payout</label>
               <p>{payout}$</p>
           </div>
       </nav>
   )
}

export default Header;