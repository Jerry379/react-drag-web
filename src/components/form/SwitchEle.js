import React from 'react';

export default function SwitchEle(){
  return (
    <div className="layui-form-item dragitem">
      <label className="layui-form-label">开关</label>
      <div className="layui-input-block">
        <input type="checkbox" name="switch" lay-skin="switch"/>
      </div>
    </div>
  )
}