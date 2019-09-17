import React from 'react';

export default function PassWordEle(){
  return (
    <div className="layui-form-item dragitem">
      <label className="layui-form-label">密码框</label>
      <div className="layui-input-block">
        <div className="layui-input-inline">
          <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autoComplete="off" className="layui-input"/>
        </div>
        <div className="layui-form-mid layui-word-aux">辅助文字</div>
      </div>
    </div>
  )
}