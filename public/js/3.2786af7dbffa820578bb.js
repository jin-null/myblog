webpackJsonp([3],{

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(226)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(228)
/* template */
var __vue_template__ = __webpack_require__(229)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d1d01810"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\content\\Category.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d1d01810", Component.options)
  } else {
    hotAPI.reload("data-v-d1d01810", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(227);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(33)("7a0c299a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1d01810\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./Category.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1d01810\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./Category.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "category",
    data: function data() {
        return {
            tableData: [],
            multipleSelection: [],
            form: {
                name: '',
                region: ''
            },
            currentPage: 1,
            pageSize: 10,
            total: 20,
            prop: 'id',
            order: 'asc',
            dialogFormVisible: false
        };
    },

    methods: {
        handleSortChange: function handleSortChange(val) {
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
        handleSizeChange: function handleSizeChange(val) {
            console.log('\u6BCF\u9875 ' + val + ' \u6761');
            this.pageSize = val;
        },
        handleCurrentChange: function handleCurrentChange(val) {
            console.log('\u5F53\u524D\u9875: ' + val);
            this.currentPage = val;
            this.getdatas();
        },
        handleEdit: function handleEdit(index, row) {

            this.dialogFormVisible = ture;
            console.log(index, row);
            //                console.log(this.editPage);
        },
        handleDelete: function handleDelete(index, row) {
            var _this = this;

            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {

                axios.delete('/notice/' + row.id, {
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                }).then(function (response) {
                    _this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    console.log(response);
                    _this.getdatas();
                });
            }).catch(function () {
                _this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        toggleSelection: function toggleSelection(rows) {
            var _this2 = this;

            if (rows) {
                rows.forEach(function (row) {
                    _this2.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange: function handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        getdatas: function getdatas() {
            var _this3 = this;

            var that = this;
            var para = {
                length: that.pageSize,
                start: (that.currentPage - 1) * that.pageSize,
                prop: that.prop,
                order: that.order,
                title: $('#title').val(),
                content: $('#notice_content').val(),
                valid_time_from: $('#valid_time_from').val(),
                valid_time_to: $('#valid_time_to').val()
            };
            //                this.$http.post('/ajax/userindexinfo',JSON.stringify( para), {emulateJSON: true})
            axios.post('/admin/categories', para).then(function (response) {
                console.log(response.data);
                that.tableData = response.data.data;
                that.total = response.data.recordsFiltered;
                that.prop = response.data.prop;
                that.order = response.data.order;
                _this3.tableData = response.data.data;
            });
        }
    },
    mounted: function mounted() {
        var that = this;
        this.getdatas();

        $('#sear_button').click(function () {
            //                noticeinfo.ajax.reload();
            that.getdatas();
        });
    }
});

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-row",
        [
          _c(
            "el-table",
            {
              ref: "multipleTable",
              staticStyle: { width: "100%" },
              attrs: { data: _vm.tableData, "tooltip-effect": "dark" },
              on: { "selection-change": _vm.handleSelectionChange }
            },
            [
              _c("el-table-column", {
                attrs: { type: "selection", width: "55" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "id", label: "id", width: "120" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [_vm._v(_vm._s(scope.row.id))]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "name", label: "名称", width: "120" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [_vm._v(_vm._s(scope.row.name))]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "description", label: "描述", width: "220" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [_vm._v(_vm._s(scope.row.description))]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "管理" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "primary", size: "small" },
                            on: {
                              click: function($event) {
                                _vm.handleEdit(scope.$index, scope.row)
                              }
                            }
                          },
                          [_vm._v("编辑\n                    ")]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-row",
        [
          _c(
            "el-dialog",
            {
              attrs: { title: "收货地址", visible: _vm.dialogFormVisible },
              on: {
                "update:visible": function($event) {
                  _vm.dialogFormVisible = $event
                }
              }
            },
            [
              _c(
                "el-form",
                { attrs: { model: _vm.form } },
                [
                  _c(
                    "el-form-item",
                    { attrs: { label: "活动名称", "label-width": "120px" } },
                    [
                      _c("el-input", {
                        attrs: { "auto-complete": "off" },
                        model: {
                          value: _vm.form.name,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "活动区域", "label-width": "120px" } },
                    [
                      _c(
                        "el-select",
                        {
                          attrs: { placeholder: "请选择活动区域" },
                          model: {
                            value: _vm.form.region,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "region", $$v)
                            },
                            expression: "form.region"
                          }
                        },
                        [
                          _c("el-option", {
                            attrs: { label: "区域一", value: "shanghai" }
                          }),
                          _vm._v(" "),
                          _c("el-option", {
                            attrs: { label: "区域二", value: "beijing" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "dialog-footer",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "el-button",
                    {
                      on: {
                        click: function($event) {
                          _vm.dialogFormVisible = false
                        }
                      }
                    },
                    [_vm._v("取 消")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          _vm.dialogFormVisible = false
                        }
                      }
                    },
                    [_vm._v("确 定")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-row",
        [
          _c("el-pagination", {
            attrs: {
              "current-page": _vm.currentPage,
              "page-size": _vm.pageSize,
              layout: "total, prev, pager, next, jumper",
              total: _vm.total
            },
            on: {
              "size-change": _vm.handleSizeChange,
              "current-change": _vm.handleCurrentChange
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-d1d01810", module.exports)
  }
}

/***/ })

});