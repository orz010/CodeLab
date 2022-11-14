<template>
  <div>
    <el-input placeholder="请输入内容"
            v-model="searchValue"
            class="inputbox"
            @keyup.enter.native="goSearch"
            style="width: 750px; font-size: 17px"
          >
            <el-select v-model="selectValue" slot="prepend"  placeholder="主要语言" style="width: 130px" >
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="goSearch"></el-button>
          </el-input>
  </div>
    
</template>
<script>
export default {
    name: "searchBox",
    props: {
      options: [],

    },
    data(){
        return{
            searchValue: '',
            selectValue: '',
        }
    },
    goSearch(){
        if (this.searchValue === '') {
            this.$message.warning("请输入检索词！");
            return;
        }
    },

}
</script>
<style scoped>
.el-input.is-active .el-input__inner, .el-input__inner:focus {
  border: 5px solid #48a1fa;
}
.el-input__inner {
  height: 50px;
}
.el-input-group__append {
  background-color: #48a1fa;
  color: white;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  border: none;
  border-radius: 0 25px 25px 0;
  padding: 0 20px;
  width: 1px;
  white-space: nowrap;
}
.el-input-group__append:hover {
  background-color: #2d93f8;
}
.el-input-group__prepend {
  border-radius: 25px 0 0 25px;
}
</style>