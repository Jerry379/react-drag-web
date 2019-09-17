import React from 'react';

export default function SelectSearchEle(){
  return (
    <div className="layui-form-item layui-form-text dragitem">
      <label className="layui-form-label">下拉选择框</label>
      <div className="layui-input-block">
      <select name="city" lay-verify="" lay-search={true.toString()}>
        <option value="010">layer</option>
        <option value="021">form</option>
        <option value="0571">layim</option>
      </select>
      </div>
    </div>
  )
}