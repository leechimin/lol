module.exports = {
	//入口文件
	entry: __dirname + "/main.js",
	//导出文件
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		}
	},
	module: {
		loaders: [{
			//cnpm install babel-loader
			test: /\.js$/ ,
			loader: "babel-loader"
		},{
			//cnpm install html-loader
			test: /\.html$/ ,
			loader: "html-loader"
		},{
			//cnpm install vue-loader vue-template-compiler
			test: /\.vue$/ ,
			loader: "vue-loader"
		},{
			//cnpm install sass-loader node-sass
			test: /\.scss$/ ,
			loader: "sass-loader"
		},{
			//npm install url-loader
			test:/\.(jpg|png|gif|jpeg)$/,
			loader:"url-loader"
		},{
			//npm install css-loader
			test:/\.css$/,
			loader:"style-loader!css-loader"
		},{
			//npm install file-loader
			test:/\.(ttf|svg|woff|eot)$/,
			loader:"file-loader"
		}]
	},
	//配置服务器
	devServer:{
		//服务器文件夹
		contentBase: "./public",
		//port
		//实时更新
		inline: true
	}
}