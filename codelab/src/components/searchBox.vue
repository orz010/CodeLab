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
            <el-button slot="append" icon="el-icon-search" @click="goSearch()"></el-button>
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
            searchValue: this.$store.getters.getSearchValue,
            selectValue: this.$store.getters.getSelectValue,
        }
    },
    methods:{
      goSearch(){
        if (this.searchValue === '') {
            this.$message.warning("请输入检索词！");
            return;
        }
        this.$store.commit('setSearchValue',this.searchValue);
        this.$store.commit('setSelectValue',this.selectValue);
        // console.log(this.$store.getters.getSearchValue)
      
        let routeUrl = this.$router.resolve({
          path: '/list',
          query: { search: this.searchValue }
        });
        window.open(routeUrl.href, "_blank");
      },
      
    },
    mutations:{
      // getSearchValue(){
      //   this.searchValue=this.$store.getters.getSearchValue;
      // },
    }

}
</script>
<style scoped>
.inputbox >>> .el-input.is-active .el-input__inner, .el-input__inner:focus {
  border: 5px solid #48a1fa;
}
.inputbox >>> .el-input__inner {
  height: 50px;
}
.inputbox >>> .el-input-group__append {
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
.inputbox >>> .el-input-group__append:hover {
  background-color: #2d93f8;
}
.inputbox >>> .el-input-group__prepend {
  border-radius: 25px 0 0 25px;
}
</style>