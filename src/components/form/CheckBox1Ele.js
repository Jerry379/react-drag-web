import React,{useRef} from 'react';
import { useDrag, useDrop } from 'react-dnd'

export default function CheckBox1Ele(){
  const ref = useRef(null)
  const [{ isDragging }, drag] = useDrag({
    item: {
      type:'form',
      name:"CheckBox1Ele"
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const [,drop] = useDrop({
    accept:'form',
    hover(item,monitor){
      if (!ref.current) {
        return
      }
    }
  })
  drag(drop(ref))
  return (
    <div className="layui-form-item dragitem" ref={ref}
    style={{
      opacity: isDragging ? 0.5 : 1,
      border: isDragging?'2px dashed #f00':'none'
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