var constants = require('../constants');
var ajaxUtils = require('../utils/ajaxUtils.js');
var ajax = require('../utils/ajax.js');

module.exports = {
    loginWatch: function (username, password) {
        const url=constants.LOCALHOST+'/play/findUserLoginByName';
        let data = {"userName": username};
        //let matchedUser;
        return ajax.call({
            url: url,
            data: JSON.stringify(data),
            login:true,
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            method: 'POST'}).then(response => {
                return response;
            });
    },

    testByNameAndPwd1:function(username, password){
        let isTrue = false;
        return this.loginWatch(username, password)
        .then(response =>{
            if(response["userInfo"]["userName"] === username && response["userInfo"]["userPwd"] === password&& response["userInfo"]["position"] =="经理"){
                isTrue = true;
                return  isTrue;
            }
            return  isTrue;
        })
    },
    testByNameAndPwd2:function(username, password){
        let isTrue = false;
        return this.loginWatch(username, password)
        .then(response =>{
            if(response["userInfo"]["userName"] === username && response["userInfo"]["userPwd"] === password&& response["userInfo"]["position"] =="老板"){
                isTrue = true;
                return  isTrue;
            }
            return  isTrue;
        })
    },

    login: function (username, password) {
        let data = {name: username, password: password},
            matchedUser;
        return this.loginWatch(username, password)
        .then(response =>{
            if(response["userInfo"]["userName"] === username && response["userInfo"]["userPwd"] === password){
                delete response["userInfo"]["userPwd"]
                localStorage.setItem(constants.USERINFO, JSON.stringify(response));
                const url=constants.LOCALHOST+'/login';
                let data = {"userName": username};
                return ajax.call({
                    url: url,
                    data: JSON.stringify(data),
                    login:true,
                    dataType: "json",
                    contentType: "application/json; charset=UTF-8",
                    method: 'POST'}).then(token => {
                        sessionStorage.setItem(constants.AUTHORIZATION, JSON.stringify(token));
                        return token;
                    });
            }
        })
    },

    register: function(username, secret) {
        let urlConfig = global.urlConfig;
        let data = {
            "enrollId": username,
            "enrollSecret": secret
        };
        return ajaxUtils.call({
            url: urlConfig.server_url + '-' + urlConfig.block_chain + '/' + urlConfig.registrar,
            data: JSON.stringify(data),
            type: 'POST'});
        return true;
    },

    checkIsLogin: function () {
        var loginUserJson = localStorage.getItem(constants.SESSION_KEY);
        if (!loginUserJson) return false;
        var loginUser = loginUser = JSON.parse(loginUserJson),
            currentTime = new Date().getTime();
        if (currentTime - loginUser.loginTime > constants.SESSION_TIMEOUT) {
            return false;
        }
        this.freshLogin(loginUser);
        return true;
    },

    freshLogin: function(loginUser) {
        loginUser.loginTime = new Date().getTime();
        localStorage.setItem(constants.SESSION_KEY, JSON.stringify(loginUser));
    },

    logout: function () {
        sessionStorage.removeItem(constants.AUTHORIZATION);
    }
};