(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:"0",name:"aligator",imageSrc:"./img/aligator.jpg",clicked:!1},{id:"1",name:"bear",imageSrc:"./img/bear.jpg",clicked:!1},{id:"2",name:"buffalo",imageSrc:"./img/buffalo.jpg",clicked:!1},{id:"3",name:"bull",imageSrc:"./img/bull.jpg",clicked:!1},{id:"4",name:"cat",imageSrc:"./img/cat.jpg",clicked:!1},{id:"5",name:"cow",imageSrc:"./img/cow.jpg",clicked:!1},{id:"6",name:"deer",imageSrc:"./img/deer.jpg",clicked:!1},{id:"7",name:"elephant",imageSrc:"./img/elephant.jpg",clicked:!1},{id:"8",name:"fawn",imageSrc:"./img/fawn.jpg",clicked:!1},{id:"9",name:"flamingo",imageSrc:"./img/flamingo.jpg",clicked:!1},{id:"10",name:"fox",imageSrc:"./img/fox.jpg",clicked:!1},{id:"11",name:"giraffe",imageSrc:"./img/giraffe.jpg",clicked:!1},{id:"12",name:"horse",imageSrc:"./img/horse.jpg",clicked:!1},{id:"13",name:"lion",imageSrc:"./img/lion.jpg",clicked:!1},{id:"14",name:"lioness",imageSrc:"./img/lioness.jpg",clicked:!1},{id:"15",name:"octopus",imageSrc:"./img/octopus.jpg",clicked:!1},{id:"16",name:"panda",imageSrc:"./img/panda.jpg",clicked:!1},{id:"17",name:"parrot",imageSrc:"./img/parrot.jpg",clicked:!1},{id:"18",name:"penguin",imageSrc:"./img/penguin.jpg",clicked:!1},{id:"19",name:"pig",imageSrc:"./img/pig.jpg",clicked:!1},{id:"20",name:"raccoon",imageSrc:"./img/raccoon.jpg",clicked:!1},{id:"21",name:"sea-lion",imageSrc:"./img/sea-lion.jpg",clicked:!1},{id:"22",name:"sheep",imageSrc:"./img/sheep.jpg",clicked:!1},{id:"23",name:"tiger",imageSrc:"./img/tiger.jpg",clicked:!1},{id:"24",name:"unicorn",imageSrc:"./img/unicorn.jpg",clicked:!1}]},,,,,,,,function(e,a,i){e.exports=i(18)},,,,,,function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){"use strict";i.r(a);var c=i(0),t=i.n(c),n=i(3),r=i.n(n),m=(i(15),i(4)),l=i(5),o=i(7),s=i(6),g=i(8),d=i(1);i(16);var p=function(e){return t.a.createElement("div",{className:"card"},t.a.createElement("div",{className:"img-container"},t.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){e.isClicked(e.clicked,e.id)}})))};i(17);var u=function(e){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"container-fluid"},t.a.createElement("nav",{class:"navbar fixed-top navbar-light bg-light"},t.a.createElement("a",{className:"title",href:"/"},t.a.createElement("i",{className:"fas fa-dice"}),"\xa0 Clicky Game"),t.a.createElement("div",{className:e.class,onAnimationEnd:e.anim},e.text),t.a.createElement("div",null,t.a.createElement("span",null,"Score: ",e.score)," |",t.a.createElement("span",null," Top score: ",e.topScore))),t.a.createElement("div",{className:"bg"},t.a.createElement("h2",null,"Clicky Game!")," Click on an image to earn points, but don't click on any more than once!"),t.a.createElement("div",{className:"wrapper ".concat(e.class)},e.children)),t.a.createElement("div",{className:"footer"},t.a.createElement("a",{href:"https://github.com/ksemal/Clicky-Game"},t.a.createElement("i",{className:"fab fa-github-square"})," KM")))};function k(e){for(var a=e.length-1;a>0;a--){var i=Math.floor(Math.random()*(a+1)),c=[e[i],e[a]];e[a]=c[0],e[i]=c[1]}return e}k(d);var f=function(e){function a(){var e,i;Object(m.a)(this,a);for(var c=arguments.length,t=new Array(c),n=0;n<c;n++)t[n]=arguments[n];return(i=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(t)))).state={images:d,score:0,topScore:0,text:"Click an image to begin!",class:""},i.animEnd=function(){i.setState({class:""})},i.isClicked=function(e,a){e?(i.state.images.map(function(e){return e.clicked=!1}),k(i.state.images),i.setState({images:d,score:0,topScore:i.state.score,text:"You guessed incorrectly!",class:"incorrect"})):(i.state.images.map(function(e){return e.id===a&&(e.clicked=!0),e}),k(i.state.images),i.setState({images:d,score:i.state.score+1,text:"You guessed correctly!",class:"correct"}))},i}return Object(g.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return t.a.createElement(u,{score:this.state.score,topScore:this.state.topScore,text:this.state.text,class:this.state.class,anim:this.animEnd},this.state.images.map(function(a){return t.a.createElement(p,{key:a.id,id:a.id,image:a.imageSrc,name:a.name,clicked:a.clicked,isClicked:e.isClicked})}))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(t.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.ceb0c930.chunk.js.map