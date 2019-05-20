import React from 'react'
import List from '@/components/List'
import cssobj from '@/css/main.scss'
import bootcss from "bootstrap/dist/css/bootstrap.css"
var personList = [
  { name: '张三', id: 1, age: 18 },
  { name: '李四', id: 2, age: 28 },
  { name: '老夫子', id: 3, age: 88 },
  { name: '周杰伦', id: 4, age: 38 },
  { name: '张三丰', id: 5, age: 188 }
]
console.log(cssobj);
export default class Person extends React.Component {
  constructor() {
    super()
    console.log(this)
    this.state = {}
  }

  render() {
    this.state.personList = [...personList]

    return (
      <div>
        <button className="btn btn-primary">按钮</button>
        <h1 className={cssobj.title+" item"}>人员列表</h1>
        {this.state.personList.map(item => (
          <List key={item.id} {...item} />
        ))}
      </div>
    )
  }
}
