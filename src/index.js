import React from "react"
import ReactDom from "react-dom"
console.log(333);

var myDiv=React.createElement("div",null,'你好')
ReactDom.render(myDiv,document.getElementById("app"))

