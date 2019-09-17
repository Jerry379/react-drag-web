import React from 'react';
import { useDrag } from 'react-dnd'

export default function SelectSearchEle(){
  const [{ isDragging }, drag] = useDrag({
    item: {type:'form' },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  return (
    <div className="layui-form-item layui-form-text dragitem" ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1,
    }}
    >
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