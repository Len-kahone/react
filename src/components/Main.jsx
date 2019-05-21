import React from 'react'
import List from '@/components/List'
import cssobj from '@/css/main.scss'
import bootcss from 'bootstrap/dist/css/bootstrap.css'
var personList = [
  { name: '张三', id: 1, age: 18 },
  { name: '李四', id: 2, age: 28 },
  { name: '老夫子', id: 3, age: 88 },
  { name: '周杰伦', id: 4, age: 38 },
  { name: '张三丰', id: 5, age: 188 }
]

export default class Person extends React.Component {
  constructor() {
    super()

    this.state = {}
      this.state.personList = [...personList]
      this.state.title = '人员列表'
  }
  tips=()=> {
   
    this.setState({title:"超级英雄"},()=>{
      console.log(this.state.title)
    })
     
  }
  //监听输入框变化
  textChange(){
    console.log(this.refs.textRef.value)
    const newTitle = this.refs.textRef.value
    this.setState({
      title:newTitle
    })
  }
  render() {
  

    return (
      <div>
        <button onClick={() => this.tips()} className="btn btn-primary">
          按钮
        </button>
        <br></br>
        <input type="text"  value={this.state.title} ref="textRef" onChange={(e)=>this.textChange()}/> 
        <h1 className={cssobj.title + ' item'}>{this.state.title}</h1>
        {this.state.personList.map(item => (
          <List key={item.id} {...item} />
        ))}
      </div>
    )
  }
}
