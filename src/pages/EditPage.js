import React from 'react';
import {useDrop } from 'react-dnd'

export default function EditPage(){
    const [collectedProps, drop] = useDrop({
        accept: 'form'
    })
    return (
        <div style={{width:'100%',height:'100%'}} ref={drop}></div>
    )
}