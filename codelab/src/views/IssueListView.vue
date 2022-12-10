<template>
    <div class="IssueList">
        <el-row>
            <el-col :span="4" style="min-height:20px"></el-col>
            <el-col :span="16">
                <div class="IssueListTitle">
                    共有 {{this.issueNum}} 条Issue
                </div>
                <div class="content">
                    <div v-for="(issue, index) in issueList" :key="index" class="content-block">
                        <span @click="toIssue(issue.id)" class="content-text">#{{index+1}}：{{issue.title}}</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="4" style="min-height:20px"></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            issueNum: 6,
            issueList:[
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
            ]
        }
    },
    methods:{
        created(){

        },
        toIssue(id){
            let routeUrl = this.$router.resolve({
                path: '/Issue',
                query: {issueId: id}
            });
            window.open(routeUrl.href, "_blank");
        }
    }
}
</script>
<style>
.IssueList{
    text-align: left;
}
.IssueList .IssueListTitle{
    font-family: Tahoma,fantasy;
    text-align: left;
    padding-top: 50px;
    padding-left: 20px;
    font-weight: bold;
    font-size: 28px;
    /* line-height: 40px; */
    color: #353535;
}
.IssueList .content-block{
    font-family: Georgia, fantasy;
    min-height: 40px;
    background-color: white;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px; 
    padding-left: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .04);
    font-size: 20px;
}
.IssueList .content-text{
    padding: 10px;
}
.IssueList .content-text:hover{
  color: #0191cf;
  cursor: pointer;
}
</style>