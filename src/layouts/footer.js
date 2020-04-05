import React,{Component} from 'react';
import styles from "./footer.module.css";
import {NavLink} from 'react-router-dom';

export default class Footer extends Component{
  render(){
    return (
      <div className={styles["foot-btn"]}>
        <ul>
          <li>
            <NavLink
              className={styles.home}
              to="/home"
              activeClassName={styles['home_active']}
            ></NavLink>
          </li>
          <li>
            <NavLink
              className={styles.write}
              to="/shopcart"
              activeClassName={styles['write_active']}
            ></NavLink>
          </li>
          <li>
            <NavLink
              className={styles.my}
              to="/user"
              activeClassName={styles['my_active']}
            ></NavLink>
          </li>
        </ul>
      </div>
    )
  }
}