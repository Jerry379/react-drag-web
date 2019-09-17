import React from 'react';
import { useDrag } from 'react-dnd'

export default function SelectGroupEle(){
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
          <select name="quiz">
            <option value="">请选择</option>
            <optgroup label="城市记忆">
              <option value="你工作的第一个城市">你工作的第一个城市？</option>
            </optgroup>
            <optgroup label="学生时代">
              <option value="你的工号">你的工号？</option>
              <option value="你最喜欢的老师">你最喜欢的老师？</option>
            </optgroup>
          </select>
          </div>
      </div>
  )
}