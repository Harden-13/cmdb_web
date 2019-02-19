import React from 'react'
import {Carousel,Card} from 'antd'
import './../../resource/ui.less'

export default class Carousels extends React.Component{
    render(){
        return(
            <div>
                <Card title='文字轮播' className='card-wrap'>
                <Carousel autoplay >
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                </Card>

                <Card title='图片轮播' className='card-wrap' className='slider-wrap'>
                <Carousel autoplay >
                    <div><img src='/public/carousel-img/carousel-1.jpg' alt='' /></div>
                    <div><img src='/public/carousel-img/carousel-2.jpg' alt='' /></div>
                    <div><img src='/public/carousel-img/carousel-3.jpg' alt='' /></div>
                </Carousel>
                </Card>
            </div>
        )
    }
}