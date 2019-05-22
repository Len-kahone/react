import React from 'react'
import ReactDom from 'react-dom'
import Main from '@/components/Main.jsx'
import Counter from "@/components/Counter"


var person={
    name:"kahone",
    age:18
}
ReactDom.render(<div>
   
    <Main {...person}></Main>
    <Counter count={3}></Counter>
    <br></br>
    <Counter count={11} ></Counter>
    
    </div>, document.getElementById('app'))
