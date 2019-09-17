import React from 'react';

export default function InputEle(){
  return (
    <div className="layui-form-item dragitem">
      <label className="layui-form-label">输入框</label>
      <div className="layui-input-block">
      <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autoComplete="off" className="layui-input"/>
      </div>
    </div>
  )
}