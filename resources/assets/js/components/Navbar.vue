<template>
    <el-header style="text-align: right; font-size: 12px">
        <el-col :span="23" class="userinfo">
            <el-dropdown trigger="hover">
                <span class="el-dropdown-link userinfo-inner">{{user.name}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的消息</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-header>
</template>

<script>
    export default {
        name: "navbar",
        data(){
            return {
                user:[],
            };
        },
        methods: {
            logout() {
                this.$confirm('是否退出?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    axios.post('/admin/logout', {
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    }).then((response) => {
                        this.$message({
                            type: 'success',
                            message: '退出成功!'
                        });
                        location.reload();
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消退出'
                    });
                });
            },
            getUserInfo(){
                axios.post('/admin/getuser', {
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                }).then((response)=>{
                    this.user=response.data;
                })
            },
        },
        mounted(){
            this.getUserInfo();
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: #2F4050;
        color: #333;
        line-height: 60px;
    }

    .el-dropdown {
        color: white;
    }
</style>