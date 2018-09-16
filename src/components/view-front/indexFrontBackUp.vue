<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="header">
		<div class="top-header">
			<div class="container">
				<div class="top-header-info">
					<div class="top-header-left wow fadeInLeft animated" data-wow-delay=".5s">
						<p>欢迎来到“湾居·多密钥协同授权系统”</p>
					</div>
					<div class="top-header-right wow fadeInRight animated" data-wow-delay=".5s">
						<div class="top-header-right-info">
							<ul>
								<li><router-link to="/signupFront">注册</router-link></li>
							</ul>
						</div>
						<div class="clearfix"> </div>
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
		</div>
		<div class="bottom-header">
			<div class="container">
				<div class="logo wow fadeInDown animated" data-wow-delay=".5s">
					<h1><router-link to="/indexFront"><img src="../../../src/components/view-front/images/logo1.png" alt="" /></router-link></h1>
				</div>
				<div class="top-nav wow fadeInRight animated" data-wow-delay=".5s">
					<nav class="navbar navbar-default">
						<div class="container">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">Menu						
							</button>
						</div>
						<!-- Collect the nav links, forms, and other content for toggling -->
						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul class="nav navbar-nav">
								<li><router-link to="/indexFrontBackUp"  class="active" >分布式房管系统</router-link></li>
								<li><router-link to="/AboutBackUp">协同授权</router-link></li>
							</ul>	
							<div class="clearfix"> </div>
						</div>	
					</nav>		
				</div>
			</div>
		</div>
	</div>
	<!-- //header -->
	
	<!-- //header -->
	<!-- banner -->
	<div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">  
    <div class="slideshow">
      <transition-group tag="ul" name="imge"> 
        <li class="liStyle" v-for="(img, index) in imgArray" v-show="index===mark" :key="index">  
          <a href="#">  
            <img :src='img'>  
          </a>  
        </li>  
      </transition-group>  
    </div>  
    <div class="bullet">  
      <span v-for="(item, index) in imgArray" :class="{ 'active_index':index===mark }"  
      @click="change(index)" :key="index"></span>  
    </div>  
 	</div>  
	<!-- //banner -->
	
	<!-- footer -->
	<div class="footer">
		<div class="container">
			<div class="footer-grids">
				<div class="col-md-3 footer-nav wow fadeInLeft animated" data-wow-delay=".5s">
					<h4>Navigation</h4>
					<ul>
						<li><router-link to="/indexFront" >分布式房管系统</router-link></li>
						<li><router-link to="/About">协同授权</router-link></li>
					</ul>
				</div>
				<div class="col-md-5 footer-nav wow fadeInUp animated" data-wow-delay=".5s">
					<h4>Author</h4>
					<ul>
						<li>姓名：梁馨</li>
						<li>联系邮箱：912243963@qq.com</li>
						<li>学校：上海商学院</li>
					</ul>
				</div>
				<div class="col-md-4 footer-nav wow fadeInRight animated" data-wow-delay=".5s">
					<h4>Copyright</h4>
					<div class="news-grids">
						<div class="news-grid">
							<li>系统版权归作者梁馨所有</li>
							<li>思想版权归作者梁馨和指导老师孟庆华所有</li>
						</div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
			<div class="copyright wow fadeInUp animated" data-wow-delay=".5s">
				<p>@2018 Author: LiangXin  <a href="#" target="_blank" title="wanju">湾居·Home</a></p>
			</div>
		</div> 
	</div>
	</div>
</template>

<script>
		var adminService = require('../../services/adminService');
		var $ = require('jquery'),
        jAlert = require('../../thirdParty/jquery.alert');


  	export default {  
  	data () {   
    return {  
      timer: null, //定时器  
      mark: 0, //比对图片索引的变量    
      imgArray: [  
        'https://wx1.sinaimg.cn/mw1024/633a1d93ly1fr758bygy9j20uk0kdb2a.jpg', 
        'https://wx2.sinaimg.cn/mw1024/633a1d93ly1fr758c26hbj20uk0l7e82.jpg',  
        'https://wx2.sinaimg.cn/mw1024/633a1d93ly1fr757sng5fj20uk0ichb3.jpg'
      ]  
    }  
  },  
 methods: {  
    autoPlay () {  
      this.mark++;  
      if (this.mark === 3) {  
        this.mark = 0  
      }  
    },  
    play () {  
      this.timer = setInterval(this.autoPlay, 1500)  
    },  
    change (i) {  
      this.mark = i  
    },  
    stop () {  
      clearInterval(this.timer)  
    },  
    move () {  
      this.timer = setInterval(this.autoPlay, 1500)  
    },
		created () {  
    this.play()  
  	},
		logout: function () {
      var self = this;
      jAlert.jConfirm('确定要退出登录么？', '退出登录', function(result) {
      if (result) {
        adminService.logout();
        self.$router.push('/loginFront');
      }
      });
    },
  }   
}  
</script>

<style scoped>
		@import 'css/animate.css';
    @import 'css/bootstrap.css';
    @import 'css/font-awesome.css';
    @import 'css/lightbox.css';
    @import 'css/style.css';
		@import 'css/vue-slide.css';
		.liStyle{
			padding: 30px 150px;	
		}
</style>