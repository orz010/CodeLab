<template>
  <div class="programs">
      <div class="searchbox">
            <SearchBox :options="option"/>
        </div>
      <el-row>
          <el-col :span="6">
              <div class="aside"></div>
          </el-col>
          <el-col :span="12" class="program-list">
            <el-empty v-if="programs.length==0" description="没有搜索到结果，试试别的关键词吧"></el-empty>
            <div class="programs-body" style="text-align: left" v-else>
                <div v-for="(program, index) in this.programs" v-bind:key="index" class="program-item">
                    <div style="margin-bottom: 10px">
                        <span class="program-title" @click="gotoProgram(program.id)">{{program.repo_name}}</span>
                    </div>

                    <div class="citation-count">
                    <span>{{ program.stargazers_count }}&nbsp;star</span>
                    <span>&nbsp;·&nbsp;{{ program.forks_count }}&nbsp;fork</span>
                    </div>
                    <div class="citation-count">
                    <span>{{program.language}}</span>
                    </div>

                    <el-divider v-if="index<programs.length-1"></el-divider>
                </div>
            </div>
          </el-col>
          <el-col :span="6">
              <div class="aside">  </div>
          </el-col>
      </el-row>
    
  </div>
</template>

<script>
import SearchBox from '../components/searchBox.vue'
import qs from 'qs'
export default {
    components: {
        SearchBox,
    },
    data(){
        return{
            programs:[],
            option: [
                {
                value: '1',
                label: 'C'
                }, {
                value: '2',
                label: 'C++'
                }, {
                value: '3',
                label: 'Java'
                }, {
                value: '4',
                label: 'Python'
                }, {
                value: '5',
                label: 'JavaScript'
                }, {
                value: '6',
                label: 'Ada'
                }, {
                value: '7',
                label: 'rust'
                },
            ],

        }
    },
  methods: {
    gotoProgram(program_id) {
      let routeUrl = this.$router.resolve({
            path: '/Detail',
            query: { program: program_id }
        });
        window.open(routeUrl.href, "_blank");
    },
    getProgram(){
        let name = this.$route.query.search

        this.$axios({
            url: '/crawler/getProgramByName/',
            method: 'post',
            data: qs.stringify({
                name: name
            })
        }).then(res=>{
            console.log(res)
            if(!res.data.info||res.data.info.length==0) this.programs=[]
            else this.programs=res.data.info
        })
    },
    created(){
        this.getProgram()
    },
  },
  mounted:function(){
      this.getProgram();
  }
//   filters: {
//     ellipsis: function(value) {
//       if (!value) return "";
//       if (value.length > 300) {
//         return value.slice(0,300) + "...";
//       }
//       return value;
//     },
//   }
}
</script>

<style scoped>
.searchbox{
    margin-top: 20px;
}

.program-title {
    font-size: 25px;
    cursor: pointer;
    font-family: Tahoma,fantasy;
}
.el-col{
    
}
.program-list{
    margin: 30px;
}

.aside{
    min-height: 20px;
}
.programs{
    min-height: 100vh;
}
.programs-body{
    background-color: white;
    min-height: 20px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .04);
}
.program-item{
    padding-left: 15px;
}
.abstract {
    cursor: pointer;
    font-family: Georgia, Lato-Regular,Lato,sans-serif;
    font-size: 15px;
    line-height: 22px;
    color: #262625;
}

.citation-count {
    margin-top: 10px;
    font-family: "Trebuchet MS", fantasy;
    font-size: 15px;
    font-weight: 400;
    color: #73716f;
    line-height: 22px;
}

.publish-year {
    color:grey;
    font-size: 14px;
}

.author-affiliation {
    color:grey;
    font-size: 14px;
}

.headerMessage{
    display: flex;
    padding: 10px;
    font-size: 30px;
    color: rgb(255, 255, 255);
    background-color: #0c0c0c;
    width: 100%;
}
html{
    -webkit-text-size-adjust: 100%;
}
</style>