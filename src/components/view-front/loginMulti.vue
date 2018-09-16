<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="bgMulit">
  <div class="wanju-main"> 
		<h1 class="Mulith1">湾居·多密钥同时登录</h1>
		<ul class="Mulitul">
			<!--经理1--> 
		<li style="display:inline-block;margin-left:8%;">
			<div class="manager1-form">
			<div class="manager-top">
				<form v-on:submit.prevent="testManager1" method="post">
				<h1 class="everyh1">经理1登录</h1>
				<li id="error" v-show="noLogin1">用户名或密码不正确</li>
					<div class="styled-input w3ls-text">
						<input type="text" name="User Name"  v-model="nameManager1" required/>
						<label>用户名</label>
						<span></span>
					</div>
					<div class="styled-input w3ls-text">
						<input type="password" name="Password" v-model="passwordManager1" required/> 
						<label>密码</label>
						<span></span>
					</div> 
					<div class="Mulit-bottom"> 
						<input  id="submit1" type="submit" value="验证1"> 
					</div>	
				</form>
			</div>
			</div> 
			</li>
			<!--经理2-->
			<li style="display:inline-block;margin-left:8%;">
			<div class="manager2-form">
			<div class="manager-top">
				<form v-on:submit.prevent="testManager2" method="post">
				<h1 class="everyh1">经理2登录</h1>
				<li id="error" v-show="noLogin2">用户名或密码不正确</li>
					<div class="styled-input w3ls-text">
						<input type="text" name="User Name"  v-model="nameManager2" required/>
						<label>用户名</label>
						<span></span>
					</div>
					<div class="styled-input w3ls-text">
						<input type="password" name="Password" v-model="passwordManager2" required/> 
						<label>密码</label>
						<span></span>
					</div> 
					<div class="Mulit-bottom"> 
						<input id="submit2" type="submit" value="验证2"> 
					</div>	
				</form>
			</div> 
			</div>
        </li>
		</ul>

		<div class="Boss-form">
			<div class="manager-top">
				<form v-on:submit.prevent="testBoss" method="post">
				<h1 class="everyh1">分公司老板登录</h1>
				<li id="error" v-show="noLogin3">用户名或密码不正确</li>
					<div class="styled-input w3ls-text">
						<input type="text" name="User Name"  v-model="nameBoss" required/>
						<label>用户名</label>
						<span></span>
					</div>
					<div class="styled-input w3ls-text">
						<input type="password" name="Password" v-model="passwordBoss" required/> 
						<label>密码</label>
						<span></span>
					</div> 
					<div class="Mulit-bottom"> 
						<input id="submit3" type="submit" value="验证3"> 
					</div>	
				</form>
			</div> 
			</div>

			<div class="buttonLastDiv"> 
				<p>&nbsp;</p>
				<input type="button" class="buttonLast1" value="协同授权登录" v-show="isdisable" v-on:click="ending"/>  
				<p>&nbsp;</p>
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
        name: 'loginMulti',
        data: function () {
            return {
				nameManager1: '',
                passwordManager1: '',
				nameManager2: '',
                passwordManager2: '',
				nameBoss: '',
                passwordBoss: '',
				noLogin1: false,
				noLogin2: false,
				noLogin3: false,
				isReallyMa1:false,
				isReallyMa2:false,
				isReallyBoss:false,
				isdisable:false
            }
        },
		ready: function() {
            this.nameManager1 = null;
            this.passwordManager1 = null;
			this.nameManager2 = null;
            this.passwordManager2 = null;
			this.nameBoss = null;
            this.passwordBoss = null;
        },
		methods: {		
			testManager1:function() {
				var self = this;
				adminService.testByNameAndPwd1(this.nameManager1, this.passwordManager1).then(data =>{
					self.isReallyMa1 = data;
					if(self.isReallyMa1){
						submit1.style.backgroundColor = 'rgb(75, 235, 83)';
					}
				},function(error) {
                    self.noLogin1 = true;
                })
			},
			testManager2:function() {
				var self = this;
				adminService.testByNameAndPwd1(this.nameManager2, this.passwordManager2).then(data =>{
					self.isReallyMa2 = data;
					if(self.isReallyMa2){
						submit2.style.backgroundColor = 'rgb(75, 235, 83)';
					}
				},function(error) {
                    self.noLogin2 = true;
                })
			},
			testBoss:function() {
				var self = this;
				adminService.testByNameAndPwd2(this.nameBoss, this.passwordBoss).then(data =>{
					self.isReallyBoss = data;
					if(self.isReallyBoss){
						submit3.style.backgroundColor = 'rgb(75, 235, 83)';
					}
					if(self.isReallyBoss&&self.isReallyMa2&&self.isReallyMa1){
						self.isdisable = true;
					}
				},function(error) {
                    self.noLogin3 = true;
                })
			},
			ending:function(){
				var self = this;
				self.$router.push('/Finance');
			}



            // onSubmit: function() {
            //     var self = this;
            //     adminService.login(this.name, this.password).then(
            //             function(data) {
			// 				let rankLoglist = JSON.parse(localStorage.getItem(constants.USERINFO));
			// 				let LogRank = rankLoglist["userInfo"]["rank"];
			// 				if(LogRank=='一级'){
            //                 	self.$router.push('/VIP1');
			// 				}else if(LogRank=='二级'){
			// 					self.$router.push('/VIP2');
			// 				}else if(LogRank=='三级'){
			// 					self.$router.push('/VIP3');
			// 				}else{
			// 					self.$router.push('/VIP4');
			// 				}
            //             },
            //             function(error) {
            //                 self.noLogin = true;
            //             }
            //     ).catch(function(error) {
            //                 self.noLogin = true;
            //     });
            // }
        }
	}
