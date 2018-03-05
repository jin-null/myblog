<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
                <li  v-for="menu in menus" v-if="menu.children">
                    <el-submenu :index="menu.index">
                        <template slot="title">
                            <span :class="menu.icon">{{menu.label}}</span>
                        </template>
                        <ul v-for="child in menu.children" :key="child.index" style="padding-left:0px ">
                            <router-link :to="child.uri">
                                <el-menu-item :index="child.index">
                                    <span :class="child.icon"></span> {{child.label}}
                                </el-menu-item>
                            </router-link>
                        </ul>
                    </el-submenu>
                </li>
                <li v-else>
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