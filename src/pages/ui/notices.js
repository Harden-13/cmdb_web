import React from 'react'
import {Card,Button,Spin,Icon,Alert,notification } from 'antd'
import './../../resource/ui.less'

export default class Notice extends React.Component{

    handleOpen =()=>{
        notification.success({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',

          })
    }
    render(){
        return(
            <div>
            <Card title='通知提醒框' className='card-wrap'>
                <Button type='primary' onClick={this.handleOpen}>通知</Button>
            </Card> 

        </div>
        )
    }
}