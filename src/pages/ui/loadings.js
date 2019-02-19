import React from 'react'
import {Card,Button,Spin,Icon,Alert } from 'antd'
import './../../resource/ui.less'

export default class Loadings extends React.Component{

    render(){
        const icon = <Icon type='loading' style={{fontSize:20}} />

        return(

            <div>
                <Card title='spin用法' className='card-wrap'>
                    <Spin />
                    <Spin indicator={icon} style={{marginLeft:10}} />
                </Card> 

                <Card title='内容遮罩' className='card-wrap'>
                    <Spin>
                    <Alert message='React' description='welcome to react' type='warning' />
                    </Spin>
                </Card> 
            </div>
        )
    }
}