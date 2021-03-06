import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './ReactParticles.css';


const particlesOptions = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        },
        shape: {
            type: "polygon",
            stroke: {width: 1, color: "#ffffff"},
            polygon: {nb_sides: 6}

        },
        opacity: {
            value: 0.3,
            random: true,
            anim: {enable: true, speed: 0.5, opacity_min: 0.0, sync: false}
        },
        size: {
            value: 15.0,
            random: true,
            anim: {enable: true, speed: 10.0, size_min: 0.0, sync: false}
        },
        move: {
            enable: true,
            random: true,
            speed: 2.0,
            bounce: false,
            out_mode: "bounce"
        }
    },
    interactivity: { 
        events: {
            onhover: {enable: true, mode: "repulse"},
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 150, duration: 0.4 },
            push: { particles_nb: 2 }
        }
    },
};

class ReactParticles extends Component {

    render() {
        return(
            <Particles className='particles' params={particlesOptions}/>
        );
    }

}


export default ReactParticles;
