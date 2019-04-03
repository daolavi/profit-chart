(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(83),o=a.n(r),c=(a(176),a(12)),s=a(13),l=a(15),h=a(14),u=a(16),v=a(34),m=a.n(v),g=(a(178),a(179),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={hoverLoc:null,activePoint:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getX",value:function(){var e=this.props.data;return{min:e[0].x,max:e[e.length-1].x}}},{key:"getY",value:function(){var e=this.props.data;return{min:e.reduce(function(e,t){return t.y<e?t.y:e},e[0].y),max:e.reduce(function(e,t){return t.y>e?t.y:e},e[0].y)}}},{key:"getSvgX",value:function(e){var t=this.props,a=t.svgWidth,n=t.yLabelSize;return n+e/this.getX().max*(a-n)}},{key:"getSvgY",value:function(e){var t=this.props,a=t.svgHeight,n=t.xLabelSize,i=this.getY();return((a-n)*i.max-(a-n)*e)/(i.max-i.min)}},{key:"makePath",value:function(){var e=this,t=this.props,a=t.data,n=t.color,r="M "+this.getSvgX(a[0].x)+" "+this.getSvgY(a[0].y)+" ";return r+=a.map(function(t,a){return"L "+e.getSvgX(t.x)+" "+e.getSvgY(t.y)+" "}).join(""),i.a.createElement("path",{className:"linechart_path",d:r,style:{stroke:n}})}},{key:"makeArea",value:function(){var e=this,t=this.props.data,a="M "+this.getSvgX(t[0].x)+" "+this.getSvgY(t[0].y)+" ";a+=t.map(function(t,a){return"L "+e.getSvgX(t.x)+" "+e.getSvgY(t.y)+" "}).join("");var n=this.getX(),r=this.getY();return a+="L "+this.getSvgX(n.max)+" "+this.getSvgY(r.min)+" L "+this.getSvgX(n.min)+" "+this.getSvgY(r.min)+" ",i.a.createElement("path",{className:"linechart_area",d:a})}},{key:"makeAxis",value:function(){var e=this.props.yLabelSize,t=this.getX(),a=this.getY();return i.a.createElement("g",{className:"linechart_axis"},i.a.createElement("line",{x1:this.getSvgX(t.min)-e,y1:this.getSvgY(a.min),x2:this.getSvgX(t.max),y2:this.getSvgY(a.min),strokeDasharray:"5"}),i.a.createElement("line",{x1:this.getSvgX(t.min)-e,y1:this.getSvgY(a.max),x2:this.getSvgX(t.max),y2:this.getSvgY(a.max),strokeDasharray:"5"}))}},{key:"makeLabels",value:function(){var e=this.props,t=e.svgHeight,a=e.svgWidth,n=e.xLabelSize,r=e.yLabelSize;return i.a.createElement("g",{className:"linechart_label"},i.a.createElement("text",{transform:"translate(".concat(r/2,", 20)"),textAnchor:"middle"},this.getY().max.toLocaleString("us-EN",{style:"currency",currency:"USD"})),i.a.createElement("text",{transform:"translate(".concat(r/2,", ").concat(t-n-5,")"),textAnchor:"middle"},this.getY().min.toLocaleString("us-EN",{style:"currency",currency:"USD"})),i.a.createElement("text",{transform:"translate(".concat(r,", ").concat(t,")"),textAnchor:"start"},this.props.data[0].d),i.a.createElement("text",{transform:"translate(".concat(a,", ").concat(t,")"),textAnchor:"end"},this.props.data[this.props.data.length-1].d))}},{key:"getCoords",value:function(e){var t=this,a=this.props,n=a.svgWidth,i=a.data,r=a.yLabelSize,o=document.getElementsByClassName("linechart")[0].getBoundingClientRect(),c=(o.width-n)/2,s=e.clientX-o.left-c,l=[];i.map(function(e,a){l.push({svgX:t.getSvgX(e.x),svgY:t.getSvgY(e.y),d:e.d,p:e.p})});for(var h={},u=0,v=500;u<l.length;u++)Math.abs(l[u].svgX-this.state.hoverLoc)<=v&&(v=Math.abs(l[u].svgX-this.state.hoverLoc),h=l[u]);s-r<0?this.stopHover():(this.setState({hoverLoc:s,activePoint:h}),this.props.onChartHover(s,h))}},{key:"stopHover",value:function(){this.setState({hoverLoc:null,activePoint:null}),this.props.onChartHover(null,null)}},{key:"makeActivePoint",value:function(){var e=this.props,t=e.color,a=e.pointRadius;return i.a.createElement("circle",{className:"linechart_point",style:{stroke:t},r:a,cx:this.state.activePoint.svgX,cy:this.state.activePoint.svgY})}},{key:"createLine",value:function(){var e=this.props,t=e.svgHeight,a=e.xLabelSize;return i.a.createElement("line",{className:"hoverLine",x1:this.state.hoverLoc,y1:-8,x2:this.state.hoverLoc,y2:t-a})}},{key:"render",value:function(){var e=this,t=this.props,a=t.svgHeight,n=t.svgWidth;return i.a.createElement("svg",{width:n,height:a,viewBox:"0 0 ".concat(n," ").concat(a),className:"linechart",onMouseLeave:function(){return e.stopHover()},onMouseMove:function(t){return e.getCoords(t)}},i.a.createElement("g",null,this.makeAxis(),this.makePath(),this.makeArea(),this.makeLabels(),this.state.hoverLoc?this.createLine():null,this.state.hoverLoc?this.makeActivePoint():null))}}]),t}(n.Component));g.defaultProps={data:[],color:"#2196F3",pointRadius:5,svgHeight:300,svgWidth:900,xLabelSize:20,yLabelSize:80};var d=g,p=(a(180),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.hoverLoc,a=e.activePoint,n=document.getElementsByClassName("linechart")[0].getBoundingClientRect(),r={};return r.width="100px",r.left=t+n.left-50,i.a.createElement("div",{className:"hover",style:r},i.a.createElement("div",{className:"date"},a.d),i.a.createElement("div",{className:"price"},a.p))}}]),t}(n.Component)),f=(a(181),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={currentPrice:null,monthChangeD:null,monthChangeP:null,updatedAt:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getData=function(){var t=e.props.data;fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(function(e){return e.json()}).then(function(a){var n=a.bpi.USD.rate_float,i=n-t[0].y,r=(n-t[0].y)/t[0].y*100;e.setState({currentPrice:a.bpi.USD.rate_float,monthChangeD:i.toLocaleString("us-EN",{style:"currency",currency:"USD"}),monthChangeP:r.toFixed(2)+"%",updatedAt:a.time.updated})}).catch(function(e){console.log(e)})},this.getData(),this.refresh=setInterval(function(){return e.getData()},9e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refresh)}},{key:"render",value:function(){return i.a.createElement("div",{id:"data-container"},this.state.currentPrice?i.a.createElement("div",{id:"left",className:"box"},i.a.createElement("div",{className:"heading"},this.state.currentPrice.toLocaleString("us-EN",{style:"currency",currency:"USD"})),i.a.createElement("div",{className:"subtext"},"Updated "+m()(this.state.updatedAt).fromNow())):null,this.state.currentPrice?i.a.createElement("div",{id:"middle",className:"box"},i.a.createElement("div",{className:"heading"},this.state.monthChangeD),i.a.createElement("div",{className:"subtext"},"Change Since Last Month (USD)")):null,i.a.createElement("div",{id:"right",className:"box"},i.a.createElement("div",{className:"heading"},this.state.monthChangeP),i.a.createElement("div",{className:"subtext"},"Change Since Last Month (%)")))}}]),t}(n.Component)),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={fetchingData:!0,data:null,hoverLoc:null,activePoint:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChartHover",value:function(e,t){this.setState({hoverLoc:e,activePoint:t})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.coindesk.com/v1/bpi/historical/close.json").then(function(e){return e.json()}).then(function(t){var a=[],n=0;for(var i in t.bpi)a.push({d:m()(i).format("MMM DD"),p:t.bpi[i].toLocaleString("us-EN",{style:"currency",currency:"USD"}),x:n,y:t.bpi[i]}),n++;e.setState({data:a,fetchingData:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("h1",null,"30 Day Bitcoin Price Chart")),i.a.createElement("div",{className:"row"},this.state.fetchingData?null:i.a.createElement(f,{data:this.state.data})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"popup"},this.state.hoverLoc?i.a.createElement(p,{hoverLoc:this.state.hoverLoc,activePoint:this.state.activePoint}):null)),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"chart"},this.state.fetchingData?null:i.a.createElement(d,{data:this.state.data,onChartHover:function(t,a){return e.handleChartHover(t,a)}}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{id:"coindesk"}," Powered by ",i.a.createElement("a",{href:"http://www.coindesk.com/price/"},"CoinDesk"))))}}]),t}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");S?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):x(e)})}}()},84:function(e,t,a){e.exports=a(182)}},[[84,1,2]]]);
//# sourceMappingURL=main.b9be2ff1.chunk.js.map