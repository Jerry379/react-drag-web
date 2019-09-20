import React from 'react';
import '../../node_modules/layui-src/dist/css/layui.css'
import CheckBox1Ele from '../components/form/CheckBox1Ele'
import CheckBoxEle from '../components/form/CheckBoxEle'
import FormEle from '../components/form/FormEle'
import InputEle from '../components/form/InputEle'
import PassWordEle from '../components/form/PassWordEle'
import RadioEle from '../components/form/RadioEle'
import SelectEle from '../components/form/SelectEle'
import SelectGroupEle from '../components/form/SelectGroupEle'
import SelectSearchEle from '../components/form/SelectSearchEle'
import SwitchEle from '../components/form/SwitchEle'
import TextareaEle from '../components/form/TextareaEle'
function Form(){
  return (
    <FormEle>
      <CheckBox1Ele/>
      <CheckBoxEle/>
      <InputEle/>
      <PassWordEle/>
      <RadioEle/>
      <SelectEle/>
      <SelectGroupEle/>
      <SelectSearchEle/>
      <SwitchEle/>
      <TextareaEle/>
      <div className="layui-form-item dragitem">
        <div className="layui-input-block">
          <button className="layui-btn" lay-submit={true.toString()} lay-filter="formDemo">立即提交</button>
          <button type="reset" className="layui-btn layui-btn-primary">重置</button>
        </div>
      </div>
    </FormEle>
  )
}
export default Form;