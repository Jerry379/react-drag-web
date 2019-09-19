import React,{useEffect} from 'react';
import '../../../node_modules/layui-src/dist/css/layui.css'
import { useDrag } from 'react-dnd'

export default function FormEle(props){
  const [{ isDragging }, drag] = useDrag({
    item: {type:'FormEle' },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  useEffect(()=>{
    /* global layui */
    layui.config({
      dir: 'http://39.104.117.71:8088/yzdj-admin-web/static/layui/'
    })
    layui.use('form', function(){
      
    });    
  })
  return (
    <form
      ref={drag}
      className="layui-form"
      action=""
      style={{
        padding:'10px',
        minHeight:'200px',
        boxSizing:'border-box',
        border:isDragging?'2px dashed #f00':'none'
      }}
    >
      {props.children}
    </form>
  )
}