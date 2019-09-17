import React from 'react';
import { useDrag } from 'react-dnd'

export default function CheckBoxEle(){
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
      <label className="layui-form-label">复选框</label>
      <div className="layui-input-block">
        <input type="checkbox" name="like[write]" title="写作"/>
        <input type="checkbox" name="like[read]" title="阅读"/>
        <input type="checkbox" name="like[dai]" title="发呆"/>
      </div>
    </div>
  )
}