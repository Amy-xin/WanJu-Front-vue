<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="bgSignup">
	<!-- main -->
	<div class="wanju-main"> 
		<h1 class="wlh1">湾居·注册</h1>
		<div class="agilesign-form">  
			<div class="agileits-top">
				<form v-on:submit.prevent="signup" method="post" class="STYLE-NAME">
					<div class="styled-input w3ls-text">
						<input type="text" name="User Name" v-model="name" required/>
						<label>用户名</label>
						<span></span>
					</div>
					<div class="styled-input w3ls-text">
						<input type="password" name="Password" v-model="password" required> 
						<label>密码</label>
						<span></span>
					</div> 
					<div class="styled-select w3ls-text">
						<select type="select" name="position" v-model="position" required>
            				<option class="optionBg" value="老板">老板</option>
            				<option class="optionBg" value="经理">经理</option>
            				<option class="optionBg" value="员工/顾客">员工/顾客</option>
        				</select>
						<label>请选择职位</label>
						<span></span>
					</div>
					<div class="wthree-text">  
					</div>
					<div class="agileits-bottom"> 
						<input type="submit" value="注册"> 
					</div>	
				</form>
			</div> 
			<div class="w3agile-btm"> 
				<p>暂无账号? <router-link to="/loginFront" >登录</router-link></p>   
			</div>
		</div>

		<div> 
				<p>&nbsp;</p>  
			</div>

	</div>	
	<!-- //main -->
	<!-- copyright -->
	<div class="copyright">
		<p>© 2018 LogIn . 给你一个舒适的家！<a href="#" target="_blank">湾居</a></p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
	</div>
	</div>
</template>

<script>
	var authService = require('../../services/authService');
    var vue = require('vue');
    var vueResource = require('vue-resource');
    var router = require('vue-router');
	var constants = require('../../constants');

	export default {
        name: 'signupFront',
        data: function () {
            return {
				name: '',
                password: '',
				position: ''
            }
        },
		ready: function() {
            this.name = null;
            this.password = null;
			this.position = null;
        },
		methods: {
            signup:function(){
                var self = this;
				var pw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/;
				if(!pw.test(this.password )){ 
					alert("密码格式不正确!"); 
				}else{
					authService.signUp(this.name, this.password ,this.position)
                	.then(function(data) {
                        self.$router.push('/loginFront');
                	})
				}
            }
        }
	}
</script>

<style scoped>
	@import 'css/logInstyle.css';
	.optionBg{
		background:  rgb(46, 59, 66);
	}
</style>

var pw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
	if(!pw.test(str2)){ alert("密码格式不正确!"); 
}