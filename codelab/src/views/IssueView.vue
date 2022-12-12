<template>
    <div class="IssueView">
        <el-row>
            <el-col :span="4" style="min-height:20px"></el-col>
            <el-col :span="16">
                <div class="Title">
                    {{this.title}}
                </div>
                <div class="content">
                    <div v-for="(comment, index) in List" :key="index" class="content-block">
                        <div class="author"><span>{{comment.author}}</span>&nbsp;
                        <span class="time">{{comment.time}}</span></div>
                        <div class="content-text">{{comment.content}}</div>
                    </div>
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
            title: 'issue1',
            List:[
                {author:'Adams Smith', content:'I find a issue', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a issue', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a issue', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a issue', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a issue', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a issue', time:'2022-11-28'},
            ]
        }
    },
    mounted:function(){
        this.getIssue()
    },
    methods:{
        getIssue(){
            let issue_id = this.$route.query.issueId
            let program_id = this.$route.query.program
            this.$axios({
                url: '/getIssueById',
                method: 'post',
                data: qs.stringify({
                    issue_id: issue_id,
                    program_id: program_id
                })
            }).then(res=>{
                console.log(res)
                this.title=res.data.title
                this.List=res.data.List
            })
        },
    }
}
</script>
<style>
.IssueView{
    text-align: left;
}
.IssueView .Title{
    font-family: Tahoma,fantasy;
    text-align: left;
    padding-top: 50px;
    padding-left: 20px;
    font-weight: bold;
    font-size: 28px;
    /* line-height: 40px; */
    color: #353535;
}
.IssueView .content-block{
    min-height: 40px;
    background-color: white;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px; 
    padding-left: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .04);
    font-size: 20px;
}
.IssueView .content-text{
    font-family: Georgia, fantasy;
    padding-left: 20px;
    padding-bottom: 10px;
}
.IssueView .author{
    padding: 20px;
}
.IssueView .time{
    font-size: 15px;
    color: #909eb4;
}
</style>