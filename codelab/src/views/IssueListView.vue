<template>
    <div class="IssueList">
        <el-row>
            <el-col :span="4" style="min-height:20px"></el-col>
            <el-col :span="16">
                <div class="IssueListTitle">
                    共有 {{this.issueNum}} 条Issue
                </div>
                <div class="content">
                    <div v-for="(issue, index) in curIssueList" :key="index" class="content-block">
                        <span @click="toIssue(issue.id)" class="content-text">#{{index+(pageIdx-1)*10+1}}：{{issue.title}}</span>
                    </div>
                </div>
                <div style="text-align: center">
                    <el-pagination layout="prev, pager, next, jumper"
                                 background
                                 :current-page="pageIdx"
                                 :page-size="size"
                                 :total="issueNum"
                                 @size-change="handleSizeChange"
                                 @current-change="handleCurrentChange"
                                 >
                    </el-pagination>
                </div>
            </el-col>
            <el-col :span="4" style="min-height:20px"></el-col>
        </el-row>
    </div>
</template>
<script>
import qs from "qs"
export default {
    data(){
        return{
            issueNum: 12,
            issueList:[
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
            ],
            pageIdx: 1,
            size:10,
            curIssueList:[
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
                {id:'1', title:'issue1'},
            ]
        }
    },
    mounted:function(){
        this.getIssueList()
    },
    methods:{
        getIssueList(){
            let program_id = this.$route.query.program
            this.$axios({
                url: '/getIssueListById',
                method: 'post',
                data: qs.stringify({
                    program_id: program_id
                })
            }).then(res=>{
                console.log(res)
                this.title=res.data.title
                this.issueList=res.data.issueList
                this.handleCurrentChange(1)
            })
        },
        handleCurrentChange(val){
            this.pageIdx=val
            this.curIssueList=[]
            console.log(this.pageIdx)
            for(var i=this.pageIdx*10-10; i<this.pageIdx*10 && i<this.issueList.length; i++){
                this.curIssueList.push(this.issueList[i])
            }
        },
        toIssue(id){
            let routeUrl = this.$router.resolve({
                path: '/Issue',
                query: {issueId: id, program: this.$route.query.program}
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