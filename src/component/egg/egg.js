import React, { Component } from 'react';

// import basket01 from '../../img/egg/egg1_00.png'

class Egg extends Component {

    constructor(props){
        super(props)
        this.state={
            eggSum:10,
            basket01:0+require("../../img/egg/egg1_00.png"),
            basket02:0+require('../../img/egg/egg2_00.png'),
            basket03:0+require('../../img/egg/egg3_00.png'),
            basket04:0+require('../../img/egg/egg4_00.png'),
            basket01M:false,
            basket01A:true,
            basket02M:false,
            basket02A:true,
            basket03M:false,
            basket03A:true,
            basket04M:false,
            basket04A:true,
            riskLevel:'',
            maxNum01:0,
            maxNum02:0,
            maxNum03:0,
            maxNum04:0,
            riskScore:this.props.match.params.kyc*1,
            gameTips:false,
            eggAdd01:false,
            eggAdd02:false,
            eggAdd03:false,
            eggAdd04:false,
            eggMinus01:false,
            eggMinus02:false,
            eggMinus03:false,
            eggMinus04:false,
        }
    }

    componentDidMount() {
        document.title='Crazy Rich Birds'
        if(this.state.riskScore < 2){
            this.setState({
                riskLevel:'Low',
                maxNum01:3,
                maxNum02:3,
                maxNum03:8,
                maxNum04:2,
            })
        }else if(this.state.riskScore === 2){
            this.setState({
                riskLevel:'Medium',
                maxNum01:6,
                maxNum02:6,
                maxNum03:6,
                maxNum04:3,
            })
        }else if(this.state.riskScore > 2){
            this.setState({
                riskLevel:'High',
                maxNum01:9,
                maxNum02:9,
                maxNum03:2,
                maxNum04:4,
            })
        }
    }
    next(){
        console.log(this.state.basket01.substring(0,1))
        console.log(this.state.basket02.substring(0,1))
        console.log(this.state.basket03.substring(0,1))
        console.log(this.state.basket04.substring(0,1))
        localStorage.setItem('riskScore',this.state.riskScore)
        localStorage.setItem('stock1',this.state.basket01.substring(0,1))
        localStorage.setItem('stock2',this.state.basket02.substring(0,1))
        localStorage.setItem('bond',this.state.basket03.substring(0,1))
        localStorage.setItem('gold',this.state.basket04.substring(0,1))
        this.props.history.push(`/result`)
    }
    basketOperate(basketNum,index,operate){
        if(operate === 'add'){
            if(index === 1){
                this.setState({
                    basket01M:true
                })
                if(basketNum === this.state.maxNum01 ||this.state.eggSum === 0){
                    this.setState({
                        basket01A:false,
                    })
                }
            }else if(index === 2){
                this.setState({
                    basket02M:true
                })
                if(basketNum === this.state.maxNum02 ||this.state.eggSum === 0){
                    this.setState({
                        basket02A:false,
                    })
                }
            }else if(index === 3){
                this.setState({
                    basket03M:true
                })
                if(basketNum === this.state.maxNum03 ||this.state.eggSum === 0){
                    this.setState({
                        basket03A:false,
                    })
                }
            }else if(index === 4){
                this.setState({
                    basket04M:true
                })
                if(basketNum === this.state.maxNum04 ||this.state.eggSum === 0){
                    this.setState({
                        basket04A:false,
                    })
                }
            }
        }else{

        }

    }
    minus(index){
        let basket01Num = this.state.basket01.substring(0,1)
        let basket02Num = this.state.basket02.substring(0,1)
        let basket03Num = this.state.basket03.substring(0,1)
        let basket04Num = this.state.basket04.substring(0,1)
        let eggSum = this.state.eggSum
        eggSum = ++ eggSum
        this.setState({
            eggSum:eggSum
        })
        if(index === 1){
            --basket01Num
            this.setState({
                basket01:basket01Num+require(`../../img/egg/egg1_0${basket01Num}.png`),
                eggMinus01:true
            })
            if(basket01Num === 0){
                this.setState({
                    basket01M:false,
                    basket01A:true,
                })
            }
        }else if(index === 2){
            --basket02Num
            this.setState({
                basket02:basket02Num+require(`../../img/egg/egg2_0${basket02Num}.png`),
                eggMinus02:true
            })
            if(basket02Num === 0){
                this.setState({
                    basket02M:false,
                    basket02A:true,
                })
            }
        }else if(index === 3){
            --basket03Num
            this.setState({
                basket03:basket03Num+require(`../../img/egg/egg3_0${basket03Num}.png`),
                eggMinus03:true
            })
            if(basket03Num === 0){
                this.setState({
                    basket03M:false,
                    basket03A:true,
                })
            }

        }else if(index === 4){
            --basket04Num
            this.setState({
                basket04:basket04Num+require(`../../img/egg/egg4_0${basket04Num}.png`),
                eggMinus04:true
            })
            if(basket04Num === 0){
                this.setState({
                    basket04M:false,
                    basket04A:true,
                })
            }
        }
        //总鸡蛋数大于0且每个篮子里面的鸡蛋没到上限
        if(eggSum>0 && basket01Num<this.state.maxNum01){
            this.setState({
                basket01A:true
            })
        }
        if(eggSum>0 && basket02Num<this.state.maxNum02){
            this.setState({
                basket02A:true
            })
        }
        if(eggSum>0 && basket03Num<this.state.maxNum03){
            this.setState({
                basket03A:true
            })
        }
        if(eggSum>0 && basket04Num<this.state.maxNum04){
            this.setState({
                basket04A:true
            })
        }
        setTimeout(()=>{
            this.setState({
                eggMinus01:false,
                eggMinus02:false,
                eggMinus03:false,
                eggMinus04:false,
            })
        },500)
    }
    add (index){
        let basket01Num = this.state.basket01.substring(0,1)
        let basket02Num = this.state.basket02.substring(0,1)
        let basket03Num = this.state.basket03.substring(0,1)
        let basket04Num = this.state.basket04.substring(0,1)
        let eggSum = this.state.eggSum
        eggSum = -- eggSum
        this.setState({
            eggSum:eggSum,
        })

        if(index === 1){
            ++basket01Num
            this.basketOperate(basket01Num,1,'add')
            this.setState({
                basket01:basket01Num+require(`../../img/egg/egg1_0${basket01Num}.png`),
                eggAdd01:true
            })
        }else if(index === 2){
            ++basket02Num
            this.basketOperate(basket02Num,2,'add')
            this.setState({
                basket02:basket02Num+require(`../../img/egg/egg2_0${basket02Num}.png`),
                eggAdd02:true
            })
        }else if(index === 3){
            ++basket03Num
            this.basketOperate(basket03Num,3,'add')
            this.setState({
                basket03:basket03Num+require(`../../img/egg/egg3_0${basket03Num}.png`),
                eggAdd03:true
            })
        }else{
            ++basket04Num
            this.basketOperate(basket04Num,4,'add')
            this.setState({
                basket04:basket04Num+require(`../../img/egg/egg4_0${basket04Num}.png`),
                eggAdd04:true
            })

        }
        //总鸡蛋数为0，锁定所有篮子的+
        if(eggSum === 0){
            this.setState({
                basket01A:false,
                basket02A:false,
                basket03A:false,
                basket04A:false,
            })
        }
        setTimeout(()=>{
            this.setState({
                eggAdd01:false,
                eggAdd02:false,
                eggAdd03:false,
                eggAdd04:false,
            })
        },500)
    }
    gameModal(){
        let gameTips = this.state.gameTips
        this.setState({
            gameTips:!gameTips
        })
    }

