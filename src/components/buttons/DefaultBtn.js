import React from 'react';
import { useDrag} from 'react-dnd'

export default function DefaultBtn({theme,size,radius,icon,group,content,text}){
    const [{ isDragging }, drag] = useDrag({
        item: {
            type:'buttons',
            name:"DefaultBtn",
            theme,size,radius,icon,group,content,text
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })
    return (
        <button
            ref={drag}
            type="button"
            style={{
                opacity: isDragging ? 0.5 : 1,
                border: isDragging?'2px dashed #f00':'none'
            }}
            className={`layui-btn ${theme} ${size} ${radius}`}
        >
            {text}
        </button>
    )
}