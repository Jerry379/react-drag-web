import React from 'react';
import { useDrag } from 'react-dnd'

export default function InputEle(){
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
      <label className="layui-form-label">输入框</label>
      <div className="layui-input-block">
      <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autoComplete="off" className="layui-input"/>
      </div>
    </div>
  )
}