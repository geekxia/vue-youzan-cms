(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230e44"],{ede4:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("h3",[e._v("登录页")]),r("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)},o=[],c=(r("3546"),r("0e8d"),r("fdc1"),r("a94a"),r("639b"),r("4f5b"),r("104d"),r("9c58"),r("b287"),r("9d37")),s=r("08c1");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(c["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={data:function(){return{username:"1917",password:""}},methods:i({},Object(s["b"])("user",["userLogin"]),{},Object(s["c"])("user",["updateUserinfo"]),{login:function(){var e=this,t={username:this.username,password:this.password};this.$http.fetchLogin(t).then((function(t){e.updateUserinfo(t),localStorage.setItem("token",t.token),localStorage.setItem("isLogin",1),e.$router.replace("/")}))}})},p=u,b=r("5511"),l=Object(b["a"])(p,n,o,!1,null,"46b649ae",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d230e44.46bec598.js.map