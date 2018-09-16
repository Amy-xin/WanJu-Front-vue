<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="mws-panel grid_8" id="app">
        <div class="mws-panel-header">
            <span class="mws-i-24 i-table-1">授权管理</span>
        </div>
        <div class="mws-panel-body">
            <div class="dataTables_wrapper">	
                <table class="mws-datatable-fn mws-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>用户名</th>
                        <th>职位</th>
						<th>权限等级</th>
                    </tr>
                    </thead>
                    <addAuth @hidden="hiddenShow" v-show="isAddAuthShow">  </addAuth>
                    <addUpdate @hidden="hiddenShow" v-show="isUpdateAuthShow">  </addUpdate>
                    <addDelete @hidden="hiddenShow" v-show="isDeleteAuthShow">  </addDelete>
                    <tbody v-for="(loan, index) in loanList">
                    <tr :class="{'gradeX even': index % 2 === 0, 'gradeA odd': index % 2 !== 0 }">
                        <td>{{loan.userId}}</td>
                        <td>{{loan.userName}}</td>
                        <td>{{loan.position}}</td>
                        <td>{{loan.rank}}</td>
                       <!--<td><a href="javascript:;" v-on:click="updateAuthShow">修改</a> | <a href="javascript:;">删除</a></td>-->
                    </tr>
                    </tbody>
                </table>
                <!--<pagination v-bind:total="paging.total" :current-page="paging.currentPage" v-events="gotoPage: gotoPage"></pagination>-->
                </div>
        </div>
        <li class="bottonLi">
        <input class="bottonadd" type="button" value="新增" v-on:click="addAuthShow">
        <input class="bottonupdate" type="button" value="编辑" v-on:click="updateAuthShow">
        <input class="bottondelect" type="button" value="删除" v-on:click="deleteAuthShow">
        </li>
    </div>
</template>

<script>
    var authService = require('../services/authService'),
        constant = require('../constants'),
        pagination = require('./pagination.vue'),
		adminService = require('../services/adminService'),
        addAuth = require('./Authadd.vue'),
        addUpdate = require('./Authupdate.vue'),
        addDelete = require('./Authdelete.vue'),
        constants = require('../constants');

    export default {
        components: {
            pagination,   //引用组件
            addAuth,
            addUpdate,
            addDelete
        },

        data: function () {
            return {
                paging: {
                    start: 0,
                    total: 0,
                    lastPage: 0,
                    currentPage: 0,
                    pageList:[],
                },
                loanList: [],
                isAddAuthShow:false,
                isUpdateAuthShow:false,
                isDeleteAuthShow:false
            }
        },
        mounted: function () {
                let userInfoList = JSON.parse(localStorage.getItem(constants.USERINFO));
			    this.getAuthInfo(userInfoList);
        },
        methods: {
            getAuthInfo:function(userInfoList){
                let logPosition = userInfoList["userInfo"]["position"];
                if(logPosition=='老板'){
                    authService.getAuthInfo().then(response => {
                        this.loanList = response.userInfo;
                });
                }else if(logPosition=='经理'){
                    authService.getAuthInfoNotBoss().then(response => {
                        this.loanList = response.userInfo;
                    });
                }else{
                    authService.getAuthInfoStaff().then(response => {
                        this.loanList = response.userInfo;
                    });
                }
                
            },
            //新增弹出框显示（组件引用的弹出框）
            addAuthShow:function(){
                console.log("aaaaa")
                this.isAddAuthShow=true;
            },
            //修改弹出框显示（组件引用的弹出框）
            updateAuthShow:function(){
                console.log("gggg")
                this.isUpdateAuthShow=true;
            },
            //新增弹出框显示（组件引用的弹出框）
            deleteAuthShow:function(){
                console.log("ddddd")
                this.isDeleteAuthShow=true;
            },
            //更改密码弹出框隐藏（传给组件一个点击事件）
            hiddenShow(){
                let that = this;
                that.isAddAuthShow = false;
                that.isUpdateAuthShow = false;
                that.isDeleteAuthShow=false;
            }
            
        }
    }
</script>

<style>
</style>