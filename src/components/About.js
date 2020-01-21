import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class About extends Component {
    state = {  }
    render() { 
        return (
            <div className='about'>
                <div className='about-content'>
                <h1><Fade bottom cascade>Objective.</Fade></h1>
                <Fade bottom>
                        <p>
                            I am a recent Computer Science graduate seeking to kickstart my web development career.
                            <br></br>
                            <br></br>
                            My passion for learning drives me to challenge myself, experiment with new tools and most importantly... create.
                            <br></br>
                            <br></br>
                            The projects on this site demonstrate skills I have utilized through self-study and online courses, with each project presenting unique challenges I hope to keep on diversifying this portfolio soon.    
                        </p>
                </Fade>
                </div>
            </div>  
        );
    }
}
 
export default About;