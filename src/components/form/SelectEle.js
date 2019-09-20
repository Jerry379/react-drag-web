import React from 'react';
import { useDrag } from 'react-dnd'

export default function SelectEle(){
  const [{ isDragging }, drag] = useDrag({
    item: {
      type:'form',
      name:'SelectEle'
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  return (
    <div className="layui-form-item dragitem" ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1,
      border: isDragging?'2px dashed #f00':'none'
    }}
    >
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