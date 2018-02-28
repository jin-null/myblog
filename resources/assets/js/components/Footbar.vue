<template>
    <el-footer>Footer</el-footer>
</template>

<script>
    export default {
        name: "footbar"
    }
</script>

<style scoped>
    .el-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        /* Set the fixed height of the footer here */
        height: 60px;
        background-color: #000;
    }
</style>