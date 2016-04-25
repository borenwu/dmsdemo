import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Accounts} from 'meteor/accounts-base'

export default class SignUp extends Component{

    handleCreate(e){
        e.preventDefault();
        console.log('handle create')

        var usernameCreate = ReactDOM.findDOMNode(this.refs.userNameCreate).value.trim();
        var passwordCreate = ReactDOM.findDOMNode(this.refs.passwordCreate).value.trim();
        console.log(usernameCreate)
        console.log(passwordCreate)

        var user = {
            username:usernameCreate,
            password:passwordCreate
        }

        Accounts.createUser(user,function(error){
            if(error){
                console.log(error)
            }
            else{
                Meteor.logout()
                console.log('success')
            }
        })
    }

    handleLogin(e){
        e.preventDefault();
        console.log('login start!')
        var user = ReactDOM.findDOMNode(this.refs.userName).value.trim()
        var pwd = ReactDOM.findDOMNode(this.refs.password).value.trim()
        console.log(user)
        console.log(pwd)

        Meteor.loginWithPassword(user,pwd,function(error){
            if(error){
                console.log(error)
            }
            else{
                console.log(Meteor.user().username)
                FlowRouter.go('/mainpage')
            }
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input ref="userNameCreate" placeholder="user name" type="text"/>
                    <input ref="passwordCreate" placeholder="password" type="password"/>
                    <button type="submit">Create User</button>
                </form>

                <form onSubmit={this.handleLogin.bind(this)}>
                    <input ref="userName" placeholder="user name" type="text"/>
                    <input ref="password" placeholder="password" type="password"/>
                    <button type="submit">Login </button>
                </form>
            </div>
        )
    }
}