var $ = require("jquery");
window.$ = $;

//cnpm install vue
import Vue from "vue";
//var vue = require('vue')

//cnpm install vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//npm install vuex
import Vuex from 'vuex';
Vue.use(Vuex)

//引入mui
require("./mui/css/mui.css")

//组件
var index = require("./components/index.vue")
import topics from "./components/index/topics.vue"
import collect from "./components/index/collect.vue"
var detail = require("./components/detail.vue")
var home = require("./components/home.vue")
var weui = require("./components/weui.vue")
var muiCp = require("./components/mui/mui.vue")
var muiCp2 = require("./components/mui/mui2.vue")

var router = new VueRouter({
	routes: [{
		path: "/index",
		component: index,
		children:[{
			path:"collect",
			component:collect
		},{
			path:"topics",
			component:topics
		}]
	}, {
		path: "/home",
		component: home
	},{
		path:"/weui",
		component: weui
	},{
		path:"/mui",
		component: muiCp
	},{
		path:"/mui2",
		component: muiCp2
	},{
		path:"/detail",
		component: detail
	}]
})

//状态管理
var store = new Vuex.Store({
	state:{
		exchange:"测试"
	},
	mutations:{
		setExchange(state,data){
			state.exchange = data
		}
	},
	getters:{
		getExchange(state){
			return state.exchange
		}
	}
})

new Vue({
	el: "#demo",
	template: `
         <router-view></router-view>
	`,
	router,
	store,
	data: {
		name: "chimin"
	},
})