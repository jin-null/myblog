<template>
    <div>
        <el-container style="height: 100%; border: 1px solid #eee">
            <Navbar></Navbar>
            <el-container>
                <Sidebar></Sidebar>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
            <el-footer>Footer</el-footer>
        </el-container>

    </div>
</template>

<script>
    import Navbar from './components/Navbar';
    import Sidebar from './components/Sidebar';
    export default {
        components:{
            Navbar,
            Sidebar,
        },
        data() {
            return {}
        }
    };
</script>

<style>

    .el-aside {
        color: #333;
    }

    .el-footer {
        position: absolute;
        bottom: 0;
        width: 99.9%;
        /* Set the fixed height of the footer here */
        height: 60px;
        background-color: #000;
    }
</style>