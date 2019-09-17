import React from 'react';

export default function TextareaEle(){
  return (
    <div className="layui-form-item layui-form-text dragitem">
      <label className="layui-form-label">文本域</label>
      <div className="layui-input-block">
        <textarea name="desc" placeholder="请输入内容" className="layui-textarea"></textarea>
      </div>
    </div>
  )
}