<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
            <el-menu-item index="1">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                <span slot="title">
                                <router-link to="/test">用户管理</router-link></span>
            </el-menu-item>
            <el-menu-item index="2">
                <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                <span slot="title">内容管理</span>
            </el-menu-item>
            <el-menu-item index="4">
                <span class="glyphicon glyphicon-sunglasses" aria-hidden="true"></span>
                <span slot="title">网站管理</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "sidebar"
    }
</script>

<style scoped>

</style>