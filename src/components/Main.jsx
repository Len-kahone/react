import React from "react"
import List from "@/components/List"

var personList=[

    {name:"张三",id:1,age:18},
    {name:"李四",id:2,age:28},
    {name:"老夫子",id:3,age:88},
    {name:"周杰伦",id:4,age:38},
    {name:"张三丰",id:5,age:188},
]
export default class Person extends React.Component {
    constructor(){
        super()
        console.log(this);
        this.state={}
        
    }

    render() {
     

        this.state.personList = [...personList]
            
          
        
        console.log(this.state);
        return <div>
           <h1>人员列表</h1>
            {this.state.personList.map(item=><List key={item.id} {...item}></List>)}
        
           
        </div>
    }
}