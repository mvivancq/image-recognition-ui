import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    let url = imageUrl;
    if(imageUrl === '')
        url = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-three-men-sitting-in-van.jpg?v=thumb';
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={url} width='500px' heigh='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;