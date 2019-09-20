import React from 'react';
import { useDrag } from 'react-dnd'

export default function RadioEle(){
  const [{ isDragging }, drag] = useDrag({
    item: {
      type:'form',
      name:'RadioEle'
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
      <label className="layui-form-label">单选框</label>
      <div className="layui-input-block">
        <input type="radio" name="sex" value="男" title="男"/>
        <input type="radio" name="sex" value="女" title="女"/>
      </div>
    </div>
  )
}