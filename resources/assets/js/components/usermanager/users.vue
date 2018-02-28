<template>
    <div>
        <el-row>
            <el-table
                    :data="tableData"
                    border
                    @sort-change="handleSortChange"
                    style="width: 100%">
                <el-table-column
                        prop="title"label="标题">
                </el-table-column>
                <el-table-column
                        prop="content"label="内容">
                </el-table-column>
                <el-table-column
                        prop="valid_time"
                        label="有效时间">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template scope="scope">
                        <a :href="editPage">
                            <el-button
                                    type="primary"
                                    size="small"
                                    @click="handleEdit(scope.$index, scope.row)">编辑
                            </el-button>
                        </a>

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
    import DataTable from 'datatables';
    export default {
        name: "users",
        data() {
            return {
                tableData: [],
                currentPage: 1,
                pageSize: 10,
                total: 20,
                prop: 'id',
                order: 'asc',
                editPage: '',
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

                this.getNotice();
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val;
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;
                this.getNotice();
            },
            handleEdit(index, row){
                this.editPage = "/notice/" + row.id + "/edit"
//                console.log(index, row);
//                console.log(this.editPage);
            },
            handleDelete(index, row){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    axios.delete('/notice/' + row.id, {
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    }).then((response) => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        console.log(response);
                        this.getNotice();
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            getNotice(){
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
                axios.post('/ajax/noticeindex', para)
                    .then((response) => {
                        console.log(response.data);
                        that.tableData = response.data.data;
                        that.total = response.data.recordsFiltered;
                        that.prop = response.data.prop;
                        that.order = response.data.order;
//                    this.tableData = response.data
                    })
            },
        },
        mounted(){
            var  that = this;
            this.getNotice();
            $('.datetimepicker').datetimepicker({
                format: 'yyyy-mm-dd hh:ii:ss',
                language: 'zh-CN',
                pickDate: true,
                pickTime: true,
                inputMask: true,
                autoclose: true,
                minView: 1
            })
//            var datafunc = function (data) {
//                data['filter'] = {
//                    'title': $('#title').val(),
//                    'content': $('#notice_content').val(),
//                    'valid_time_from': $('#valid_time_from').val(),
//                    'valid_time_to': $('#valid_time_to').val(),
//                };
//            console.log(data);
//                return data;
//            }
//            var noticeinfo = $("#noticeinfo").DataTable({
//                "ajax": function (data, callback, settings) {
////                    console.log(data);
//
//                    if (datafunc != undefined) {
//                        data = datafunc(data);
//                    }
//
//                    $.ajax({
//                        type: 'post',
//                        url: '/ajax/noticeindex',
//                        dataType: "json",
//                        data: data,
//                        bodyers: {
//                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//                        },
//                        success: function (result) {
////                            console.log(result);
//                            var dataset = callback(result);
//                        }
//                    });
//
//                },
//                "pageLength": 10,
//                "pagingType": "simple_numbers",
//                "serverSide": true,
//                "searching": false,
//                "ordering": true,
//                "lengthChange": false,
//                "bJQueryUI": false,
//                "language": {
//                    "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
//                    "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
//                    "sEmptyTable": "表中数据为空",
//                    "sInfoFiltered": "(全部记录数 _MAX_ 条)",
//                    "oPaginate": {
//                        "sFirst": "首页",
//                        "sPrevious": "上页",
//                        "sNext": "下页",
//                        "sLast": "末页"
//                    },
//                },
//                "columns": [
//                    {title: '标题', data: 'title'},
//                    {title: '内容', data: 'content'},
//                    {title: '有效时间', data: 'valid_time'},
//                    {
//                        title: '操作', data: 'id',
//                        render: function (data, type, full, meta) {
//                            return '<div style="float: left">' +
//                                '<a href="/notice/' + data + '/edit">' +
//                                '<button type="button" class="am-btn am-btn-default am-btn-xs am-text-secondary">' +
//                                '<span class="am-icon-pencil-square-o"></span> 编辑' +
//                                '</button>' +
//                                '</a>' +
//                                '</div>' +
//                                '<div style="float: left">' +
//                                '<form action="/notice/' + data + '" ' +
//                                'method="post">' +
//                                '<input type="hidden" name="_token" value="'+$('meta[name="csrf-token"]').attr('content')+'">' +
//                                '<input type="hidden" name="_method" value="delete">' +
//                                '<button  class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only">' +
//                                '<span class="am-icon-pencil-square-o"></span> 删除' +
//                                '</button>' +
//                                '</form>' +
//                                '</div>';
//                        }
//                    },
//                ],
//                "columnDefs": [{"orderable": false, "targets": [0,1]}],
//            });

            $('#sear_button').click(function () {
//                noticeinfo.ajax.reload();
                that.getNotice();
            })

        }
    }
</script>

<style scoped>

</style>