
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';


const Home = () => {
    const { collapseSidebar } = useProSidebar();
  return (
    <div>
    <div style={{display:"flex",gap:"250px"}}>
      <div >
       <Sidebar>
        <Menu>
          <MenuItem component={<Link to="/task4" />}> 4th Task</MenuItem>
          <MenuItem component={<Link to="/task5" />}> 5th Task</MenuItem>
          <MenuItem component={<Link to="/task6" />}> 6th Task</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        {window.location.href.split('/')[3]!=='task4'?<button onClick={() => collapseSidebar()}>Collapse</button>:null}
      </main>
      </div>
      <div>
        <h1>Welcome to Main Page </h1>
      </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
