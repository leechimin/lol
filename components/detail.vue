<template>
	<div class="mui-content">
		<div v-html="topic"></div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					src: require("../images/laoxie.jpg"),
					topic: ""
				}
			},
			methods: {
				getDetail() {
					var self = this;
					$.ajax({
						type:"get",
						url:"https://cnodejs.org/api/v1/topic/58e607b0ddee72813eb22323",
						async:true,
						success(data){
							console.log(data)
							self.topic = data.data.content
						}
					});
				}
			},
			mounted() {
				this.getDetail()
			}
	}
</script>