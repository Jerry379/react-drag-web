import React,{useEffect} from 'react';
import '../../node_modules/layui-src/dist/css/layui.css'

export default function FormEle(){
  useEffect(()=>{
    /* global layui */
    layui.config({
      dir: 'http://39.104.117.71:8088/yzdj-admin-web/static/layui/'
    })
    layui.use('form', function(){
      
    });    
  })
  return (
    <form className="layui-form" action="">

    </form>
  )
}