import React from 'react';
import { useDrag } from 'react-dnd'

export default function PassWordEle(){
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
      <label className="layui-form-label">密码框</label>
      <div className="layui-input-block">
        <div className="layui-input-inline">
          <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autoComplete="off" className="layui-input"/>
        </div>
        <div className="layui-form-mid layui-word-aux">辅助文字</div>
      </div>
    </div>
  )
}