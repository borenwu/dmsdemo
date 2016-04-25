import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base'

Meteor.startup(() => {
    var users = [
        {username:'tom',password:'123'},
        {username:'jim',password:'456'}
    ]
    //if(Accounts.users.find().count()===0){
    //    users.forEach(function(user){
    //        Accounts.createUser(user)
    //    })
    //}


});
