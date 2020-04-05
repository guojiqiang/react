import React,{Component} from 'react';

import Cell from "../components/cell";


export default class Next1 extends Component{
  state={
    Next1 : []
  };

  async componentDidMount(){
    // let res =  await React.axios({url:'/api/goods/Next1',params:{_page:1,_limit:6}})
    // this.setState({Next1:res.data.data})
    React.axios.all([
      React.axios({url:'/api/goods/Next1',params:{_page:1,_limit:15}})
    ]).then(React.axios.spread((Next1)=>{//banner|home ~~ res
      Next1.data.data.map(item => item.detail.auth_icon1=this.baseUrl + '/' + item.detail.auth_icon1 );
      Next1.data.data.map(item => item.detail.auth_icon2=this.baseUrl + '/' + item.detail.auth_icon2 );
      Next1.data.data.map(item => item.detail.auth_icon3=this.baseUrl + '/' + item.detail.auth_icon3 );
      this.setState({
        Next1:Next1.data.data
      })
    }));
  }
  render(){
    let {Next1}=this.state;
    return (
      <div className="pt" style={{paddingTop:"1.5rem"}}>

        {
          Next1.map(item=>(
            <Cell
              key={item._id}
              data={item}
              to={{pathname:'/detail',apiname:'Next1'}}
            />
          ))
        }
      </div>
    )
  }
}