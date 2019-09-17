import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import Form from './pages/Form'

const {Content, Sider } = Layout;
// const { SubMenu } = Menu;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>表单</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>按钮</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>文件上传</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{display:'flex',flexDirection:'row'}}>
          <Layout style={{flex:1}}>
            <Content style={{ margin: '10px 10px',background: '#fff', padding: 10 }}>
              <Form/>
            </Content>
          </Layout>
          <Layout style={{flex:1}}>
            <Content style={{ margin: '10px 10px',background: '#fff', padding: 10 }}>
              
            </Content>
          </Layout>
        </Layout>
      </Layout>
  );
}

export default App;
