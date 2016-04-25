import React,{Component} from 'react'
import ReactDOM from 'react-dom'


export default class Sidebar extends Component{

    getLinks(){
        return [
            {_id:1,text:'主页',href:'/mainpage'},
            {_id:2,text:'订单',href:'/order'},
            {_id:3,text:'任务',href:'/task'},
            {_id:4,text:'统计',href:'/stat'},
            {_id:5,text:'财务',href:'/finance'},
        ]
    }


    render(){

        let rows = this.getLinks().map(function(link){
            return(
                <li key={link._id}>
                    <a className="link" href={link.href}>{link.text}</a>
                </li>
            )
        })

        return(
            <div className="primary-sidebar">
                <ul>
                    {rows}
                </ul>
            </div>
        )
    }
}