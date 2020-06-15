import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {    
    return (
        <div className='center ma pa3'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                {box.topRow !== undefined &&
                    <div>
                        {box.leftCol.map((name,index) => (
                            <div
                                className= 'bounding-box'
                                style={{top: box.topRow[index], right: box.rightCol[index], bottom: box.bottomRow[index], left: box.leftCol[index]}}
                            >
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>

    );
}


export default FaceRecognition