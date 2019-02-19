import React from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notices'
import Message from './pages/ui/messages';
import Tab from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
import FormLogin from './pages/form/login';
import BasicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable';
import Home from './pages/home';
import City from './pages/city';
import Order from './pages/order';
import Commoon from './common'
import OrderDetial from './pages/order/detail'
import Bar from './pages/echarts/bar';
import Pie from './pages/echarts/pie';
import Line from './pages/echarts/line';
import Permission from './pages/permission';

export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>

                <App>
                    <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/common' extract render={()=>{
                        return <Commoon>
                            <Route path="/common/order/detail/:orderId"  component={OrderDetial}/>
                        </Commoon>
                    }} />

                    <Route path='/'   render={()=>
                        <Admin> 
                            <Switch>
                            <Route path='/home' component={Home} />

                            <Route path='/ui/buttons' component={Buttons} />
                            <Route path='/ui/modals' component={Modals} />
                            <Route path='/ui/loadings' component={Loadings} />
                            <Route path='/ui/notification' component={Notice} />
                            <Route path='/ui/messages' component={Message} />
                            <Route path='/ui/tabs' component={Tab} />
                            <Route path='/ui/gallery' component={Gallery} />
                            <Route path='/ui/carousel' component={Carousels} />
                            <Route path='/form/login' component={FormLogin} />
                            <Route path='/table/basic' component={BasicTable} />
                            <Route path='/table/high' component={HighTable} />
                            <Route path="/city" component={City} />
                            <Route path="/order" component={Order} />
                            <Route path="/charts/bar" component={Bar} />
                            <Route path="/charts/pie" component={Pie} />
                            <Route path="/charts/line" component={Line} />
                            <Route path="/permission" component={Permission} />
                            <Redirect to='/home' />
                            <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                     } />
                     </Switch>
                </App>
            </HashRouter> 
        )
    }
}