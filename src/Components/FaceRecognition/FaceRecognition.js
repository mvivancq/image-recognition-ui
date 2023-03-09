import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    let url = imageUrl;
    if(imageUrl === '')
        url = 'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-three-men-sitting-in-van.jpg?v=thumb';
    let boxes = [];
    let i=0;
    for(let mybox of box){
        boxes.push(<div className='bounding-box' key={i} style={{top: mybox.topRow, right: mybox.rightCol, bottom: mybox.bottomRow, left: mybox.leftCol}}></div>);
        i++;
    }
    return(
    <div className='center ma'>
        <div className='absolute mt2'>
            <img id='inputimage' alt='' src={url} width='500px' heigh='auto'/>
            {boxes}
        </div>
    </div>
    );
}

export default FaceRecognition;