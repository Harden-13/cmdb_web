import React from 'react'
import {Card,Button,Radio } from 'antd'
import './ui.less'

export default class Buttons extends React.Component{

    state = {
        loading:true,
        size:'default'
    }
    handleChange = (e) =>{
        this.setState({
            size:e.target.value
        })
    }

    handleCloseLoading =()=>{
        this.setState(
            {
                loading:false
            }
        )
    }

    render(){
        return(
        <div>
            <Card title='基础按钮'>
                <Button type='primary'>cmdb</Button>
                <Button>cmdb</Button>
                <Button type='dashed'>cmdb</Button>
                <Button type='danger'>cmdb</Button >
                <Button disabled>cmdb</Button>
            </Card>

            <Card title='图形按钮'>
                <Button icon='plus'>create</Button>
                <Button icon='edit'>edit</Button>
                <Button icon='delete'>delete</Button>
                <Button shape='circle' icon='search'></Button>
                <Button type='primary' icon='search'>search</Button>
                <Button type='primary' icon='download' >download</Button>
            </Card>

            <Card title='Loading按钮'>
                <Button type='primary' loading={this.state.loading}>确定</Button>
                <Button shape='circle' type='primary' loading={this.state.loading}></Button>
                <Button loading={this.state.loading}>点击加载</Button>
                <Button type='primary' onClick={this.handleCloseLoading}>关闭</Button>
            </Card>
            {/* this.handleCloseLoading.bind(this)  define -> handleCloseLoading(){} */}

            <Card title='按钮组'>
                <Button.Group>
                    <Button icon='left' type='primary' style={{marginRight:0}}>返回</Button>
                    <Button icon='right' type='primary'>前进</Button>
                </Button.Group>
            </Card>

            <Card title='按钮尺寸'>
                <Radio.Group value={this.state.size} onChange={this.handleChange}>
                    <Radio value='small'>small</Radio>
                    <Radio value='default'>middle</Radio>
                    <Radio value='large' >large</Radio>

                </Radio.Group>
                <Button type='dashed' size={this.state.size}>cmdb</Button>
                <Button type='primary' size={this.state.size}>cmdb</Button>
                <Button type='danger' size={this.state.size}>cmdb</Button>
            </Card>

        </div>
        )
    }
}