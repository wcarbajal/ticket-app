import React from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { BrowserRouter, Routes, Route } from "react-router";




export const RouterPage = () => {

  return (
     <>
       <Layout style={ { height: '97vh' } }>
         <Sider hidden={ false }>
           <div className="demo-logo-vertical" />
           <Menu
             theme="dark"
             mode="inline"
             defaultSelectedKeys={ [ '1' ] }
             items={ [
               {
                 key: '1',
                 icon: <UserOutlined />,
                 label: 'Ingresar',
               },
               {
                 key: '2',
                 icon: <VideoCameraOutlined />,
                 label: 'Cola',
               },
               {
                 key: '3',
                 icon: <UploadOutlined />,
                 label: 'Crear ticket',
               },
             ] }
           />
         </Sider>
         <Layout>
 
           <Content
             style={ {
               margin: '24px 16px',
               padding: 24,
               minHeight: 280,
               background: 'colorBgContainer',
               borderRadius: 'borderRadiusLG',
             } }
           >
             Content
           </Content>
         </Layout>
       </Layout>
 
 
     </>
   /*  <Routes>
      <Route index element={ <Ingresar /> } />
      <Route path="about" element={ <About /> } />

      <Route element={ <AuthLayout /> }>
        <Route path="login" element={ <Login /> } />
        <Route path="register" element={ <Register /> } />
      </Route>

      <Route path="concerts">
        <Route index element={ <ConcertsHome /> } />
        <Route path=":city" element={ <City /> } />
        <Route path="trending" element={ <Trending /> } />
      </Route>
    </Routes> */
  );
};