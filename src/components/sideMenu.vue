/**
* Created by hepf3 on 6/5/2016.
*/
<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div>
        <div id="mws-sidebar-stitch"></div>
        <div id="mws-sidebar-bg"></div>
        <div id="mws-sidebar">
        <span class="caidan">授权管理菜单栏</span>
        <br></br>
            <div id="mws-navigation">
                <ul>
                    <!--<li>
                        <router-link to="main" class="mws-i-24 i-user-2">联盟信息</router-link>
                        <ul>
                            <li><router-link to="/BossInfo" >一级用户（公司老板）</router-link></li>
                            <li><router-link to="/ManagerInfo" >二级用户（部门经理）</router-link></li>
                            <li><router-link to="/StaffInfo" >三级用户（普通员工）</router-link></li>
                        </ul>
                    </li>-->
					<li>
                        <router-link to="myLoans" class="mws-i-24 i-user-2">授权管理</router-link>
                         <!--<ul>
                            <li><router-link to="/BossAuth" >终极管理员</router-link></li>
                            <li><router-link to="/ManagerAuth" >部门经理权限</router-link></li>
                            <li><router-link to="/StaffAuth" >普通员工权限</router-link></li>
                        </ul>-->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        components: {},

        data: function () {
            return {
                adminUrl: '/#!/main/admin',
                userUrl: '/#!/main/user'
            }
        }
    }
</script>


<style>
.caidan{
    color: #FFFFFF;
    margin:12px;
    font-size: 15px;
    border: 1px solid #FFFFFF;
    padding:8px 16px;
}

</style>