import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon,Button } from 'antd';
import Form from './pages/Form'
import EditPage from './pages/EditPage'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

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
        <DndProvider backend={HTML5Backend}>
          <Layout style={{display:'flex',flexDirection:'row'}}>
            <Layout style={{flex:1}}>
              <Content style={{ margin: '10px 10px',background: '#fff', padding: 10 }}>
                <Form/>
              </Content>
            </Layout>
            <Layout style={{flex:1}}>
              <Content style={{ margin: '10px 10px',background: '#fff', padding: 10 }}>
                  <Button type="primary">复制代码</Button>
                <EditPage/>
              </Content>
            </Layout>
          </Layout>
        </DndProvider>
      </Layout>
  );
}

export default App;
