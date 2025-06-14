import React, { useContext } from 'react';
import {
  HomeOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { Routes, Route, useNavigate, Navigate } from "react-router";
import { IngresarPage } from "./Ingresar";
import { ColaPage } from './Cola';
import { CrearTicket } from './CrearTicket';
import { EscritorioPage } from './Escritorio';
import { UiContext } from '../contex/UIContext-only';


export const RouterPage = () => {

  const navigate = useNavigate();

  const { ocultarMenu } = useContext( UiContext )

  return (
    <Layout style={{ height: '97vh' }}>
      <Sider collapsedWidth="0" breakpoint="md" hidden={ ocultarMenu }>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Ingresar',
              onClick: () => navigate('/ingresar'),
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Cola',
              onClick: () => navigate('/cola'),
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Crear ticket',
              onClick: () => navigate('/crear'),
            }/* ,
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'Escritorio',
              onClick: () => navigate('/escritorio'),
            } */
          ]}
          
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fff',
            borderRadius: 'borderRadiusLG',
          }}
        >
          <Routes>
            
            <Route path="/ingresar" element={<IngresarPage />} />
            <Route path="/cola" element={<ColaPage />} />
            <Route path="/crear" element={<CrearTicket />} />
            <Route path="/escritorio" element={<EscritorioPage />} /> 
            <Route path="*" element={<Navigate to="/ingresar" />} />

            
            {/* Agrega aquí tus otras rutas */}
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};