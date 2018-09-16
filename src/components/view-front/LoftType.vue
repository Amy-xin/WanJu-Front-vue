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
								<li><a href="#" v-on:click.prevent="logout">退出登录</a></li>
								<li><router-link to="/login">后台登录</router-link></li>
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
								<li><router-link to="/indexFront" >分布式房管系统</router-link></li>
								<li><router-link to="/Branch" >联盟管理</router-link></li>
								<li><router-link to="/RoomType"  class="active" >内容管理</router-link></li>
								<li><router-link to="/loginCustomer">多级登录</router-link></li>	
								<li><router-link to="/About">协同授权</router-link></li>
							</ul>	
							<div class="clearfix"> </div>
						</div>	
					</nav>		
				</div>
			</div>
		</div>
	</div>
	<!-- //header -->
	
	<!-- gallery -->
		<div class="gallery">
			<div class="container">
				<div class="gallery-heading">
					<h2>loft房型</h2>
					<p>如果有需要请联系我们，了解更多房源</p>
				</div>
				
				<div class="gallery-grids">
					<div class="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div class="grid">
							<figure class="effect-apollo">
								<a class="example-image-link" href="../../../src/components/view-front/images/loft3.jpg" data-lightbox="example-set" data-title="">
									<img src="../../../src/components/view-front/images/loft3.jpg" alt="" />
									<figcaption>
										<h3>3100元/月</h3>
										<p>免费看房</p>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div class="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div class="grid">
							<figure class="effect-apollo">
								<a class="example-image-link" href="../../../src/components/view-front/images/loft5.jpg" data-lightbox="example-set" data-title="">
									<img src="../../../src/components/view-front/images/loft5.jpg" alt="" />
									<figcaption>
										<h3>3000元/月</h3>
										<p>免费看房</p>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div class="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div class="grid">
							<figure class="effect-apollo">
								<a class="example-image-link" href="../../../src/components/view-front/images/loft4.jpg" data-lightbox="example-set" data-title="">
									<img src="../../../src/components/view-front/images/loft4.jpg" alt="" />
									<figcaption>
										<h3>3400元/月</h3>
										<p>免费看房</p>
									</figcaption>		
								</a>
							</figure>
						</div>
					</div>
					<div class="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div class="grid">
							<figure class="effect-apollo">
								<a class="example-image-link" href="../../../src/components/view-front/images/loft7.jpg" data-lightbox="example-set" data-title="">
									<img src="../../../src/components/view-front/images/loft7.jpg" alt="" />
									<figcaption>
										<h3>4000元/月</h3>
										<p>免费看房</p>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div class="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div class="grid">
							<figure class="effect-apollo">
								<a class="example-image-link" href="../../../src/components/view-front/images/loft8.jpg" data-lightbox="example-set" data-title="">
									<img src="../../../src/components/view-front/images/loft8.jpg" alt="" />
									<figcaption>
										<h3>4500元/月</h3>
										<p>免费看房</p>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div class="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div class="grid">
							<figure class="effect-apollo">
								<a class="example-image-link" href="../../../src/components/view-front/images/loft9.jpg" data-lightbox="example-set" data-title="">
									<img src="../../../src/components/view-front/images/loft9.jpg" alt="" />
									<figcaption>
										<h3>3100元/月</h3>
										<p>免费看房</p>
									</figcaption>		
								</a>
							</figure>
						</div>
					</div>
					<div class="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div class="grid">
							<figure class="effect-apollo">
								<a class="example-image-link" href="../../../src/components/view-front/images/loft10.jpg" data-lightbox="example-set" data-title="">
									<img src="../../../src/components/view-front/images/loft10.jpg" alt="" />
									<figcaption>
										<h3>2700元/月</h3>
										<p>免费看房</p>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div class="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div class="grid">
							<figure class="effect-apollo">
								<a class="example-image-link" href="../../../src/components/view-front/images/loft8.jpg" data-lightbox="example-set" data-title="">
									<img src="../../../src/components/view-front/images/loft11.jpg" alt="" />
									<figcaption>
										<h3>2900元/月</h3>
										<p>免费看房</p>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div class="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div class="grid">
							<figure class="effect-apollo">
								<a class="example-image-link" href="../../../src/components/view-front/images/loft9.jpg" data-lightbox="example-set" data-title="">
									<img src="../../../src/components/view-front/images/loft12.jpg" alt="" />
									<figcaption>
										<h3>5000元/月</h3>
										<p>免费看房</p>
									</figcaption>		
								</a>
							</figure>
						</div>
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
		</div>
	<!-- //gallery -->
	
	<!-- footer -->
	<div class="footer">
		<div class="container">
			<div class="footer-grids">
				<div class="col-md-3 footer-nav wow fadeInLeft animated" data-wow-delay=".5s">
					<h4>Navigation</h4>
					<ul>
						<li><router-link to="/indexFront" >分布式房管系统</router-link></li>
						<li><router-link to="/Branch" class="active" >联盟管理</router-link></li>
						<li><router-link to="/RoomType" >内容管理</router-link></li>
						<li><router-link to="/loginCustomer">多级登录</router-link></li>	
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
    		return { }  
  		},  
 		methods: {  
		logout: function () {
      		var self = this;
      		jAlert.jConfirm('确定要退出登录么？', '退出登录', function(result) {
      		if (result) {
        		adminService.logout();
        		self.$router.push('/loginFront');
      		}
      		});
    	}
		}
	}

</script>


<style scoped>
	@import 'css/animate.css';
    @import 'css/bootstrap.css';
    @import 'css/font-awesome.css';
    @import 'css/lightbox.css';
    @import 'css/style.css';
</style>