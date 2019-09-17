import React from 'react';
import { useDrag } from 'react-dnd'

export default function CheckBox1Ele(){
  const [{ isDragging }, drag] = useDrag({
    item: {type:'form' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
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
      <label className="layui-form-label">多选框</label>
      <div className="layui-input-block">
        <input type="checkbox" name="" title="写作" lay-skin="primary"/>
        <input type="checkbox" name="" title="发呆" lay-skin="primary"/> 
        <input type="checkbox" name="" title="禁用" lay-skin="primary"/> 
      </div>
    </div>
  )
}