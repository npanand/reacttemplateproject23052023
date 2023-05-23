import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

const Footer=()=> {
    const location = useLocation();
    
        return (
            <>
            {location.pathname !== '/sign-in' && <footer className={"footer" + (window === window.parent ? ' ' : ' hidden')}>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <span className="footerText">react template project</span>
                </div>
            </footer>}
            </>
        );
    

}

export default Footer;