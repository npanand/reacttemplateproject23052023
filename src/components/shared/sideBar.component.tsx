import React, { useEffect, useState } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar';
import {
  FaUser,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
  FaGem,
  FaList,
  FaRegLaughWink,
  FaHeart
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import {  AiTwotoneCrown } from "react-icons/ai";

import { GoDashboard } from "react-icons/go";
import {  GiRingingAlarm, IoSettingsSharp, MdDashboard, SiStatuspage } from "react-icons/all";
import { BsClockHistory } from "react-icons/bs";



import { useLocation } from 'react-router-dom';

//image  
import sidebarBG from "../assets/images/sidebarBG.png";



const Sidebar = ({ image,
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange }) => {

  const location = useLocation();

  const [loaded, setLoaded] = useState(false);



  useEffect(() => {
    setLoaded(true);
  }, [])

 


  return (
    <ProSidebar
    //image={image ? sidebarBG : false}
    collapsed={collapsed}
    toggled={toggled}
    onToggle={handleToggleSidebar}
    breakPoint="md"
    className="sidebarMenu"
    >
      <SidebarHeader>
      <Menu iconShape="circle">
          {collapsed ? (
            <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: '9px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: '1px'
                }}
              >
                Pro Sidebar
              </div>
            </MenuItem>
          )}
        </Menu>
      </SidebarHeader  >


      {location.pathname !== "" && loaded &&


        <SidebarContent /* style={{backgroundColor: 'white'}} */>

          <Menu   >
            <MenuItem icon={<MdDashboard className="menuIcons" />} active={location.pathname.toLowerCase() === ('/MainLayout/Dashboard').toLowerCase()}>
              Page1
              <Link to="/MainLayout/Page1" />
            </MenuItem>
            <MenuItem icon={<GiRingingAlarm className="menuIcons" />} active={location.pathname.toLowerCase() === ('/MainLayout/AlarmEvents').toLowerCase()}>
              Page2
              <Link to="/MainLayout/Page2" />
            </MenuItem>
            <MenuItem icon={<SiStatuspage className="menuIcons" />} active={location.pathname.toLowerCase() === ('/MainLayout/DeviceStatus').toLowerCase()}>
              Page3
              <Link to="/MainLayout/Page3" />
            </MenuItem>
            <MenuItem icon={<IoSettingsSharp className="menuIcons" />} active={location.pathname.toLowerCase() === ('/MainLayout/DeviceManagement').toLowerCase()}>
             Page4
              <Link to="/MainLayout/Page4" />
            </MenuItem>
            <MenuItem icon={<AiTwotoneCrown className="menuIcons" />} active={location.pathname.toLowerCase() === ('/MainLayout/Subscription').toLowerCase()}>
              Page5
              <Link to="/MainLayout/Page5" />
            </MenuItem>
            <MenuItem icon={<BsClockHistory className="menuIcons" />} active={location.pathname.toLowerCase() === ('/MainLayout/AlarmHistory').toLowerCase()}>
             Page6
              <Link to="/MainLayout/Page6" />
            </MenuItem>


          </Menu>


        </SidebarContent>}
      <SidebarFooter>
      <div className="sidebar-btn-wrapper" style={{ padding: '16px' }}>
          <Link
            className="sidebar-btn"
            style={{ cursor: 'pointer' }}
            to="/MainLayout/logout"
          >
            <FaUser />
            <span>logout</span>
          </Link>
        </div>


          
      </SidebarFooter>

    </ProSidebar>
  );
};

export default Sidebar;