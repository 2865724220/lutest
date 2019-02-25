import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, HashRouter, Route } from 'react-router-dom';

import Loadable from 'react-loadable'
import Loading from './component/common/loading'
// import './App.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
// import Main from './component/main/main'
let Main = Loadable({
    loader:()=>import('./component/main/main'),
    loading: Loading
})
let Question = Loadable({
    loader:()=> import('./component/question/question'),
    loading: Loading
})
let Egg = Loadable({
    loader:()=> import('./component/egg/egg'),
    loading: Loading
})
let Result = Loadable({
    loader:()=> import('./component/result/result'),
    loading: Loading
})
let Email = Loadable({
    loader:()=> import('./component/email/email'),
    loading: Loading
})

// import Question from './component/question/question'
// import Egg from './component/egg/egg'
// import Result from './component/result/result'
// import Email from './component/email/email'





// document.onreadystatechange = function listen(){
//     if(document.readyState == 'complete'){
//         ReactDOM.render(
//             <div className="App">
//                 <HashRouter>
//                     <Switch>
//                         <Route exact path="/" component={Main}/>
//                         <Route exact path="/question" component={Question}/>
//                         <Route exact path="/egg/:kyc" component={Egg}/>
//                         <Route exact path="/result" component={Result}/>
//                         <Route exact path="/email" component={Email}/>
//                     </Switch>
//                 </HashRouter>
//             </div>,
//             document.getElementById('root'));
//     }else{
//         ReactDOM.render(
//             <div style={{fontSize:'40px',color:'#000'}}>
//                 loading
//             </div>,
//             document.getElementById('root'));
//     }
// }
// document.onreadystatechange = listen
ReactDOM.render(
    <div className="App">
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/question" component={Question}/>
                <Route exact path="/egg/:kyc" component={Egg}/>
                <Route exact path="/result" component={Result}/>
                <Route exact path="/email" component={Email}/>
            </Switch>
        </HashRouter>
    </div>,
    document.getElementById('root'));

registerServiceWorker();
