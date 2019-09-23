import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon,Button } from 'antd';
import Form from './pages/Form'
import Buttons from './pages/Buttons'
import Files from './pages/Files'
import EditPage from './pages/EditPage'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import '../node_modules/layui-src/dist/css/layui.css'
import { createBrowserHistory } from "history";
const {Content, Sider } = Layout;
// const { SubMenu } = Menu;

function App() {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[history.location.pathname]} mode="inline">
            <Menu.Item key="/form/">
              <Link to="/form/">
                <Icon type="pie-chart" />
                <span>表单</span>
              </Link>
            </Menu.Item>        
            <Menu.Item key="/button/">
              <Link to="/button/">
                <Icon type="desktop" />
                <span>按钮</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/file/">
              <Link to="/file/">
                <Icon type="file" />
                <span>文件上传</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <DndProvider backend={HTML5Backend}>
          <Layout style={{display:'flex',flexDirection:'row'}}>
            <Layout style={{flex:1}}>
              <Content style={{ margin: '10px 10px',background: '#fff', padding: 10 }}>
                <Route path='/' exact component={Form}/>
                <Route path='/form/' component={Form}/>
                <Route path='/button/' component={Buttons}/>
                <Route path='/file/' component={Files}/>
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
    </Router>
  );
}

export default App;
