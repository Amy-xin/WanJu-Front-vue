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
								<li><router-link to="/indexFront">分布式房管系统</router-link></li>
								<li><router-link to="/Branch" >联盟管理</router-link></li>
								<li><router-link to="/RoomType" >内容管理</router-link></li>
								<li><router-link to="/loginCustomer">多级登录</router-link></li>	
								<li><router-link to="/About" class="active" >协同授权</router-link></li>
							</ul>	
							<div class="clearfix"> </div>
						</div>	
					</nav>		
				</div>
			</div>
		</div>
	</div>
	<!-- //header -->
	
	<!-- about -->
	<div class="about">
		<div class="about-heading">
			<div class="container">
				<h2 class="wow fadeInDown animated" data-wow-delay=".5s">关于协同授权的理念</h2>
				<p class="wow fadeInUp animated" data-wow-delay=".5s">阶梯式多级协同授权   ·   多密钥同时授权</p>
			</div>
		</div>
		
		<div class="about-top">
			<div class="container">
				<div class="about-bottom">
					<h3>（一）阶梯式多级协同授权</h3>
					<img class="wow fadeInUp animated" data-wow-delay=".5s" src="../../../src/components/view-front/images/多级.png" alt="" />
					<p class="wow fadeInUp animated" data-wow-delay=".5s">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以阶梯式的多层密钥设计对数据进行加密，管理者可以对需要数据加密的板块设置多层密钥，访问者每次输入一个密钥通过验证后可访问一定内容 ，层层深入。
					<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在应用中，首先将数据进行划分，划分时可以从重要程度、地区、分公司、部门等多因素入手，根据需要通过不同的板块进行展示，用户在访问时需要不断层层的输入密码，验证通过后方能查看相应的数据。</p>
				</div>
			</div>
		</div>

		<div class="about-top">
			<div class="container">
				<div class="about-bottom">
					<h3>（二）多密钥同时授权</h3>
					<img class="wow fadeInUp animated" data-wow-delay=".5s" src="../../../src/components/view-front/images/多密钥.png" alt="" />
					<p class="wow fadeInUp animated" data-wow-delay=".5s">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以组合式进行多密钥共同登录验证：分公司可以进行数据的独立访问及管理，需要部门经理和老板同时登录认证过后才能进行对分公司内部财务数据等的访问。
					<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种模式可以用于限制本级别重要页面和数据或进行本级别其他部门信息的访问，需要同级及上级的共同密钥登录才能被允许访问；当然也可以用于公司与外部合作者的对接时使用，在公司环境外访问数据时，
					对接者与外部访问者同时登录才能访问到对接者权限内的数据，具体的可以根据需要来进行规定。</p>
				</div>
			</div>
		</div>
		
		<!-- team -->
		<div class="team">
			<div class="container">
				<!--<div class="popular-heading team-heading">
					<h3 class="wow fadeInUp animated" data-wow-delay=".5s">房型</h3>
				</div>-->
				<div class="team-grids">
					<div class="col-md-4 team-grid wow fadeInLeft animated" data-wow-delay=".5s">
						<img src="../../../src/components/view-front/images/yishi5.jpg" alt="" />
					</div>
					<div class="col-md-4 team-grid wow fadeInUp animated" data-wow-delay=".5s">
						<img src="../../../src/components/view-front/images/loft9.jpg" alt="" />
					</div>
					<div class="col-md-4 team-grid wow fadeInRight animated" data-wow-delay=".5s">
						<img src="../../../src/components/view-front/images/other6.jpg" alt="" />
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
		</div>
		<!-- //team -->
	</div>
	<!-- //about -->
	
	<!-- footer -->
	<div class="footer">
		<div class="container">
			<div class="footer-grids">
				<div class="col-md-3 footer-nav wow fadeInLeft animated" data-wow-delay=".5s">
					<h4>Navigation</h4>
					<ul>
						<li><router-link to="/indexFront" >分布式房管系统</router-link></li>
						<li><router-link to="/About">协同授权理念</router-link></li>
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