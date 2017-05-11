<template>
	<!--下拉刷新容器-->
	<div id="refreshContainer" class="mui-content mui-scroll-wrapper" style="height: 100%;top:244px">
		<div class="mui-scroll">
			<ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media" v-for="topic in topics">
					<router-link :to="{ path: '/detail'}">
						<img class="mui-media-object mui-pull-left" :src="src">
						<div class="mui-media-body">
							<p class='mui-ellipsis'>{{topic.title}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					src: require("../images/laoxie.jpg"),
					topics:""
				}
			},
			methods: {
				linkTo(page) {
					console.log(page)
					window.location.href = "#/detail"
				},
				getData(){
					var self = this;
					$.ajax({
						url:"https://cnodejs.org/api/v1/topics",
						type:"GET",
						success(data){
							console.log(data)
							self.topics = data.data
						}
					})
				}
			},
			mounted() {
				this.getData();
				mui.init({
					pullRefresh: {
						container: "#refreshContainer", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
						down: {
							height: 50, //可选,默认50.触发下拉刷新拖动距离,
							auto: true, //可选,默认false.自动下拉刷新一次
							contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
							contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
							contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
							callback: function() {
									mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
									console.log("hello")
								} //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
						}
					}
				});
			}
	}
</script>
<style>
	.mui-bar-nav~ .mui-content .mui-pull-top-pocket {
		top: 0px
	}
</style>