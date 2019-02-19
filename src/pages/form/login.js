import React from 'react'
import {Card,Form, Input, Button } from 'antd'

const FormItem = Form.Item

export default class FormLogin extends React.Component{
    render(){
        return(
            <div>
                <Card title='登录行内表单' className='card-wrap'>
                    <Form layout='inline'>
                        <FormItem>
                            <Input placeholder='please input your username' />
                        </FormItem>
                        <FormItem>
                            <Input placeholder='please input your password' />
                        </FormItem>
                        <FormItem>
                            <Button type='primary'>login</Button>
                        </FormItem>
                    </Form>
                </Card>

                 <Card title='登录水平表单' style={{marginTop:10}}>
                    <Form style={{width:300}}>
                        <FormItem>
                            <Input placeholder='please input your username' />
                        </FormItem>
                        <FormItem>
                            <Input placeholder='please input your password' />
                        </FormItem>
                        <FormItem>
                            <Button type='primary'>login</Button>
                        </FormItem>
                    </Form>
                </Card>

            </div>
        )
    }
}