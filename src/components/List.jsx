import React from "react"
import itemCss from "@/css/item.scss"

export default function List(props){
    return (
      <div className={itemCss.item}>
        <span className="name">名字：{props.name}</span>
        <span>年龄：{props.age}</span>
      </div>
    )
}