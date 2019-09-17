import React from 'react';

export default function CheckBox1Ele(){
  return (
    <div className="layui-form-item dragitem">
      <label className="layui-form-label">多选框</label>
      <div className="layui-input-block">
        <input type="checkbox" name="" title="写作" lay-skin="primary"/>
        <input type="checkbox" name="" title="发呆" lay-skin="primary"/> 
        <input type="checkbox" name="" title="禁用" lay-skin="primary"/> 
      </div>
    </div>
  )
}