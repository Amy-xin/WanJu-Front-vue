var constants = require('../constants');
var ajaxUtils = require('../utils/ajaxUtils.js');
var ajax = require('../utils/ajax.js');

module.exports = {
    getAuthInfo: function () {
        const url=constants.LOCALHOST+'/play/findUserLoginAll';
        return ajax.call({
            url: url,
            login:true,
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            method: 'GET'}).then(response => {
                return response;
            });
    },
    getAuthInfoNotBoss: function () {
        const url=constants.LOCALHOST+'/play/findUserLoginNotBoss';
        return ajax.call({
            url: url,
            login:true,
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            method: 'GET'}).then(response => {
                return response;
            });
    },
    getAuthInfoStaff: function () {
        const url=constants.LOCALHOST+'/play/findUserLoginStaff';
        return ajax.call({
            url: url,
            login:true,
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            method: 'GET'}).then(response => {
                return response;
            });
    },
    addAuthInfo: function (username, password,position,rank) {
        const url=constants.LOCALHOST+'/play/addUserLogin';
        let data = {"userName": username,"userPwd":password,"position":position,"rank":rank};
        //let matchedUser;
        return ajax.call({
            url: url,
            data: JSON.stringify(data),
            login:true,
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            method: 'POST'}).then(response =>{
                return response;
            });
    },
    updateAuthInfo: function (username,rank) {
        const url=constants.LOCALHOST+'/play/updateUserLogin';
        let data = {"userName": username,"newRank":rank};
        //let matchedUser;
        return ajax.call({
            url: url,
            data: JSON.stringify(data),
            login:true,
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            method: 'POST'}).then(response =>{
                return response;
            });
    },
    deleteAuthInfo: function (username,rank) {
        const url=constants.LOCALHOST+'/play/deleteUserLogin';
        let data = {"userName": username};
        //let matchedUser;
        return ajax.call({
            url: url,
            data: JSON.stringify(data),
            login:true,
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            method: 'POST'}).then(response =>{
                return response;
            });
    },
    signUp: function (username, password,position,rank) {
        const url=constants.LOCALHOST+'/play/addUserSign';
        let data = {"userName": username,"userPwd":password,"position":position};
        return ajax.call({
            url: url,
            data: JSON.stringify(data),
            login:true,
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            method: 'POST'}).then(response =>{
                return response;
            });
    }
}