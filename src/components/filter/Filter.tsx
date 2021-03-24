import React from "react";
import styles from "./Filter.module.css";

interface IProps {
  searchVal:string;
  handleSearchChange: (val: string) => void;
}
const Filter = (props:IProps) => {
  const {searchVal, handleSearchChange} = props;
  return(
    <div className={styles.wrapper}>
      <label className="user-label">FILTER</label>
      <div className={styles.filter}>
        <div className="box">
            <input value={searchVal} onChange={(e)=>handleSearchChange(e.target.value)}/>
        </div>
        <button className="user-button reset" onClick={() => handleSearchChange("")}>Reset</button>
      </div>
    </div>
  )
}

export default Filter;