<template>
    <div class="IssueView">
        <el-row>
            <el-col :span="4" style="min-height:20px"></el-col>
            <el-col :span="16">
                <div class="Title">
                    {{this.title}}
                </div>
                <div class="sub-info">
                    <span class="sub-author">{{this.author}}&nbsp;&nbsp;&nbsp;<span class="sub-date">{{this.time | dateFormat}}</span></span>
                </div>
                <div class='sub-info' v-if="content.length!=0"><span class="content">{{this.content}}</span></div>
                <el-empty description="暂无内容" v-else></el-empty>
                <div class="content">
                    <div v-for="(comment, index) in List" :key="index" class="content-block">
                        <div class="author"><span>{{comment.author}}</span>&nbsp;
                        <span class="time">{{comment.time | dateFormat}}</span></div>
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
            author: '',
            time: '',
            content: '',
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
            let loading = this.$loading({fullscreen: true, text: '拼命加载中...'})
            let issue_id = this.$route.query.issueId
            let program_id = this.$route.query.program
            this.$axios({
                url: '/contents/getIssueById',
                method: 'post',
                data: qs.stringify({
                    issue_id: issue_id,
                    program_id: program_id
                })
            }).then(res=>{
                loading.close()
                console.log(res)
                this.title=res.data.title
                this.author=res.data.author
                this.content=res.data.content
                this.time=res.data.time
                this.List=res.data.comments
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
    font-family: Tahoma,fantasy;
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
.sub-info{
    margin-top: 10px;
    padding-left: 20px;
    padding-bottom: 10px;
}
.sub-author{
    font-size: 17px;
}
.sub-date{
    font-size: 15px;
    color: #909eb4; 
}
.sub-content{
    font-size: 17px;
}
</style>