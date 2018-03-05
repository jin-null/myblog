<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
            <li v-for="menu in menus">
                <router-link :to="menu.uri">
                    <el-menu-item :index="menu.index">
                        <span :class="menu.icon"></span> {{ menu.label}}
                    </el-menu-item>
                </router-link>
            </li>
        </el-menu>
    </el-aside>
</template>

<script>

    import menus from './config/menu'

    export default {
        name: "sidebar",
        data() {
            return {
                menus: menus,
            }
        }
    }
</script>

<style scoped>

</style>