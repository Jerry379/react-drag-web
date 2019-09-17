import React from 'react';
import { useDrag } from 'react-dnd'

export default function TextareaEle(){
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
      <label className="layui-form-label">文本域</label>
      <div className="layui-input-block">
        <textarea name="desc" placeholder="请输入内容" className="layui-textarea"></textarea>
      </div>
    </div>
  )
}