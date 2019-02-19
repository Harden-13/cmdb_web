import React from 'react'
import { Row,Col } from 'antd'
import Header from './component/Header'
import Footer from './component/Footer'
import NavLeft from './component/NavLeft'
// import 'antd/lib/row/style'
// import 'antd/lib/col/style'
import 'antd/dist/antd.css'
import './style/common.less'

export default class Admin extends React.Component{

    render(){
        return (
            <Row className='container'>
                <Col span={4} className='nav-left'>
                    <NavLeft />
                </Col>
                <Col span={20} className='main'>
                    <Header />
                    <Row className='content'>
                    {this.props.children}
                    </Row> 
                    <Footer />
                </Col>
            </Row>

        );
    }
}