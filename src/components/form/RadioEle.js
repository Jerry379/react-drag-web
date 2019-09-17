import React from 'react';

export default function RadioEle(){
  return (
    <div className="layui-form-item dragitem">
      <label className="layui-form-label">单选框</label>
      <div className="layui-input-block">
        <input type="radio" name="sex" value="男" title="男"/>
        <input type="radio" name="sex" value="女" title="女"/>
      </div>
    </div>
  )
}