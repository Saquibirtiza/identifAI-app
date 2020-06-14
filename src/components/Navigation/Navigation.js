import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return (
            <div>
                <nav style={{display: 'flex', flexdirection: 'row', justifyContent: 'space-around'}}>
                    <div style={{display: 'flex',  flexdirection: 'column'}}>
                        <Logo />
                        <p className='f3 link white pa3'>identifAI</p>
                    </div>
                    <div style={{display: 'flex',  flexdirection: 'column'}}>
                        <p onClick={() => onRouteChange('signout')} className='f3 link dim white pa3 pointer'>Sign Out</p>
                    </div>
                </nav>
            </div>
        );
    }else{
        return(
            <div>
                <nav style={{display: 'flex', flexdirection: 'row', justifyContent: 'space-around'}}>
                    <div style={{display: 'flex',  flexdirection: 'column', justifyContent: 'flex-start'}}>
                        <Logo />
                        <p className='f3 link white pa3'>identifAI</p>
                    </div>
                    <div style={{display: 'flex',  flexdirection: 'column', justifyContent: 'flex-end'}}>
                        <div >
                            <p onClick={() => onRouteChange('signin')} className='f3 link dim white pa3 pointer'>Sign In</p>
                        </div>
                        <div >
                            <p onClick={() => onRouteChange('register')} className='f3 link dim white pa3 pointer'>Register</p>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }





        
        
    
}

export default Navigation;