import React,{Component} from 'react';

import Cell from "../components/cell";


export default class Column extends Component{
  state={
    column : []
  };

  async componentDidMount(){
    // let res =  await React.axios({url:'/api/goods/column',params:{_page:1,_limit:6}})
    // this.setState({column:res.data.data})
    React.axios.all([
      React.axios({url:'/api/goods/column',params:{_page:1,_limit:15}})
    ]).then(React.axios.spread((column)=>{//banner|home ~~ res
      column.data.data.map(item => item.detail.auth_icon1=this.baseUrl + '/' + item.detail.auth_icon1 );
      column.data.data.map(item => item.detail.auth_icon2=this.baseUrl + '/' + item.detail.auth_icon2 );
      column.data.data.map(item => item.detail.auth_icon3=this.baseUrl + '/' + item.detail.auth_icon3 );
      this.setState({
        column:column.data.data
      })
    }));
  }
  render(){
    let {column}=this.state;
    return (
      <div className="pt" style={{paddingTop:"1.5rem"}}>

        {
          column.map(item=>(
            <Cell
              key={item._id}
              data={item}
              to={{pathname:'/detail',apiname:'column'}}
            />
          ))
        }
      </div>
    )
  }
}