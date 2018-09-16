<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="bgCustomer">
  <div class="wanju-main"> 
		<h1 class="costomerh1">湾居·多级登录</h1>
		<span id="error" v-show="noLogin">用户名或密码不正确</span>
		<div class="agilesign-form">  
			<div class="agileits-top">
				<form v-on:submit.prevent="onSubmit" method="post">
					<div class="styled-input w3ls-text">
						<input type="text" name="User Name"  v-model="name" required/>
						<label>用户名</label>
						<span></span>
					</div>
					<div class="styled-input w3ls-text">
						<input type="password" name="Password" v-model="password" required> 
						<label>密码</label>
						<span></span>
					</div> 
					<div class="wthree-text">  
					</div>
					<div class="agileits-bottom"> 
						<input type="submit" value="登录"> 
					</div>	
				</form>
			</div> 
			<div> 
				<p>&nbsp;</p>  
				<p>&nbsp;</p>
			</div>
		</div>	
	</div>	
	<!-- //main -->
	<!-- copyright -->
	<div class="copyright">
	    <p>&nbsp;</p>
		<p>&nbsp;</p>
		<p>© 2018 LogIn . 给你一个舒适的家！<a href="#" target="_blank">湾居</a></p>
		<p>&nbsp;</p>
	</div>
	
	</div>
</template>

<script>
 	var vue = require('vue');
    var vueResource = require('vue-resource');
//    Vue.use(vueResource);
    var router = require('vue-router');
	var constants = require('../../constants');
	var adminService = require('../../services/adminService');

	export default {
        name: 'loginCustomer',
        data: function () {
            return {
				name: '',
                password: '',
				noLogin: false
            }
        },
		ready: function() {
            this.name = null;
            this.password = null;
        },
		methods: {
            onSubmit: function() {
                var self = this;
                adminService.login(this.name, this.password).then(
                        function(data) {
							let rankLoglist = JSON.parse(localStorage.getItem(constants.USERINFO));
							let LogRank = rankLoglist["userInfo"]["rank"];
							if(LogRank=='一级'){
                            	self.$router.push('/VIP1');
							}else if(LogRank=='二级'){
								self.$router.push('/VIP2');
							}else if(LogRank=='三级'){
								self.$router.push('/VIP3');
							}else{
								self.$router.push('/VIP4');
							}
                        },
                        function(error) {
                            self.noLogin = true;
                        }
                ).catch(function(error) {
                            self.noLogin = true;
                });
            }
        }
	}
</script>


<style scoped>
	@import 'css/logInstyle.css';
	.costomerh1 {
    font-size: 3em;
    text-align: center;
    color: rgba(2, 29, 20, 0.6);
    font-weight: 100;
    margin-top: 5%; 
}
</style>