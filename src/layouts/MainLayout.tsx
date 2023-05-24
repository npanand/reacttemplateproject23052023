import React, { lazy, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import "./assets/styles/MainLayout.component.scss";
import { PrivateRoute } from  "../components/routes/protectedRoute";
import { FaBars } from 'react-icons/fa';
import white from '../../src/assets/images/pc.jpg'




/*------Lazy loading import method------*/
const Header = lazy(() => import("../components/shared/header.component")); 
const Sidebar = lazy(() => import("../components/shared/sideBar.component"));
const Page1=lazy(()=>import("../components/pages/Page1/page1.component"));
const Page2=lazy(()=>import("../components/pages/Page2/page2.component"));
const Page3=lazy(()=>import("../components/pages/Page3/page3.component"));
const Page4=lazy(()=>import("../components/pages/Page4/page4.component"));
const Page5=lazy(()=>import("../components/pages/page5/page5.component"));
const Page6=lazy(()=>import("../components/pages/page6/page6.component"));
const Logout=lazy(()=>import("../components/auth/logout/logout.component"));
const PasswordChange=lazy(()=>import( '../components/pages/Profile/PasswordChange.component'));
const MyProfile=lazy(()=>import( '../components/pages/Profile/Profile.component'));

const MainLayout=(props:any)=>{

   const[isSidebaropen,setisSidebaropen]=useState(true);
   const sidebarClass="sidebarExpanded";
   const { match } = props;
   const isloggedIn = true;
  
  const [collapsed, setCollapsed] = useState(false);
  const [photo, setphoto] = useState(white);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleImageChange = (checked) => {
    setphoto(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };


  return(
    <> {isSidebaropen && <div className="sidebarContainer">
     <Sidebar
        image={photo}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
   </div>}
   
   <div className={(isloggedIn) ? "SG360CSlayoutContainer " + sidebarClass : "SG360CSlayoutContainer"}  >

       
       <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
     <Header/>
       <Switch>
           <PrivateRoute path={`${match.path}/Page1`} component={Page1} />
           <PrivateRoute path={`${match.path}/Page2`} component={Page2} />
           <PrivateRoute path={`${match.path}/Page3`} component={Page3} />
           <PrivateRoute path={`${match.path}/Page4`} component={Page4} />
           <PrivateRoute path={`${match.path}/Page5`} component={Page5} />
           <PrivateRoute path={`${match.path}/Page6`} component={Page6} />
           <PrivateRoute path={`${match.path}/logout`} component={Logout} />
           <PrivateRoute path={`${match.path}/myprofile`} component={MyProfile} />
           <PrivateRoute path={`${match.path}/passwordchange`} component={PasswordChange} />
           <PrivateRoute path="*" component={<Page1/>} />
       </Switch>
       <div className="bottom-left-corner-bg"></div>

   </div>
   
</>

  );
}




export default MainLayout;