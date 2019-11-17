webpackJsonp([11],{CzuH:function(t,e){},oHd1:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"addProductAttr",components:{ProductAttrDetail:r("qYud").a}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("product-attr-detail",{attrs:{"is-edit":!1}})},staticRenderFns:[]};var u=r("VU/8")(a,o,!1,function(t){r("CzuH")},"data-v-2a513176",null);e.default=u.exports},qYud:function(t,e,r){"use strict";var a=r("woOf"),o=r.n(a),u=r("KhLR"),l=r("3idm"),i={filterType:0,handAddStatus:0,inputList:"",inputType:0,name:"",productAttributeCategoryId:0,relatedStatus:0,searchType:0,selectType:0,sort:0,type:0},s={name:"ProductAttrDetail",props:{isEdit:{type:Boolean,default:!1}},data:function(){return{productAttr:o()({},i),rules:{name:[{required:!0,message:"请输入属性名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}]},productAttrCateList:null,inputListFormat:null}},created:function(){var t=this;this.isEdit?Object(l.d)(this.$route.query.id).then(function(e){t.productAttr=e.data,t.inputListFormat=t.productAttr.inputList.replace(/,/g,"\n")}):this.resetProductAttr(),this.getCateList()},watch:{inputListFormat:function(t,e){t=t.replace(/\n/g,","),this.productAttr.inputList=t}},methods:{getCateList:function(){var t=this;Object(u.c)({pageNum:1,pageSize:100}).then(function(e){t.productAttrCateList=e.data.list})},resetProductAttr:function(){this.productAttr=o()({},i),this.productAttr.productAttributeCategoryId=Number(this.$route.query.cid),this.productAttr.type=Number(this.$route.query.type)},onSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return e.$message({message:"验证失败",type:"error",duration:1e3}),!1;e.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.isEdit?Object(l.f)(e.$route.query.id,e.productAttr).then(function(t){e.$message({message:"修改成功",type:"success",duration:1e3}),e.$router.back()}):Object(l.a)(e.productAttr).then(function(t){e.$message({message:"提交成功",type:"success",duration:1e3}),e.resetForm("productAttrFrom")})})})},resetForm:function(t){this.$refs[t].resetFields(),this.resetProductAttr()}}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[r("el-form",{ref:"productAttrFrom",attrs:{model:t.productAttr,rules:t.rules,"label-width":"150px"}},[r("el-form-item",{attrs:{label:"属性名称：",prop:"name"}},[r("el-input",{model:{value:t.productAttr.name,callback:function(e){t.$set(t.productAttr,"name",e)},expression:"productAttr.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"商品类型："}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.productAttr.productAttributeCategoryId,callback:function(e){t.$set(t.productAttr,"productAttributeCategoryId",e)},expression:"productAttr.productAttributeCategoryId"}},t._l(t.productAttrCateList,function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"分类筛选样式:"}},[r("el-radio-group",{model:{value:t.productAttr.filterType,callback:function(e){t.$set(t.productAttr,"filterType",e)},expression:"productAttr.filterType"}},[r("el-radio",{attrs:{label:0}},[t._v("普通")]),t._v(" "),r("el-radio",{attrs:{label:1}},[t._v("颜色")])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"能否进行检索:"}},[r("el-radio-group",{model:{value:t.productAttr.searchType,callback:function(e){t.$set(t.productAttr,"searchType",e)},expression:"productAttr.searchType"}},[r("el-radio",{attrs:{label:0}},[t._v("不需要检索")]),t._v(" "),r("el-radio",{attrs:{label:1}},[t._v("关键字检索")]),t._v(" "),r("el-radio",{attrs:{label:2}},[t._v("范围检索")])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"商品属性关联:"}},[r("el-radio-group",{model:{value:t.productAttr.relatedStatus,callback:function(e){t.$set(t.productAttr,"relatedStatus",e)},expression:"productAttr.relatedStatus"}},[r("el-radio",{attrs:{label:1}},[t._v("是")]),t._v(" "),r("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"属性是否可选:"}},[r("el-radio-group",{model:{value:t.productAttr.selectType,callback:function(e){t.$set(t.productAttr,"selectType",e)},expression:"productAttr.selectType"}},[r("el-radio",{attrs:{label:0}},[t._v("唯一")]),t._v(" "),r("el-radio",{attrs:{label:1}},[t._v("单选")]),t._v(" "),r("el-radio",{attrs:{label:2}},[t._v("复选")])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"属性值的录入方式:"}},[r("el-radio-group",{model:{value:t.productAttr.inputType,callback:function(e){t.$set(t.productAttr,"inputType",e)},expression:"productAttr.inputType"}},[r("el-radio",{attrs:{label:0}},[t._v("手工录入")]),t._v(" "),r("el-radio",{attrs:{label:1}},[t._v("从下面列表中选择")])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"属性值可选值列表:"}},[r("el-input",{attrs:{autosize:!0,type:"textarea"},model:{value:t.inputListFormat,callback:function(e){t.inputListFormat=e},expression:"inputListFormat"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"是否支持手动新增:"}},[r("el-radio-group",{model:{value:t.productAttr.handAddStatus,callback:function(e){t.$set(t.productAttr,"handAddStatus",e)},expression:"productAttr.handAddStatus"}},[r("el-radio",{attrs:{label:1}},[t._v("是")]),t._v(" "),r("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"排序属性："}},[r("el-input",{model:{value:t.productAttr.sort,callback:function(e){t.$set(t.productAttr,"sort",e)},expression:"productAttr.sort"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("productAttrFrom")}}},[t._v("提交")]),t._v(" "),t.isEdit?t._e():r("el-button",{on:{click:function(e){return t.resetForm("productAttrFrom")}}},[t._v("重置")])],1)],1)],1)},staticRenderFns:[]};var c=r("VU/8")(s,n,!1,function(t){r("z6Jw")},"data-v-1ca79d5f",null);e.a=c.exports},z6Jw:function(t,e){}});
//# sourceMappingURL=11.7c643b95106a0c33af33.js.map