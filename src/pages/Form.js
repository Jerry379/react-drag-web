import React,{useEffect} from 'react';
import '../../node_modules/layui-src/dist/css/layui.css'

function Form(){
  useEffect(()=>{
    /* global layui */
    layui.config({
      dir: 'http://39.104.117.71:8088/yzdj-admin-web/static/layui/'
    })
    layui.use('form', function(){
      
    });    
  })
  return (
    <form className="layui-form" action="">
      <div className="layui-form-item dragitem">
          <label className="layui-form-label">输入框</label>
          <div className="layui-input-block">
          <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autoComplete="off" className="layui-input"/>
          </div>
      </div>
      <div className="layui-form-item dragitem">
          <label className="layui-form-label">密码框</label>
          <div className="layui-input-block">
            <div className="layui-input-inline">
              <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autoComplete="off" className="layui-input"/>
            </div>
            <div className="layui-form-mid layui-word-aux">辅助文字</div>
          </div>
      </div>
      <div className="layui-form-item dragitem">
          <label className="layui-form-label">选择框</label>
          <div className="layui-input-block">
            <select name="city" lay-verify="required">
                <option value=""></option>
                <option value="0">北京</option>
                <option value="1">上海</option>
                <option value="2">广州</option>
                <option value="3">深圳</option>
                <option value="4">杭州</option>
            </select>
          </div>
      </div>
      <div className="layui-form-item dragitem">
          <label className="layui-form-label">复选框</label>
          <div className="layui-input-block">
          <input type="checkbox" name="like[write]" title="写作"/>
          <input type="checkbox" name="like[read]" title="阅读"/>
          <input type="checkbox" name="like[dai]" title="发呆"/>
          </div>
      </div>
      <div className="layui-form-item dragitem">
          <label className="layui-form-label">开关</label>
          <div className="layui-input-block">
          <input type="checkbox" name="switch" lay-skin="switch"/>
          </div>
      </div>
      <div className="layui-form-item dragitem">
          <label className="layui-form-label">单选框</label>
          <div className="layui-input-block">
          <input type="radio" name="sex" value="男" title="男"/>
          <input type="radio" name="sex" value="女" title="女"/>
          </div>
      </div>
      <div className="layui-form-item dragitem">
          <label className="layui-form-label">多选框</label>
          <div className="layui-input-block">
            <input type="checkbox" name="" title="写作" lay-skin="primary"/>
            <input type="checkbox" name="" title="发呆" lay-skin="primary"/> 
            <input type="checkbox" name="" title="禁用" lay-skin="primary"/> 
          </div>
      </div>
      <div className="layui-form-item layui-form-text dragitem">
          <label className="layui-form-label">文本域</label>
          <div className="layui-input-block">
          <textarea name="desc" placeholder="请输入内容" className="layui-textarea"></textarea>
          </div>
      </div>
      <div className="layui-form-item layui-form-text dragitem">
          <label className="layui-form-label">下拉选择框</label>
          <div className="layui-input-block">
          <select name="city" lay-verify="">
            <option value="">请选择一个城市</option>
            <option value="010">北京</option>
            <option value="021">上海</option>
            <option value="0571">杭州</option>
          </select>
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
          <select name="city" lay-verify="" lay-search={true.toString()}>
            <option value="010">layer</option>
            <option value="021">form</option>
            <option value="0571">layim</option>
          </select>
          </div>
      </div>
      <div className="layui-form-item dragitem">
          <div className="layui-input-block">
          <button className="layui-btn" lay-submit={true.toString()} lay-filter="formDemo">立即提交</button>
          <button type="reset" className="layui-btn layui-btn-primary">重置</button>
          </div>
      </div>
    </form>
  )
}
export default Form;