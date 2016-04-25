import React from 'react';
import {mount} from 'react-mounter'

import Layout from '../imports/ui/layout/Layout.jsx'
import SignUp from '../imports/ui/signup/Signup.jsx'
import MainPage from '../imports/ui/mainpage/Mainpage.jsx'
import Order from '../imports/ui/order/Order.jsx'
import Task from '../imports/ui/task/Task.jsx'
import Stat from '../imports/ui/stat/Stat.jsx'
import Finance from '../imports/ui/finance/Finance.jsx'
import Sidebar from '../imports/ui/sidebar/Sidebar.jsx'


publicRoutes = FlowRouter.group({
    name: 'publicroute'
});
privateRoutes = FlowRouter.group({
    name: 'privateroute'
});

publicRoutes.route('/', {
    name: 'Home',
    action: function () {
        mount(SignUp)
    }
});
publicRoutes.route('/mainpage', {
    name: 'mainpage',
    action: function () {
        mount(Layout,{
            sidebar:<Sidebar/>,
            content:<MainPage/>
        })
    }
});

publicRoutes.route('/order', {
    name: 'mainpage',
    action: function () {
        mount(Layout,{
            sidebar:<Sidebar/>,
            content:<Order/>
        })
    }
});

publicRoutes.route('/task', {
    name: 'mainpage',
    action: function () {
        mount(Layout,{
            sidebar:<Sidebar/>,
            content:<Task/>
        })
    }
});

publicRoutes.route('/stat', {
    name: 'mainpage',
    action: function () {
        mount(Layout,{
            sidebar:<Sidebar/>,
            content:<Stat/>
        })
    }
});

publicRoutes.route('/finance', {
    name: 'mainpage',
    action: function () {
        mount(Layout,{
            sidebar:<Sidebar/>,
            content:<Finance/>
        })
    }
});


publicRoutes.route('/signout', {
    name: 'Signout',
    action: function () {
        Meteor.logout(function () {
            FlowRouter.go('/');
        })
    }
});