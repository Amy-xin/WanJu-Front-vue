<template>
    <div>
    <header-comp></header-comp>

    <div id="mws-wrapper">
        <side-menu></side-menu>

        <div id="mws-container" class="clearfix">
            <router-view></router-view>

            <footer-comp></footer-comp>

        </div>
    </div>
    </div>
</template>

<script>
    var vue = require('vue');
    var vueResource = require('vue-resource');
    var router = require('vue-router');

    export default {
        name: 'back',
        data: function(){
            this.$router.push('/myLoans');
            return {
            }
        }
    }
</script>

<style>
</style>
