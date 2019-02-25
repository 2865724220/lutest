import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import '../../question.css'

class Question extends Component {

    constructor(props){
        super(props)
        this.state={
            firstLeft:false,
            submitBtn:false,
            option1:'',//问题的答案默认都不选中： option1.,A-1,B-0
            option2:'',//option2.,A-1,B-0
            option3:'',//option3.,A-1,B-0
            option4:'',//option4.,A-1,B-0
            optionSelect:false,
        }
    }

    componentDidMount() {
        // let uid = localStorage.getItem('uid')
        // console.log(uid)
        document.title='Crazy Rich Birds'
    }
    nextBtn(){
        // console.log(this.reactSwipe.getPos())
        this.setState({
            optionSelect:true
        })
    }
    next() {
        // console.log(this.reactSwipe.getPos())
        this.setState({
            firstLeft:true,
            optionSelect:false
        })

        //next()回退再点击，记录用户的答案
       if((this.reactSwipe.getPos()=== 0 && this.state.option2.length>0) || (this.reactSwipe.getPos()=== 1 && this.state.option3.length>0)|| (this.reactSwipe.getPos()=== 2 && this.state.option4.length>0)){
           this.setState({
               optionSelect:true
           })
       }

       if(this.reactSwipe.getPos()===2){
           this.setState({
               submitBtn:true
           })
       }else{
           this.setState({
               submitBtn:false
           })
       }
        this.reactSwipe.next();

    }

    prev() {
        this.setState({
            submitBtn:false,
            optionSelect:true
        })
        //returns current slide index position
        if(this.reactSwipe.getPos()!==1){
            this.setState({
                firstLeft:true
            })
        }else{
            this.setState({
                firstLeft:false
            })
        }
        // console.log(this.reactSwipe.getPos())
        this.reactSwipe.prev();
    }
    quSubmit(){
        console.log(this.state.option1)
        console.log(this.state.option2)
        console.log(this.state.option3)
        console.log(this.state.option4)
        let a = this.state.option1*1
        let b = this.state.option2*1
        let c = this.state.option3*1
        let d = this.state.option4*1
        let kyc = a+b+c+d
        console.log(kyc)
        this.props.history.push(`/egg/${kyc}`)
    }
    option(index,select){
        this.setState({
            optionSelect:false
        })
        this.nextBtn()
        if(index === 1){
            if(select === "A"){
                this.setState({
                    option1:'1'
                })
            }else{
                this.setState({
                    option1:'0'
                })
            }
        }else if(index === 2){
            if(select === "A"){
                this.setState({
                    option2:'1'
                })
            }else{
                this.setState({
                    option2:'0'
                })
            }
        }else if(index === 3){
            if(select === "A"){
                this.setState({
                    option3:'1'
                })
            }else{
                this.setState({
                    option3:'0'
                })
            }
        }else{
            if(select === "A"){
                this.setState({
                    option4:'1'
                })
            }else{
                this.setState({
                    option4:'0'
                })
            }
        }
    }

    render() {
        return (
            <div className="question commonBg">
                <div className="quTop">
                    <span className="topTitle">Dear Mr/Ms Bird Investor</span>
                    <p>Welcome to the Rainforest of Investments!</p>
                </div>
                <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="mySwipe" swipeOptions={{continuous: false,disableScroll:true}}>
                    <div className="slider01">
                        <div className="quTitle">
                            <p className="questionQT">We will review your investment style with 4 simple questions.</p>
                            <div className="big">Q1:</div>
                            <p>Where would you like to build your nest?</p>
                        </div>
                        <div className="optionWrap">
                            <div className={this.state.option1.length>0&&this.state.option1 === '1'?'option optionA optionAOn':'option optionA'}  onClick={()=>this.option(1,"A")}>
                                On Tree Tops – Easy to forage
                            </div>
                            <div className={this.state.option1.length>0&&this.state.option1 === '0'?'option optionB optionBOn':'option optionB'}  onClick={()=>this.option(1,"B")}>
                                In the Trees - Away from predators
                            </div>
                        </div>
                    </div>
                    <div className="slider02">
                        <div className="quTitle">
                            <div className="big">Q2:</div>
                            <p>You gained 10 eggs last year and you are contemplating investing in an Egg Fund. You have 50% chance of gaining 2 eggs or 50% chance of losing 1 egg in a span of one year. Would you invest the 10 eggs in this fund?
                            </p>
                        </div>
                        <div className="optionWrap">
                            <div className={this.state.option2.length>0&&this.state.option2 === '1'?'option optionA optionAOn':'option optionA'}  onClick={()=>this.option(2,"A")}>
                                Yes
                            </div>
                            <div className={this.state.option2.length>0&&this.state.option2 === '0'?'option optionB optionBOn':'option optionB'}  onClick={()=>this.option(2,"B")}>
                                No
                            </div>
                        </div>
                    </div>
                    <div className="slider03">
                        <div className="quTitle">
                            <div className="big">Q3:</div>
                            <p>You bought a tree 5 years ago which is worth 1500 eggs in the current market. You have an option of borrowing 500 eggs to renovate it and sell it at 3000 eggs. However thunderstorm season is coming soon and if the tree is hit by lightning, its value would be considerably decreased. What would you do?</p>
                        </div>
                        <div className="optionWrap">
                            <div className={this.state.option3.length>0&&this.state.option3 === '1'?'option optionA optionAOn':'option optionA'}  onClick={()=>this.option(3,"A")}>
                                I will take a loan and renovate.
                            </div>
                            <div className={this.state.option3.length>0&&this.state.option3 === '0'?'option optionB optionBOn':'option optionB'}  onClick={()=>this.option(3,"B")}>
                                A bird in hand is better than 2 in the bush….Sell immediately
                            </div>
                        </div>
                    </div>
                    <div className="slider04">
                        <div className="quTitle">
                            <div className="big">Q4:</div>
                            <p>A box of eggs was burgled from your neighbour. Would you buy an insurance to protect your 20 eggs at the cost of 1 egg? </p>
                        </div>
                        <div className="optionWrap">
                            <div className={this.state.option4.length>0&&this.state.option4 === '1'?'option optionA optionAOn':'option optionA'}  onClick={()=>this.option(4,"A")}>
                                No
                            </div>
                            <div className={this.state.option4.length>0&&this.state.option4 === '0'?'option optionB optionBOn':'option optionB'}  onClick={()=>this.option(4,"B")}>
                                Yes
                            </div>
                        </div>
                    </div>
                </ReactSwipe>
                <div className="swBtnW clearfix">
                    {
                        this.state.firstLeft&&<div className="swBtn leftA fl"  onClick={()=>this.prev()}></div>
                    }
                    {
                        !this.state.submitBtn&&this.state.optionSelect&&<div className="swBtn rightA fr"  onClick={()=>this.next()}></div>
                    }
                    {
                        !this.state.submitBtn&&!this.state.optionSelect&&<div className="swBtn rightAD fr"></div>
                    }
                    {
                        this.state.submitBtn&&this.state.optionSelect&&<div className="kycSub fr"  onClick={()=>this.quSubmit()}></div>
                    }
                </div>
            </div>

        );
    }
}

export default Question;
