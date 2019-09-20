import React, { useState} from 'react';
import {useDrop } from 'react-dnd'
import FormEle from '../components/form/FormEle'
import LoadComponents from './LoadComponents'

export default function EditPage(){
    const [componentArr,setComponentArr] = useState([]);
    const [{getItem}, drop] = useDrop({
        accept: 'form',
        drop:(item,monitor)=>{
            LoadComponents[item.name]().then((ele)=>{
                //此处直接写setComponentArr(componentArr.push(ele.default));会报错
                const arr = componentArr;
                arr.push(ele.default);
                setComponentArr(arr);
            });
        },
        collect:(monitor)=>({
            getItemType:monitor.getItemType(),
            getItem:monitor.getItem(),
            getDropResult:monitor.getDropResult(),
            didDrop:monitor.didDrop(),
            getInitialClientOffset:monitor.getInitialClientOffset(),
            getInitialSourceClientOffset:monitor.getInitialSourceClientOffset(),
            getClientOffset:monitor.getClientOffset(),
            getDifferenceFromInitialOffset:monitor.getDifferenceFromInitialOffset(),
            getSourceClientOffset:monitor.getSourceClientOffset()
        })
    })
    return (
        <div style={{width:'100%',height:'100%'}} ref={drop}>
            <FormEle>
                {
                    componentArr.map((item,index)=>{
                        return React.createElement(item,{key:index});
                    })
                }
            </FormEle>
        </div>
    )
}