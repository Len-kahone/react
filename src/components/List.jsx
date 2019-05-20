import React from "react"

export default function List(props){
    return (
      <div>
        <span className="name">名字：{props.name}</span>
        <span>年龄：{props.age}</span>
      </div>
    )
}