</script>


<style scoped>
	@import 'css/logInstyle.css';
	.Mulith1 {
    	font-size: 3em;
    	text-align: center;
    	color:#fff;
    	font-weight: 100; 
		background: rgba(2, 29, 20, 0.3);
		width:500px;
		margin: 30px 50% 30px 35%;
	}
	.everyh1 {
    	font-size: 2em;
    	text-align: center;
    	color:#fff;
    	font-weight: 100; 
		
	}
	.Mulitul {
		margin: 30px 10% 30px 20%;
	}
	.bgMulit{
    	background: url(../../../src/components/view-front/images/fengmian12.jpg)no-repeat center 0px;
    	background-attachment: fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover; 
    	background-size: cover;
    	height: 100%;
	}
	.manager1-form{
		width: 340px;
		height:340px;
    	margin: 30px 0px;
    	background: rgba(2, 29, 20, 0.7); 
	}
	.manager1-form input[type="text"], .manager1-form input[type="password"] {
    	font-size: 1em;
    	color: #fff;
    	padding: 0.8em .5em;
    	border: 0;
   		width: 96%;
    	border-bottom: 1px solid #fff;
    	background: none;
    	-webkit-appearance: none;
	}
	.manager-top {
    	padding: 1em 3em 0;
	}
	.manager2-form{
		width: 340px;
		height:340px;
    	margin: 30px 0px;
    	background: rgba(2, 29, 20, 0.7); 
	}
	.manager2-form input[type="text"], .manager2-form input[type="password"] {
    	font-size: 1em;
    	color: #fff;
    	padding: 0.8em .5em;
    	border: 0;
   		width: 96%;
    	border-bottom: 1px solid #fff;
    	background: none;
    	-webkit-appearance: none;
	}
	.Boss-form{
		width: 340px;
		height:340px;
    	margin: 0px 50% 0px 41%;
    	background: rgba(2, 29, 20, 0.7); 
	}
	.Boss-form input[type="text"], .Boss-form input[type="password"] {
    	font-size: 1em;
    	color: #fff;
    	padding: 0.8em .5em;
    	border: 0;
   		width: 96%;
    	border-bottom: 1px solid #fff;
    	background: none;
    	-webkit-appearance: none;
	}
	.Mulit-bottom {
	}
	.Mulit-bottom input[type="submit"] {
		text-align: center;
		font-size: 1.5em;
		color: #FF9800;
		background: #fff;
		outline: none;
		cursor: pointer;
		padding: 0.6em 0;
		-webkit-appearance: none;
		border: none;
		width: 106%; 
		margin-left: -0.7em;  
	}
	.Mulit-bottom:active {
  		box-shadow: 0 5px #666;
  		transform: translateY(4px);
	}
	.buttonLast {
    background: rgb(51, 173, 243);
    border: none;
    padding: 10px 25px 10px 25px;
    margin:0px 20px;
    color: #FFF;
    }
	.buttonLast1{
		text-align: center;
		font-size: 1.5em;
		color: #FFF;
		background: #FF9800;
		outline: none;
		cursor: pointer;
		padding: 0.6em 0;
		-webkit-appearance: none;
		border: none;
		width: 30%; 
		margin:0px 50%;
		margin-left: 21.5em;  
	}
	.buttonLast1:active {
  		background-color: #3e8e41;
  		box-shadow: 0 5px #666;
  		transform: translateY(4px);
	}
	.buttonLastDiv {
  		 padding: 0px 13% 0px 3%;
	}
</style>