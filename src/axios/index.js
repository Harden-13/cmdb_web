import JsonP from 'jsonp'
// import { resolve } from 'url';
import axios from 'axios'
import { Modal } from '../../node_modules/antd';


export default class Axios{
    static jsonp(options){
       return  new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
                
            },function(err,response){
                if (response.status == 'success'){
                    resolve(response)
                }else{
                    reject(response.message)
                }
            })
        })
    }
    static ajax(options){
        let loading
        if (options.data && options.data.isShowLoading != false){
            loading=document.getElementById('ajaxLoading')
            loading.style.display ='block'
        }
        // let baseApi = 'https://www.easy-mock.com/mock/5c21ba35bc4bac06b6fda2b3/cmdbapi'
        let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';

        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:(options.data && options.data.params) || ''

            }).then((response)=>{
                if (options.data && options.data.isShowLoading != false){
                    loading=document.getElementById('ajaxLoading')
                    loading.style.display ='none'
                }

                if (response.status==200){
                     let res =  response.data
                     if (res.code==0){
                         resolve(res)
                     }else{
                         Modal.info({
                             title:'提示',
                             contest:res.msg
                         })
                     }
                }else{
                    reject(response.data)
                }
            })
        })
    }
}