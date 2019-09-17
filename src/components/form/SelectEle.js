import React from 'react';

export default function SelectEle(){
  return (
    <div className="layui-form-item dragitem">
      <label className="layui-form-label">选择框</label>
      <div className="layui-input-block">
        <select name="city" lay-verify="required">
          <option value=""></option>
          <option value="0">北京</option>
          <option value="1">上海</option>
          <option value="2">广州</option>
          <option value="3">深圳</option>
          <option value="4">杭州</option>
        </select>
      </div>
    </div>
  )
}