(this["webpackJsonppomodoro-app"]=this["webpackJsonppomodoro-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(2),s=n.n(r),c=(n(12),n(3)),l=n(4),i=n(6),u=n(5),m=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={timer:1500,count:null,textButton:"PLAY",timeEnd:!1},t.playTimer=function(){null==t.state.count?(t.state.count=setInterval((function(){t.state.timer-=1,t.setState(t.state),t.state.timer<0?(clearInterval(t.state.count),t.setState({timer:0,timeEnd:!0,textButton:"PLAY"})):t.setState({timeEnd:!1,textButton:"PAUSE"})}),1e3),t.setState({textButton:"PAUSE"})):(clearInterval(t.state.count),t.state.textButton="PLAY",t.setState({count:null}))},t.stopTimer=function(){null!==t.state.count&&(clearInterval(t.state.count),t.setState({timer:1500,textButton:"PLAY",count:null,timeEnd:!1}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.timer%60,n=parseInt(this.state.timer/60);return o.a.createElement("div",{className:"App"},this.state.timeEnd&&o.a.createElement("p",{className:"time-end"},"ACABOU SEU TEMPO"),o.a.createElement("div",{className:"pomodoro"},o.a.createElement("div",{className:"timer"},o.a.createElement("p",{onChange:function(e){return t.setState({timer:e.target.value})}},n,":",e),o.a.createElement("span",{className:"box-buttons"},o.a.createElement("button",{onClick:this.playTimer,className:"button"},this.state.textButton),o.a.createElement("button",{onClick:this.stopTimer,className:"button"},"STOP")))))}}]),n}(a.Component);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.832e8c69.chunk.js.map