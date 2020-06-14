import React from 'react';
import Tilt from 'react-tilt';
import eye from './image.png';
 
const Logo = () => {
    return (
      <div>
        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3">
                <img style={{paddingTop: '5px'}} alt='logo' src={eye} />
            </div>
        </Tilt>
      </div>  
    );
}

export default Logo;