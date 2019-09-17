import React from 'react';
import { useDrag } from 'react-dnd'

export default function SwitchEle(){
  const [{ isDragging }, drag] = useDrag({
    item: {type:'form' },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  return (
    <div className="layui-form-item dragitem" ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1,
    }}
    >
      <label className="layui-form-label">开关</label>
      <div className="layui-input-block">
        <input type="checkbox" name="switch" lay-skin="switch"/>
      </div>
    </div>
  )
}