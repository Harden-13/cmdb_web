import React from 'react'
import {Card,Button,Tabs,message,Icon } from 'antd'
import './../../resource/ui.less'
const TabPane = Tabs.TabPane;

export default class Tab extends React.Component{

    
    newTabIndex = 0;

    componentWillMount(){
        const panes = [
            {
                title:'tab1',
                content: 'Content of Tab Pane 1',
                key: 'tab1'
            },
            {
                title:'tab2',
                content: 'Content of Tab Pane 2',
                key: 'tab2'
            },
            {
                title:'tab3',
                content: 'Content of Tab Pane 3',
                key: 'tab3'
            }
        ]
        this.setState({
             panes   // panes: panes  key = value 可以省略value
        })
    }

    handleCallback = (key)=>{
        message.info('hi 你选择了页签' + key)
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
      }

    add = () => {
        const panes = this.state.panes
        const activeKey = `newTab${this.newTabIndex++}`
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey })
        this.setState({ panes, activeKey })
    }
    
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
            lastIndex = i - 1
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey)
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key
        }
        this.setState({ panes, activeKey })
    }
        

    render(){
        
        return(
            <div>
            <Card title='提示框' className='card-wrap'>
                <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                    <TabPane tab="Tab 1" key="Tab 1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="Tab 2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="Tab 3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </Card> 
            
            <Card title='提示框' className='card-wrap'>
                <Tabs  defaultActiveKey="1" onChange={this.handleCallback} type='editable-card' onEdit={this.onEdit}>
                    {
                        //panel是 panes object
                        this.state.panes.map((panel)=>{return <TabPane tab={panel.title} key={panel.key} closable={panel.closable} /> })
                    }
                </Tabs>
            </Card> 
        </div>
        )
    }
}