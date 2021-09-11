import React, { useState } from 'react';
import '../Styles/HomePage.css';
import SmoothList from 'react-smooth-list';
import Typist from 'react-typist';
import img from '../Images/logo.png';
import {ImLinkedin, ImGithub, ImMail} from 'react-icons/im'
import { Container } from 'react-bootstrap';

function HomePage() {
  const [renderMsg, setRenderMsg] = useState(false)

  return (
    <div className="homePage" id="homepage">
      <img src={img} className="logo"></img>
      <h1>
      <Typist className='title' 
        cursor={{ hideWhenDone: true}}
        avgTypingDelay={40}
        startDelay={1500}
        onTypingDone={()=>setRenderMsg(true)}>
        Hi
        <Typist.Backspace count={2} delay={1000} />
        I'm Timothy
        <Typist.Backspace count={12} delay={2000} />
        Welcome to Tim's Corner
      </Typist>
      </h1>
      <div className="subList">
      {renderMsg ? (
      <SmoothList delay='1010'>
      <h3>Software Engineering and Management · McMaster University</h3>
      <Container>   
        <ImLinkedin color="white" size="50" className='iconLink'/>
        <ImGithub color="white" size="50" className='iconLink'/>
        <ImMail color="white" size="50" className='iconLink'/>
      </Container>
      </SmoothList>
      ) : null }
      </div>
    </div>
  );
}

export default HomePage;
