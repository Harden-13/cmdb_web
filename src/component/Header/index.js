import React from 'react'
import { Row,Col } from '../../../node_modules/antd';
// import 'antd/dist/antd.css'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
import menuConfig from './../../config/menuConfig'



export default class Header extends React.Component{
    // state = {}

    componentWillMount(){
        const menuTreeNode =  this.renderMenu(menuConfig)
        

        this.setState({
            userName: 'Kobe Bryant',
            menu:menuTreeNode
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData()
    }

    renderMenu =(data)=>{
        return data.map((item)=>{
            console.log(item.title)
            item.title
        })
    }

    //jsonp跨域解决了调用别人api的问题
    getWeatherAPIData(){
        let city = '北京'
        axios.jsonp({ 
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if (res.status=='success'){
                let data = res.results[0].weather_data[0]
                this.setState({ 
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather

                })
            }
        })
    }

    render(){
        const menuType = this.props.menuType
        return (
            <div className='header'>
                <Row className='header-top'>
                {
                    menuType?
                    <Col span={6} className='logo'>
                    <span>CMDB管理系统</span>
                    </Col>:''
                }
                    <Col span={menuType?18:24}>
                        <span>welcome,{this.state.userName}</span>
                        <a href="#">exit</a>
                    </Col>
                </Row>
                {
                    menuType?'':
                    <Row className='breadcrumb'>
                    <Col span={4} className='breadcrumb-title'>
首页                    </Col>
                    <Col span={20} className='weather'>
                        <span className='date'>{this.state.sysTime}</span>
                        <span className='weather-img'>
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                        <span className='weather-detail'>
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
                }

            </div>
        )
    }
}


