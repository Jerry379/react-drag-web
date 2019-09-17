import React from 'react';

export default function CheckBoxEle(){
  return (
    <div className="layui-form-item dragitem">
      <label className="layui-form-label">复选框</label>
      <div className="layui-input-block">
        <input type="checkbox" name="like[write]" title="写作"/>
        <input type="checkbox" name="like[read]" title="阅读"/>
        <input type="checkbox" name="like[dai]" title="发呆"/>
      </div>
    </div>
  )
}