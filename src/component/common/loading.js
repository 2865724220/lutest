import React, { Component } from 'react';
import '../../loading.css';
class Loading extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    componentDidMount() {
        document.title='Crazy Rich Birds'
    }


    render() {
        return (
            <div className="loadWrap" id="loadWrap">
                <div className="loading"></div>
                <span>loading...</span>
            </div>
        );
    }
}
export default Loading;