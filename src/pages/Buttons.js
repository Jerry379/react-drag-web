import React, { useEffect, useState } from 'react';
import { Collapse,Radio,Checkbox} from 'antd';
import DefaultBtn from '../components/buttons/DefaultBtn'

const { Panel } = Collapse;
export default function Buttons(){
    const [theme,setTheme] = useState('')
    const [size,setSize] = useState('')
    const [radius,setRadius] = useState([])
    const [icon,setIcon] = useState('')
    const [group,setGroup] = useState(false)
    const [content,setContent] = useState(false)
    useEffect(()=>{
        /* global layui */
        layui.config({
            dir: 'http://39.104.117.71:8088/yzdj-admin-web/static/layui/'
        })
        layui.use(['form','element'], function(){
            let form = layui.form;
            form.render();
        });
    })

    function changeState(e,type){
        if(type === 'theme'){
            setTheme(e.target.value)
        }else if(type === 'size'){
            setSize(e.target.value)
        }else if(type === 'radius'){
            setRadius(e)
        }else if(type === 'icon'){
            // setTheme(e.target.value)
        }else if(type === 'group'){
            setGroup(e.length>0?true:false)
        }else if(type === 'content'){
            setContent(e.length>0?true:false)
        }
    }
    return (
        <div>
            <DefaultBtn/>
            <Collapse defaultActiveKey={[1,2,3,4,5,6]}>
                <Panel header="主题" key="1">
                    <Radio.Group value={theme} onChange={(e)=>{changeState(e,'theme')}}>
                        <Radio value={'layui-btn-primary'}>layui-btn-primary</Radio>
                        <Radio value={''}>default</Radio>
                        <Radio value={'layui-btn-normal'}>layui-btn-normal</Radio>
                        <Radio value={'layui-btn-warm'}>layui-btn-warm</Radio>
                        <Radio value={'layui-btn-danger'}>layui-btn-danger</Radio>
                        <Radio value={'layui-btn-disabled'}>layui-btn-disabled</Radio>
                    </Radio.Group>
                </Panel>
                <Panel header="尺寸" key="2">
                    <Radio.Group value={size} onChange={(e)=>{changeState(e,'size')}}>
                        <Radio value={'layui-btn-lg'}>layui-btn-lg</Radio>
                        <Radio value={''}>default</Radio>
                        <Radio value={'layui-btn-sm'}>layui-btn-sm</Radio>
                        <Radio value={'layui-btn-xs'}>layui-btn-xs</Radio>
                    </Radio.Group>
                </Panel>
                <Panel header="圆角" key="3">
                    <Checkbox.Group value={radius} onChange={(e)=>{changeState(e,'radius')}}>
                        <Checkbox value="layui-btn-radius">layui-btn-radius</Checkbox>
                    </Checkbox.Group>
                </Panel>
                <Panel header="图标" key="4">
                <p>图标</p>
                </Panel>
                <Panel header="按钮组" key="5">
                    <Checkbox.Group value={[group.toString()]} onChange={(e)=>{changeState(e,'group')}}>
                        <Checkbox value="true">按钮组</Checkbox>
                    </Checkbox.Group>
                </Panel>
                <Panel header="按钮容器" key="6">
                    <Checkbox.Group value={[content.toString()]} onChange={(e)=>{changeState(e,'content')}}>
                        <Checkbox value="true">按钮容器</Checkbox>
                    </Checkbox.Group>
                </Panel>
            </Collapse>
        </div>
    )
}