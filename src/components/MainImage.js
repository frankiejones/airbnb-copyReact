import React from 'react';
import stars from '../5star.jpg';

const MainImage = (props) => {
    return (
        <div>
            <img className="mainimage" src={props.img} alt = "mainimage"/>
            <img className="star" src={stars} alt = "5star"/> 
            <p> {props.para}</p> 
            <img className="propic" src={props.profile} alt = "profile"/>
            <h2> {props.name}</h2>
            <h3> {props.city} </h3>
        </div>
    )
};

export default MainImage;
