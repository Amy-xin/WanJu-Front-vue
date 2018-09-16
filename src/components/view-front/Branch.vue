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
								<li><router-link to="/Branch" class="active" >联盟管理</router-link></li>
								<li><router-link to="/RoomType" >内容管理</router-link></li>
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
	
	<!-- about -->
	<div class="blog">
			<!-- container -->
			<div class="container">
				<div class="blog-heading">
					<h2 class="wow fadeInDown animated" data-wow-delay=".5s">联盟分店管理</h2>
					<p class="wow fadeInUp animated" data-wow-delay=".5s">联盟销售，独立管理。给你团队的凝聚力，让你展示各自的风采。一起让经济最大化！</p>
				</div>
				<div class="blog-top-grids">
					<div class="col-md-8 blog-top-left-grid">
						<div class="left-blog">
							<div class="blog-left">
								<div class="blog-left-left wow fadeInUp animated" data-wow-delay=".5s">
									<p>代言人 <a href="#">涛涛</a> &nbsp;&nbsp; 上海分公司</p>
									<router-link to="/loginMulti" ><img src="../../../src/components/view-front/images/shanghai1.jpg" alt="" /></router-link>
								</div>
								<div class="blog-left-right wow fadeInUp animated" data-wow-delay=".5s">
									<router-link to="/loginMulti" >繁华上海</router-link>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上海，简称“沪”或“申”，是中国共产党的诞生地，中华人民共和国直辖市，国家中心城市，超大城市，沪杭甬大湾区核心城市，国际经济、金融、贸易、航运、科技创新中心，
									首批沿海开放城市。上海地处长江入海口，是长江经济带的龙头城市，隔东中国海与日本九州岛相望，南濒杭州湾，北、西与江苏、浙江两省相接。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上海是全球著名的金融中心，
									全球人口规模和面积最大的都会区之一。上海被GaWC评为世界一线城市。上海住户存款总额和人均住户存款均居全国第二。2017年，上海高新技术企业总数达到7642家。福布斯2017年“中国大陆最佳商业城市排行榜”排第一位。
								</p>
								</div>
								<div class="clearfix"> </div>
							</div>
							<div class="blog-left">
								<div class="blog-left-left wow fadeInUp animated" data-wow-delay=".5s">
									<p>代言人 <a href="#">晏晏</a> &nbsp;&nbsp; 海南分公司</p>
									<router-link to="/loginMulti" ><img src="../../../src/components/view-front/images/hainan1.jpg" alt="" /></router-link>
								</div>
								<div class="blog-left-right wow fadeInUp animated" data-wow-delay=".5s">
									<router-link to="/loginMulti" >魅力海南</router-link>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;海南岛从平面上看，就像一个椭圆形雪梨，横卧在碧波万顷的南海之上。海南岛的长轴呈东北一西南向，长约300余公里，西北一东南向为短轴，长约180公里，面积约3.44万平方公里，是中国仅次于台湾岛的第二大岛。
									<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;海南岛北隔琼州海峡，与雷州半岛相望。琼州海峡宽约30公里，是海南岛和中国大陆间的海上“走廊”，又是北部湾和南海之间的海运通道。由于邻近大陆，加之岛内山势磅礴，五指参天，所以每当天气晴朗、万里无云之时，站在雷州半岛的南部海岸遥望，海南岛便隐约可见。
									</p>
								</div>
								<div class="clearfix"> </div>
							</div>
							
							<div class="blog-left">
								<div class="blog-left-left wow fadeInUp animated" data-wow-delay=".5s">
									<p>代言人 <a href="#">冰冰</a> &nbsp;&nbsp; 云南分公司</p>
									<router-link to="/loginMulti" ><img src="../../../src/components/view-front/images/dali3.jpg" alt="" /></router-link>
								</div>
								<div class="blog-left-right wow fadeInUp animated" data-wow-delay=".5s">
									<router-link to="/loginMulti" >情动云南</router-link>
									<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;云南是人类文明重要发祥地之一，生活在距今170万年前的元谋人，是发现的中国和亚洲最早人类。战国时期，这里是滇族部落的生息之地。云南即彩云之南、七彩云南，另一说法是因位于“云岭之南”而得名。
									<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;云南动植物种类数为全国之冠，素有“动植物王国”之称，被誉为“有色金属王国”，历史文化悠久，自然风光绚丽，有丽江古城、三江并流、石林、哈尼梯田、大理古城、崇圣寺三塔、玉龙雪山、洱海、滇池、抚仙湖、梅里雪山、普达措国家公园、噶丹松赞林寺、西双版纳热带雨林等旅游景点。
									</p>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
					</div>
					<div class="col-md-4 blog-top-right-grid">
						<div class="comments">
							<h3 class="wow fadeInUp animated" data-wow-delay=".5s">联盟代言人</h3>
							<div class="comments-text wow fadeInUp animated" data-wow-delay=".5s">
								<div class="col-md-3 comments-left">
									<img src="../../../src/components/view-front/images/liutao.jpg" alt="" />
								</div>
								<div class="col-md-9 comments-right">
									<h5>涛涛</h5>
									<router-link to="/loginMulti" >上海</router-link>
									<p>April 16,2018</p>
								</div>
								<div class="clearfix"> </div>
							</div>
							<div class="comments-text wow fadeInUp animated" data-wow-delay=".5s">
								<div class="col-md-3 comments-left">
									<img src="../../../src/components/view-front/images/yanyan.jpg" alt="" />
								</div>
								<div class="col-md-9 comments-right">
									<h5>晏晏</h5>
									<router-link to="/loginMulti" >海南</router-link>
									<p>April 16,2018</p>
								</div>
								<div class="clearfix"> </div>
							</div>
							<div class="comments-text wow fadeInUp animated" data-wow-delay=".5s">
								<div class="col-md-3 comments-left">
									<img src="../../../src/components/view-front/images/bingbing.jpg" alt="" />
								</div>
								<div class="col-md-9 comments-right">
									<h5>冰冰</h5>
									<router-link to="/loginMulti" >云南</router-link> 
									<p>April 16,2018</p>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
			<!-- //container -->
		</div>
	<!-- //blog -->
	
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