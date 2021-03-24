import React, { useRef } from "react";
import styles from "./Service.module.css";

interface IService{
    site: string;
    promocode: string;
    activated: boolean;
    handleActive: (val:string) => void;
}

const Service = (props:IService) => {
    const promocodeRef = useRef<HTMLTextAreaElement>({} as HTMLTextAreaElement);
    const handleCopy = () => {
        promocodeRef.current.select();
        promocodeRef.current.setSelectionRange(0, 99999);
        document.execCommand("copy");
    };

    return(
        <div className={styles.wrapper}>
            {props.activated && 
            <span className={styles.active}>Bonus Activated</span>}
            <div>
                <p className={styles.site}>{props.site}</p>
                <label className={styles.description}>Description</label>
            </div>
            <div>
                <label className="user-label">PROMOCODE</label>
                <div className={styles.promoBonus}>
                    <div className="box">
                        <p>{props.promocode}</p>
                        <textarea
                            value={props.promocode}
                            ref={promocodeRef}
                            className={styles.copy}
                        />
                        <img 
                            src="/images/copyIcon.svg" 
                            className={styles.selector} 
                            onClick={handleCopy}
                            alt="copy" 
                        />
                    </div>
                    <button 
                        className="user-button" 
                        onClick={() => props.handleActive(props.site)}
                    >
                        Activate bonus
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Service