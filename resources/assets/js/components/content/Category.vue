<template>
    <div>
        <el-row>
            <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="id"
                        width="120">
                    <template slot-scope="scope">{{ scope.row.id }}</template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="名称"
                        width="120">
                    <template slot-scope="scope">{{scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                        prop="description"
                        label="描述"
                        width="220">
                    <template slot-scope="scope">{{ scope.row.description }}</template>
                </el-table-column>
                <el-table-column
                        label="管理">
                    <template slot-scope="scope">
                        <el-button
                                type="primary"
                                size="small"
                                @click="handleEdit(scope.$index, scope.row)">编辑
                        </el-button>

                        <!--<el-button-->
                                <!--size="small"-->
                                <!--type="danger"-->
                                <!--@click="handleDelete(scope.$index, scope.row)">删除-->
                        <!--</el-button>-->
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="30%">
                <el-form :model="form">
                    <el-input v-model="form.id" auto-complete="off" hidden></el-input>
                    <el-form-item label="栏目名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" auto-complete="off" :label-width="formLabelWidth"></el-input>
                    </el-form-item>
                    <el-form-item label="栏目描述" :label-width="formLabelWidth">
                        <el-input v-model="form.description" auto-complete="off"
                                  :label-width="formLabelWidth"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="editSubmit">确 定</el-button>
                </div>
            </el-dialog>
        </el-row>

        <el-row>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    layout="total, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "category",
        data() {
            return {
                tableData: [],
                multipleSelection: [],
                form: {
                    id: '',
                    name: '',
                    description: '',
                },
                formLabelWidth: '120px',
                currentPage: 1,
                pageSize: 10,
                total: 20,
                prop: 'id',
                order: 'asc',
                dialogFormVisible: false,
            };
        },
        methods: {
            handleSortChange(val) {
//                console.log("sort change");
//                console.log(val.column);
                console.log(val.prop);
                console.log(val.order);

                this.prop = val.prop;
                this.order = val.order;

                if (val.prop == null) {
                    this.order = 0;
                } else if (val.order == "descending") {
                    this.order = "desc";
                } else {
                    this.order = "asc";
                }

                this.getdatas();
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val;
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;
                this.getdatas();
            },
            handleEdit(index, row) {

                this.dialogFormVisible = true;
                this.form = {
                    id: row.id,
                    name: row.name,
                    description: row.description,
                };
                // console.log(index, row);
//                console.log(this.editPage);
            },
            editSubmit() {
                console.log(this.form);
                axios.post('/admin/categories/' + this.form.id, this.form).then((response) => {
                    console.log(response.data);
                    this.dialogFormVisible = false;
                    this.$message({
                        type: response.data.type,
                        message: response.data.message,
                    });
                    this.getdatas();
                })
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    axios.delete('/admin/categories/' + row.id, {
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    }).then((response) => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        console.log(response);
                        this.getdatas();
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            getdatas() {
                let that = this;
                let para = {
                    length: that.pageSize,
                    start: (that.currentPage - 1) * that.pageSize,
                    prop: that.prop,
                    order: that.order,
                    title: $('#title').val(),
                    content: $('#notice_content').val(),
                    valid_time_from: $('#valid_time_from').val(),
                    valid_time_to: $('#valid_time_to').val(),
                };
//                this.$http.post('/ajax/userindexinfo',JSON.stringify( para), {emulateJSON: true})
                axios.post('/admin/categories', para)
                    .then((response) => {
                        console.log(response.data);
                        that.tableData = response.data.data;
                        that.total = response.data.recordsFiltered;
                        that.prop = response.data.prop;
                        that.order = response.data.order;
                        this.tableData = response.data.data
                    })
            },
        },
        mounted() {
            var that = this;
            this.getdatas();

            $('#sear_button').click(function () {
//                noticeinfo.ajax.reload();
                that.getdatas();
            })

        }
    }
</script>

<style scoped>

</style>