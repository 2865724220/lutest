import React, { Component } from 'react';
import { host, headers } from '../common/common'
import '../../main.css'
class Main extends Component {

    constructor(props){
        super(props)
        this.state={
            playEmail:'',
            loading:false,
            st:document.readyState
        }
    }
    componentWillMount(){
        document.title='Crazy Rich Birds'
        console.log('main8989'+document.readyState)
    }
    componentDidMount() {
        document.title='Crazy Rich Birds'
        // setTimeout(()=>{
        //     this.setState({
        //         loading:false
        //     })
        // },10000)
        console.log('didMian'+document.readyState)
    }
    email(e){

       let email = e.target.value
       this.setState({
           playEmail:email
       })
    }
    play(){
        //匹配空格
        // let regB = /\s+/g
        // let email = this.state.playEmail.replace(regB,'')//去除空格
        // //校验邮箱
        // let emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        //
        // if(emailReg.test(email)){
        //     this.register(email)
        // }else{
        //     alert('请输入正确的邮箱！')
        // }
        this.register()
    }
    register(email){

        let data = {
            "email":'',
            "lang":null,
            "orgId":"310003",
            "reqChl":"03",
            "reqTime":"20180524150130123",
            "serNum":"1234567890",
            "sign":"SHA256withRSA2048",
            "tranCode":"LU001",
            "version":"100"
        }
        // fetch('/app/LU001',{
        fetch(host+'LU001',{
            method:'POST',
            headers:headers,
            body:JSON.stringify(data),
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            // console.log(res)
            if(res.respCode === '00'){
                let uid = res.uid
                localStorage.setItem('uid',uid)
                this.props.history.push({pathname: "/question", state: {}})
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className="main">
                {
                    !this.state.loading && <div>
                        <i className="leaf1"></i>
                        <img className="logo" src={require("../../img/logo.png")} alt=""/>
                        <i className="leaf2"></i>
                        <i className="cage"></i>
                        <div className="playInputW clearfix" onClick={()=>this.play()}>
                            <i className="birdMain"></i>
                            {/*<input className="playInput" type="text" value={this.state.playEmail} onChange={(event)=>this.email(event)} placeholder="Example: crazy.rich@bird.com"/>*/}
                            <i className="playImg"></i>
                        </div>
                    </div>
                }
                {/*{*/}
                    {/*this.state.loading && <div className="loadWrap" id="loadWrap">*/}
                        {/*<div className="loading"></div>*/}
                        {/*<span>loading...</span>*/}
                    {/*</div>*/}
                {/*}*/}
            </div>

        );
    }
}

export default Main;