    render() {
        return (
            <div className="egg commonBg">
                <div className="quTop">
                    <span className="topTitle">Dear Mr/Ms Bird Investor</span>
                    <p>Your risk appetite is <em>{this.state.riskLevel}！</em></p>
                </div>
                <div className="eggText">
                    <span>
                        You have received a chance to allocate 10 golden eggs into our baskets of assets.
                    </span>
                    <span>Please allocate them wisely.</span>
                    <span>Remember! Do not put all the eggs in one basket!</span>
                    {/*<span>Congratulations!</span>*/}
                    {/*<span>You've got an investment voucher worth 10 eggs!</span>*/}
                    {/*<span>Please allocate!</span>*/}
                    {/*<span>Remember,don't put all og your eggs in one basket!</span>*/}
                </div>
                <div className="eggCW">
                    <div className="eggTW clearfix">
                        <div className="eggC eggC01 fl">
                            <img className="egg-pen" src={this.state.basket01.substring(1,this.state.basket01.length)} alt=""/>
                            <div className="aPW clearfix">
                                <span className="maxNum">Max {this.state.maxNum01}</span>
                                {this.state.basket01M&&<img className="egg-btn egg-btn01 fl" src={require("../../img/egg/egg_btn1.png")} onClick={()=>this.minus(1)} alt=""/>}
                                {!this.state.basket01M&&<img className="egg-btn egg-btn01 fl" src={require("../../img/egg/egg_btn1-d.png")}  alt=""/>}
                                <span className="aPWT lineH1">Emerging Market Stock</span>
                                {this.state.basket01A&&<img className="egg-btn egg-btn02 fr" src={require("../../img/egg/egg_btn2.png")} onClick={()=>this.add(1)} alt=""/>}
                                {!this.state.basket01A&&<img className="egg-btn egg-btn02 fr" src={require("../../img/egg/egg_btn2-d.png")}  alt=""/>}
                                {
                                    this.state.eggAdd01 && <img className="eggAdd" src={require("../../img/egg/egg.png")} alt=""/>
                                }
                                {
                                    this.state.eggMinus01 && <img className="eggMinus" src={require("../../img/egg/egg.png")} alt=""/>
                                }
                            </div>
                        </div>
                        <div className="eggC eggC02 fr">
                            <img className="egg-pen" src={this.state.basket02.substring(1,this.state.basket02.length)} alt=""/>
                            <div className="aPW">
                                <span className="maxNum">Max {this.state.maxNum02}</span>
                                {this.state.basket02M&&<img className="egg-btn egg-btn01 fl" src={require("../../img/egg/egg_btn1.png")} onClick={()=>this.minus(2)} alt=""/>}
                                {!this.state.basket02M&&<img className="egg-btn egg-btn01 fl" src={require("../../img/egg/egg_btn1-d.png")}  alt=""/>}
                                <span className="aPWT">US Stock</span>
                                {this.state.basket02A&&<img className="egg-btn egg-btn02 fr" src={require("../../img/egg/egg_btn2.png")} onClick={()=>this.add(2)} alt=""/>}
                                {!this.state.basket02A&&<img className="egg-btn egg-btn02 fr" src={require("../../img/egg/egg_btn2-d.png")}  alt=""/>}
                                {
                                    this.state.eggAdd02 && <img className="eggAdd" src={require("../../img/egg/egg.png")} alt=""/>
                                }
                                {
                                    this.state.eggMinus02 && <img className="eggMinus" src={require("../../img/egg/egg.png")} alt=""/>
                                }
                            </div>
                        </div>
                        <div className="eggC eggC03 fl">
                            <img className="egg-pen" src={this.state.basket03.substring(1,this.state.basket03.length)} alt=""/>
                            <div className="aPW">
                                <span className="maxNum">Max {this.state.maxNum03}</span>
                                {this.state.basket03M&&<img className="egg-btn egg-btn01 fl" src={require("../../img/egg/egg_btn1.png")} onClick={()=>this.minus(3)} alt=""/>}
                                {!this.state.basket03M&&<img className="egg-btn egg-btn01 fl" src={require("../../img/egg/egg_btn1-d.png")}  alt=""/>}
                                <span className="aPWT">US Bond</span>
                                {this.state.basket03A&&<img className="egg-btn egg-btn02 fr" src={require("../../img/egg/egg_btn2.png")} onClick={()=>this.add(3)} alt=""/>}
                                {!this.state.basket03A&&<img className="egg-btn egg-btn02 fr" src={require("../../img/egg/egg_btn2-d.png")}  alt=""/>}
                                {
                                    this.state.eggAdd03 && <img className="eggAdd" src={require("../../img/egg/egg.png")} alt=""/>
                                }
                                {
                                    this.state.eggMinus03 && <img className="eggMinus" src={require("../../img/egg/egg.png")} alt=""/>
                                }
                            </div>
                        </div>
                        <div className="eggC eggC04 fr">
                            <img className="egg-pen" src={this.state.basket04.substring(1,this.state.basket04.length)} alt=""/>
                            <div className="aPW">
                                <span className="maxNum">Max {this.state.maxNum04}</span>
                                {this.state.basket04M&&<img className="egg-btn egg-btn01 fl" src={require("../../img/egg/egg_btn1.png")} onClick={()=>this.minus(4)} alt=""/>}
                                {!this.state.basket04M&&<img className="egg-btn egg-btn01 fl" src={require("../../img/egg/egg_btn1-d.png")}  alt=""/>}
                                <span className="aPWT">Gold</span>
                                {this.state.basket04A&&<img className="egg-btn egg-btn02 fr" src={require("../../img/egg/egg_btn2.png")} onClick={()=>this.add(4)} alt=""/>}
                                {!this.state.basket04A&&<img className="egg-btn egg-btn02 fr" src={require("../../img/egg/egg_btn2-d.png")}  alt=""/>}
                                {
                                    this.state.eggAdd04 && <img className="eggAdd" src={require("../../img/egg/egg.png")} alt=""/>
                                }
                                {
                                    this.state.eggMinus04 && <img className="eggMinus" src={require("../../img/egg/egg.png")} alt=""/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="eggT">
                        <img src={require("../../img/egg/egg01.png")} alt=""/>
                        <span>×<em>{this.state.eggSum}</em></span>
                    </div>
                    <div className="gameTips" onClick={()=>this.gameModal()}>
                        <img src={require("../../img/egg/egg_tips.png")} alt=""/>
                        <span>Game tips</span>
                    </div>
                </div>
                {this.state.eggSum === 0&&<div className="eggSubW" onClick={()=>this.next()}>
                    <div className="eggSub"></div>
                </div>}
                {this.state.eggSum !== 0&&<div className="eggSubW">
                    <div className="eggSub01"></div>
                </div>}
                {
                    this.state.gameTips&&<div className="gameModal">
                        <div className="gameMC">
                            <div className="gameMT">Basket Detail</div>
                            <div className="gameMP">
                                <em>Emerging Market Stock </em>
                                <span>iShares MSCI Emerging Markets ETF</span>
                            </div>
                            <div className="gameMP">
                                <em>
                                    US Stock
                                </em>
                                <span>iShares Russell 3000 ETF</span>
                            </div>
                            <div className="gameMP">
                                <em>US Bond</em>
                                <span>iShares Core U.S. Aggregate Bond ETF</span>
                            </div>
                            <div className="gameMP">
                                <em>Gold</em>
                                <span>iShares Gold Trust</span>
                            </div>
                            <img className="gameMCI" src={require("../../img/egg/egg-t-r.png")} alt=""/>
                            <img className="gameMBtn" onClick={()=>this.gameModal()} src={require("../../img/egg/close.png")} alt=""/>
                        </div>
                        {/*<div className="gameMBtn" onClick={()=>this.gameModal()}>*/}
                        {/*</div>*/}
                    </div>
                }
            </div>

        );
    }
}

export default Egg;
