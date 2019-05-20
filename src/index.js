import React from 'react'
import ReactDom from 'react-dom'
import Main from '@/components/Main.jsx'


var person={
    name:"kahone",
    age:18
}
ReactDom.render(<div>
   
    <Main {...person}></Main>
    
    
    </div>, document.getElementById('app'))
