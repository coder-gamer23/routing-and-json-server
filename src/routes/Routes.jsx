import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import Home from "../Main-page/sidebartask";
import Aboutpage from "../Excercise/Task4/about";
import Contactpage from "../Excercise/Task4/contact";
import Sample from "../Excercise/Task4/details_datas/sample";
import Demo from "../Excercise/Task4/details_datas/demo";
import Task from "../Excercise/Task4/details_datas/task";
import Detailspage from "../Excercise/Task4/details";

import Homepage from "../Excercise/Task4/home";
import Task4 from "../Excercise/Task4/main";
import Task5 from "../Excercise/Task6";
import RegisterForm from "../Excercise/Task5/registerform";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <ProSidebarProvider>
    <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />}>    
        <Route path="task4" element={<Task4 />}>
          <Route path="home" element={<Homepage />} />
          <Route path="aboutus" element={<Aboutpage />} />
          <Route path="contactus" element={<Contactpage />} />
          <Route path="detailsofus" element={<Detailspage />}>
            <Route path="sample" element={<Sample />} />
            <Route path="demo" element={<Demo />} />
            <Route path="task" element={<Task />} />
          </Route>
        </Route>
        <Route path="task5" element={<Task5 />} />
        <Route path="task6" element={<RegisterForm />} />
      </Route>
    </Routes>
    </ProSidebarProvider>
  );
};

export default AppRoutes;
