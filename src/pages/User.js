import React,{Component} from 'react';
import styles from  '../assets/css/user.module.css'
import qs from "qs";
export default class User extends Component{
  state={
    a:"",
    img:"",
  };
  logout=()=>{
    window.localStorage.removeItem('user');
    this.props.history.push('/login')
  };

  componentDidMount() {
    // alert(JSON.parse(window.localStorage.getItem("user")))
    let a = qs.parse(window.localStorage.getItem("user"));
    console.log(a.data.icon);
    this.setState({
      a:a.data.nikename,
      img:this.baseUrl + '/' + a.data.icon
    })
  }


  render(){
    return (
      <div className={styles.content}>
        <div className={styles.header}>
          <h2><img src={this.state.img} alt=""/></h2>
          <div className={styles["user-box"]}>
            <a className={styles["a1"]}>{this.state.a}</a>
            <a onClick={this.logout} className={styles["a2"]}>注销</a>
          </div>
          <ul className={styles.clear}>
            <li>
              <span>3</span>
              <p>关注</p>
            </li>
            <li>
              <span>6</span>
              <p className={styles.end}>粉丝</p>
            </li>
          </ul>
        </div>
        <div className={styles.docList}>
          <ul>
            <li className={styles["gk-text"]}>
              <i></i>
              <p>公开博文</p>
              <b></b>
              <span>5</span>
            </li>
            <li className={styles["mm-text"]}>
              <i></i>
              <p>秘密博文</p>
              <b></b>
              <span>12</span>
            </li>
            <li className={styles["cg-text"]}>
              <i></i>
              <p>草稿箱</p>
              <b></b>
              <span>12</span>
            </li>
            <li className={styles["sc-text"]}>
              <i></i>
              <p>收藏夹</p>
              <b></b>
              <span>13</span>
            </li>
            <li className={styles.my_cz}>
              <i></i>
              <p>收藏夹</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}