import React from 'react';
import {Card } from 'antd';
import bg from './bg.jpg'
export default class subjects extends React.Component {
	constructor(props){
		super(props);
		this.state={
			      background: 'linear-gradient(to right, #c31432, #240b36)', 
			       background:'linear-gradient(to right, rgba(17,0,51,0.86) 0%, rgba(13,133,109,0.74) 58%, rgba(21,57,94,0.69) 82%, rgba(27,0,82,0.49) 100%)',
			       backgroundImage:`url(${bg})`,
			      backgroundSize:'500% auto',    
			      fontWeight:600,
			      fontFamily: 'ABeeZee, sans-serif',

			      color:'#C2E1FA',
			      fontSize:'1rem',
			      backgroundPosition: 'left center',
			      transition:'.5s ease'
  		}
	}

onHover=()=>{
	// this.contentStyle['background-position']= 'right center';
	this.setState({backgroundPosition: 'right center',backgroundSize:'800% auto'})
}
onUnHover=()=>{
	// this.contentStyle['background-position']= 'right center';
	this.setState({backgroundPosition: 'left center',backgroundSize:'500% auto'})
}


	render() {
  const style={
      background: 'linear-gradient(to bottom, #114357, #f29492)',
      textAlign:'justify', 
      // fontWeight:900,
      // fontSize:'2rem'
  }

		return (
    <Card title={this.props.sub['title']} hoverable border='true' style={{ border: '2px outset blue',
  borderRadius: '10px 5px'}}  bodyStyle={this.state} headStyle={{fontWeight:1000}}onMouseEnter={this.onHover}
	              onMouseLeave={this.onUnHover} >
      <p>{this.props.sub['name']}</p>
    </Card>
		);
	}
}
// <Card title={item.title} 
// 	              hoverable 
// 	              onMouseEnter={this.onHover}
// 	              onMouseLeave={this.onUnHover}
// 	              bodyStyle={this.state}
// 	              >{item.name}
// 	             </Card>