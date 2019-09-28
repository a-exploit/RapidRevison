import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { Card, Col, Row } from 'antd';
import URLBar from './components/URLBar/urlbar.jsx'
import { Route,Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import Subjects from './components/subjects/subjects'
function App() {
const particlesOptions={
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
  }
//   const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={App} />
//       <Route path="/contact" component={Contact} />
//     </div>
//   </Router>
// )

  const [clicked,setClicked]=useState(0);
    const items = [
  {
    title: 'CHN-201',
    name: 'Heat Tranfer',
  },
  {
    title: 'CHN-203',
    name: 'Mechanical Operations'
  },
  {
    title: 'CHN-205',
    name: 'Transport Phenomenon'

  },
  {
    title: 'CHN-207',
        name: 'Chemical Engineering Thermodynamics'

  },
  {
    title: 'HSS-002',
        name: 'Economics'

  },
  {
    title: 'MIN-208',
        name: 'Engineering Drawing'

  },
];
    // {setClicked(window.location.pathname='/'?0:1)}
useEffect(()=>{
  setClicked(window.location.pathname==='/'?0:1)
})
  
        // background: 'linear-gradient(to left, #ffafbd, #ffc3a0)',
  return (
    <>
    
    
    <Particles className='particles'
          params={particlesOptions}      
        />
    <h1>Rapid Revision</h1>
    <Router>
      <div className='subjects'>
        { 
           !(clicked)?(
           items.map((item)=>
           <Link to='/summarizer/' onClick={()=>setClicked(1)} >{<Subjects  sub={item} />}</Link>)):<p></p>
        }
            </div>
         <Switch>
         <Route path="/summarizer/">
            <URLBar />
            <br/>
            <Link to='/'><h2 onClick={()=>setClicked(0)}>Go Back</h2></Link>
          </Route>
            {
            items.map((item,id)=>
           <Route path={"/courses/"+id} render={(props)=><Subjects {...props} sub={item}/>}/>)
          }
        </Switch>
    }
    </Router>


    </>
  );
}

export default App;
