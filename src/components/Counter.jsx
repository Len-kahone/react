import React from "react"
import ReactTypes from "prop-types"

export default class Conuter extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    static defaultProps={
        count:8
    }
    static propTypes={
        count:ReactTypes.number
    }

    componentWillMount(){
        console.log(document.getElementsByTagName("h1"));
        
    }
    render(){
        return <div>
            当前计数为{this.props.count}
            <h1>hello world</h1>

        </div>
    }
}