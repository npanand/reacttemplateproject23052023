import React, { CSSProperties, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useHistory } from "react-router-dom";
import { subscriber, sidebarSubscriber } from "../../services/messaging.service";
import { FaBell, FcManager } from 'react-icons/all';
import { Nav, NavDropdown } from 'react-bootstrap';

var userName = "";
const styles: any = {
    select: {
        width: 250,
        height: 35,
        marginTop: 5,
        marginLeft: 50
    }
} as const;
const Header = () => {

   // const { rules } = useRBACRules();
    const history = useHistory();

    const location = useLocation();
    const [LOGGED_STATE, SET_LOGGED_STATE] = useState(false);





    const openSideBar = () => {
        sidebarSubscriber.next("EXPAND_SIDEBAR");
    }
    useEffect(() => {

        if (sessionStorage.getItem("login_state") === "LOGGED_IN") {
            SET_LOGGED_STATE(true);
            sidebarSubscriber.next("EXPAND_SIDEBAR");
        }
        subscriber.subscribe((_LOG_FLAG) => {
            if (_LOG_FLAG === "LOGGED_IN") {
                SET_LOGGED_STATE(true);
            }
        });




    }, []);


    return (
        <>
         <div className='row'>
                <div className='col-lg-12'>
            {<nav className="navbar navbar-expand-lg navbar-light sticky-top sgh-header">

                <div className="infyHeader container-fluid">
                   
                  
                    {<div className="navUser col-lg-6">
                        <h1 className='title'>project header</h1>

                    </div>}
                  
                   
                    {/* <div className='col-lg-2'>
                        <div className='notify-icon'><a><span><FaBell/></span></a><span className="notification">4</span></div>
                    </div> */}


                    <div className='col-lg-6 profile-section'>

                         <ul>
                            <li><div className='notify-icon'><a><span><FaBell/></span></a><span className="notification">4</span></div></li>
                         
                        <li>
                        <Nav className='pull-right'>                            
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={<span><span className="svg"><FcManager/></span><span>Project header</span></span>}>
                                     
                                  <NavDropdown.Item>
                                    {LOGGED_STATE &&

                                        <Link className="nav-link" to={"/MainLayout/myprofile"}>
                                            My Profile</Link>
                                    }

                                </NavDropdown.Item>


                                <NavDropdown.Item>
                                    {LOGGED_STATE &&

                                        <Link className="nav-link" to={"/MainLayout/passwordchange"}>
                                            Change Password</Link>
                                    }

                                </NavDropdown.Item>


                                <NavDropdown.Item>
                                    {LOGGED_STATE &&

                                        <Link className="nav-link" to={"/MainLayout/logout"}>
                                            Logout
                                        </Link>
                                    }

                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </li>
                        </ul>
                    </div>
                    </div>
                  
            </nav>}
            </div>
        </div>
        </>
    );

}

export default Header;