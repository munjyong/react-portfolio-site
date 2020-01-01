import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Contact extends Component {
    state = {}
    render() {
        return (
            <div>
                <Fade bottom>
                    <div className='contact-content'>
                        <ul>
                            {data.social.map((link, index) => (
                                <li key={index}><a href={link.url}><img src={link.image} alt={link.name}></img></a></li>
                            ))}
                        </ul>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Contact;