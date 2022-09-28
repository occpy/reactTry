import React from "react";
import {Outlet} from "react-router-dom";
import {AppOutline, MessageOutline, UnorderedListOutline, UserOutline} from "antd-mobile-icons";
import {TabBar} from "antd-mobile";


class withHome extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.props = props
    }

    render() {
        return (
            <>
                <Home props={this.props}/>
            </>
        );
    }
}

const Home = (props) => {

    const state = {
        tabs: [
            {
                key: '/new',
                title: '首页',
                icon: <AppOutline/>,
            },
            {
                key: '/todo',
                title: '待办',
                icon: <UnorderedListOutline/>,
            },
            {
                key: '/message',
                title: '消息',
                icon: <MessageOutline/>,
            },
            {
                key: '/me',
                title: '我的',
                icon: <UserOutline/>,
            },]
    }

    const setRouteActive = (value) => {
        console.log(props.props)
        props.props.history.push(value)
    }

    return (
        <div>
            <Outlet/>
            <TabBar activeKey={props.location} onChange={value => setRouteActive(value)}>
                {state.tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
                ))}
            </TabBar>
        </div>
    );
}

export default withHome;