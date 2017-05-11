<template>
	<div>
		<swiper></swiper>
		<pullrefresh></pullrefresh>
	</div>
</template>
<script>
	import swiper from "../swiper.vue";
	import pullrefresh from "../pullrefresh.vue";
	export default {
		components:{																																										
			swiper,
			pullrefresh
		}	
	}
</script>