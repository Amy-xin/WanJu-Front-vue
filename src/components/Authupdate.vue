<template xmlns:v-on="http://www.w3.org/1999/xhtml">
<div class="basic-grey" style="width:100%;heigh:100%;position:absolute;z-index:999;">
    <form action="" method="post" class="STYLE-NAME">
    <h1>修改用户权限</h1>
    <label>
        <span>用户名 :</span>
        <input type="text" name="name" placeholder="请输入用户名" v-model="userName" required />
    </label>
    <br></br>
    <!--<label>
        <span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码 :</span>
        <input type="text" name="Password" placeholder="请输入密码"  v-model="userPwd" required/>
    </label>
    <label>
        <span>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位 :</span>
        <select name="selection" v-model="position" required>
            <option value="老板">老板</option>
            <option value="经理">经理</option>
            <option value="员工/顾客">员工/顾客</option>
        </select>
    </label>-->
    <label>
        <span>权限级别 :</span>
        <select name="rank" v-model="rank" required>
            <option value="一级">一级</option>
            <option value="二级">二级</option>
            <option value="三级">三级</option>
            <option value="四级">四级</option>
        </select>
        <!--<input type="text" name="rank" placeholder="请输入权限等级" v-model="rank" required/>-->
    </label>
    <label>
        <span>&nbsp;</span>
        <li class="center">
        <input type="button" class="button2" value="确定" v-on:click="updateAuth"/>
        <input type="button" class="button1" value="取消" v-on:click="Hidden" />
        </li>
    </label>
    </form>
</div>
</template>

<script>
    var authService = require('../services/authService');
    var vue = require('vue');
    var vueResource = require('vue-resource');
    var router = require('vue-router');
	var constants = require('../constants');

    export default {
        //props: ['loanList'],
        name: 'Authupdate',
        data: function () {
            return {
				userName: '',
                userPwd: '',
                position: '',
                rank: ''
            }
        },
		ready: function() {
            this.userName = null;
            this.userPwd = null;
            this.position = null;
            this.rank = null;
        },
        // computed: {
        //     modifylist() {
        //         return this.loanList;
        //     }
        // },
		methods: {
            //本更改密码弹出框的显示隐藏事件
            Hidden:function(){
            //通过$emit引用组件传过来的hidden()事件
            this.$emit('hidden')
            },
            updateAuth:function(){
                var self = this;
                authService.updateAuthInfo(this.userName,this.rank)
                .then(function(data) {
                            self.$router.push('/back');
                })
            }
        }
	}
</script>

<style>
.basic-grey {
    margin-top:15px;
    margin-left:240px;
    margin-right:auto;
    max-width: 500px;
    background:  rgb(46, 59, 66);
    padding: 25px 15px 25px 10px;
    font: 15px Georgia, "Times New Roman", Times, serif;
    color: #888;
    border:1px solid #E4E4E4;
    }
.basic-grey h1 {
    font-size: 25px;
    padding: 0px 0px 10px 40px;
    display: block;
    border-bottom:1px solid #E4E4E4;
    margin: -10px -15px 30px -10px;;
    color: #FFFFFF;;
}
.basic-grey h1>span {
    display: block;
    font-size: 11px;
}
.basic-grey label {
    display: block;
    margin: 0px;
}
.basic-grey label>span {
    float: left;
    width: 20%;
    text-align: right;
    padding-right: 10px;
    margin-top: 10px;
    color: #FFFFFF;
}
.basic-grey input[type="text"], .basic-grey input[type="email"], .basic-grey textarea, .basic-grey select {
    border: 1px solid #DADADA;
    color: #888;
    height: 30px;
    margin-bottom: 16px;
    margin-right: 6px;
    margin-top: 2px;
    outline: 0 none;
    padding: 3px 3px 3px 5px;
    width: 70%;
    font-size: 12px;
    line-height:15px;
    box-shadow: inset 0px 1px 4px #ECECEC;
    -moz-box-shadow: inset 0px 1px 4px #ECECEC;
    -webkit-box-shadow: inset 0px 1px 4px #ECECEC;
}
.basic-grey textarea{
    padding: 5px 3px 3px 5px;
}
.basic-grey select {
    appearance:none;
    -webkit-appearance:none;
    -moz-appearance: none;
    text-indent: 0.01px;
    text-overflow: '';
    width: 70%;
    height: 35px;
    line-height: 25px;
}
.basic-grey textarea{
    height:100px;
}
.basic-grey .button1 {
    background: #E27575;
    border: none;
    padding: 10px 25px 10px 25px;
    margin:0px 20px;
    color: #FFF;
}

.basic-grey .button2 {
    background: rgb(51, 173, 243);
    border: none;
    padding: 10px 25px 10px 25px;
    margin:0px 20px;
    color: #FFF;
}

.basic-grey .center{
    margin:20px auto 0px;
	width:fit-content;
}
</style>