import React,{Component} from 'react';
import Cell from "../components/cell";


export default class Follow extends Component{

  state={
    follow : []
  };

  async componentDidMount(){
    // let res =  await React.axios({url:'/api/goods/follow',params:{_page:1,_limit:8}})
    // this.setState({follow:res.data.data})
    React.axios.all([
      React.axios({url:'/api/goods/follow',params:{_page:1,_limit:15}})
    ]).then(React.axios.spread((follow)=>{//banner|home ~~ res
      follow.data.data.map(item => item.detail.auth_icon1=this.baseUrl + '/' + item.detail.auth_icon1 );
      follow.data.data.map(item => item.detail.auth_icon2=this.baseUrl + '/' + item.detail.auth_icon2 );
      follow.data.data.map(item => item.detail.auth_icon3=this.baseUrl + '/' + item.detail.auth_icon3 );
      this.setState({
        follow:follow.data.data
      })
    }));
  }

  render(){
    let {follow}=this.state;
    return (
      <div className="pt" style={{paddingTop:"1.5rem"}}>
        {
          follow.map((item,index) => (
            <Cell
              key={item._id}
              index={index}
              data={item}
              to={{pathname:'/detail',apiname:'follow'}}
            >
              <button style={{float:'right'}}>++</button>
            </Cell>
          ))
        }

      </div>
    )
  }
}