import React from 'react'
import {Card,Button,message } from 'antd'
import './../../resource/ui.less'

export default class Message extends React.Component{

    handleMessage =()=>{
        message.success('this is a normal message')
    }

    render(){
        return(
            <div>
            <Card title='全局提示框' className='card-wrap'>
                <Button type='primary' onClick={this.handleMessage}>success</Button>
                {/* //如果想传参 就用箭头函数 onClick={()=>{}} */}
                <Button type='primary'>error</Button>

            </Card> 

        </div>
        )
    }
}