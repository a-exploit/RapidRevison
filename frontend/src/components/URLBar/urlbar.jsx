import React from 'react';
import { Input } from 'antd';
import axios from 'axios';
import { Card } from 'antd';
import { Button } from 'antd';
import { Collapse } from 'antd';


export default class urlbar extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			subs:'',
			summary:'',
			keywords:''
		}
	}
forSummary=()=>{
		const id=document.getElementsByClassName('ant-input ant-input-lg')[0].value

			axios({
  method: 'post',
  url: 'http://localhost:8000/polls/summary/',
  data: {
    id: id
  }
}).then(res=> {
	this.setState({summary:res.data})
	console.log(this.state.summary)
	// this.forSummary(res.data);
});
}

forKeywords=()=>{
	const id=document.getElementsByClassName('ant-input ant-input-lg')[0].value

			axios({
  method: 'post',
  url: 'http://localhost:8000/polls/keywords/',
  data: {
    id: id
  }
}).then(res=> {
	this.setState({keywords:res.data})
	console.log(this.state.keywords)
	// this.forSummary(res.data);
});

}


onPressEnterHandle=()=>{
	const id=document.getElementsByClassName('ant-input ant-input-lg')[0].value
	axios({
  method: 'post',
  url: 'http://localhost:8000/polls/',
  data: {
    id: id
  }
}).then(res=> {
	this.setState({subs:res.data})
	// this.forSummary(res.data);
});
}
	render() {
		const { Panel } = Collapse;
		return (
			<>
			<Input placeholder="Enter the Video ID" size='large' style={{display:'block',width:'50%',margin:'auto',height:'200%'}} allowClear />
			<div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
				<Button type="primary" onClick={this.onPressEnterHandle}>Transcripts</Button>
				<Button type="primary" onClick={this.forSummary}>Summary</Button>
				<Button type="primary" onClick={this.forKeywords}>Keywords</Button>
			</div>
			<Collapse defaultActiveKey={['0']}>
				    <Panel header="Transcripts" key="1">
				      <p>{this.state.subs}</p>
				    </Panel>
				    <Panel header="Summary" key="2">
				      <p>{this.state.summary}</p>
				    </Panel>
				    <Panel header="Keywords" key="3">
				      <p>{this.state.keywords.split(' ')}</p>
				    </Panel>
				  </Collapse>
      		</>
		);
	}
}
	// <Card title="Transcripts">
	// 		<p>{this.state.subs}</p>
 //      		</Card>