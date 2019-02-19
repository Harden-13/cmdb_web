import React from 'react'
import {Card,Button,Modal } from 'antd'
import './../../resource/ui.less'
export default class Modals extends React.Component{
    state = {
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false

    }

    handleOpen =(type)=>{
        //type加上中括号，type可以当作变量，动态的
        this.setState({
            [type]:true
        })
    }

    handleConfirm =(type)=>{
        // let a = {
        //     confirm:function(){}
        // }
        // a.confirm()
        // a['confirm']
        Modal[type]({
            title:'确认',
            content:'确定了吗',
            onOk(){
                console.log('ok')
            },
            onCancel(){
                console.log('cancle')
            }
        })
    }

    render(){
        return(
            <div>
                <Card title='基础模态框' className='card-wrap'>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal1')}>Open</Button>  
                    {/* 箭头函数点击的时候进行调用 */}
                    <Button type='primary' onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal3')}>顶部20px弹窗</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card> 

                <Card title='信息确认框' className='card-wrap'>
                {/* //this.handleConfirm('') 里面的内容实现的动态的调用不同类型的信息框，在handle函数用[]来接收，省去if判断,在antd上有confirm的函数 */}
                    <Button type='primary' onClick={()=>this.handleConfirm('confirm')}>confirm</Button>  
                    <Button type='primary' onClick={()=>this.handleConfirm('info')}>info</Button>
                    <Button type='primary' onClick={()=>this.handleConfirm('success')}>success</Button>
                    <Button type='primary' onClick={()=>this.handleConfirm('warning')}>warning</Button>
                </Card>

                <Modal title='React1' visible={this.state.showModal1} onCancel={()=>{this.setState({showModal1:false})}}>
                    <p>React1</p>
                </Modal>
                <Modal title='React2' visible={this.state.showModal2} okText='好滴' cancelText='算了' onCancel={()=>{this.setState({showModal2:false})}}>
                    <p>React2</p>
                </Modal>
                <Modal title='React3' visible={this.state.showModal3} style={{top:'20'}} onCancel={()=>{this.setState({showModal3:false})}}>
                    <p>React3</p>
                </Modal>
                <Modal title='React4' visible={this.state.showModal4} wrapClassName='vertical-center-modal'  onCancel={()=>{this.setState({showModal4:false})}}>
                    <p>React4</p>
                </Modal>
            </div>
        )
    }
}