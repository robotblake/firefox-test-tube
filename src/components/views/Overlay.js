import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';

import './css/Overlay.css';


export default props => (
    <div id="overlay-wrapper" onClick={props.onWrapperClick}>
        <section id="overlay" onClick={props.onOverlayClick}>
            <div id="overlay-header">
                <h2>{props.title}</h2>
                <Link id="overlay-close-button" to={props.closeTo}><Icon name="times" /></Link>
            </div>
            <div id="overlay-content">
                {props.children}
            </div>
        </section>
    </div>
);