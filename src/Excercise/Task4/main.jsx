import * as React from 'react';
import { Outlet, Link} from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

function ResponsiveAppBar() {
    const { collapseSidebar } = useProSidebar();
  return (
    <div>
<div style={{display:"flex",gap:"250px"}}>
  <div >
   <Sidebar>
    <Menu>
      <MenuItem component={<Link to="/task4/home" />}> Home page</MenuItem>
      <MenuItem component={<Link to="/task4/aboutus" />}> About page</MenuItem>
      <MenuItem component={<Link to="/task4/contactus" />}> Contact page</MenuItem>
      <MenuItem component={<Link to="/task4/detailsofus" />}> Details page</MenuItem>
    </Menu>
  </Sidebar>
  <main>
    <button onClick={() => collapseSidebar()}>Collapse</button>
  </main>
  </div>
  <div>
    <h1>Welcome to 4th Task</h1>
  </div>
  </div>
  <Outlet />
</div>
  );
}
export default ResponsiveAppBar;
