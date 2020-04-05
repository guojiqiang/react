import React,{Component} from 'react';

import Cell from "../components/cell";


export default class Next2 extends Component{
  state={
    Next2 : []
  };

  async componentDidMount(){
    // let res =  await React.axios({url:'/api/goods/Next2',params:{_page:1,_limit:6}})
    // this.setState({Next2:res.data.data})
    React.axios.all([
      React.axios({url:'/api/goods/Next2',params:{_page:1,_limit:15}})
    ]).then(React.axios.spread((Next2)=>{//banner|home ~~ res
      Next2.data.data.map(item => item.detail.auth_icon1=this.baseUrl + '/' + item.detail.auth_icon1 );
      Next2.data.data.map(item => item.detail.auth_icon2=this.baseUrl + '/' + item.detail.auth_icon2 );
      Next2.data.data.map(item => item.detail.auth_icon3=this.baseUrl + '/' + item.detail.auth_icon3 );
      this.setState({
        Next2:Next2.data.data
      })
    }));
  }
  render(){
    let {Next2}=this.state;
    return (
      <div className="pt" style={{paddingTop:"1.5rem"}}>

        {
          Next2.map(item=>(
            <Cell
              key={item._id}
              data={item}
              to={{pathname:'/detail',apiname:'Next2'}}
            />
          ))
        }
      </div>
    )
  }
}