<template>
    <div class="DetailView">
        <el-row>
            <el-col :span="4" style="min-height:20px"></el-col>
            <el-col :span="16">
                <div class="primary-information">
                    <div class="title">
                        {{this.info.title}}
                    </div>
                    <div class="contributer">
                        <span v-for="(author, index) in this.contributerList" :key="index">
                            {{author.name}}&nbsp;&nbsp;
                        </span>
                    </div>
                    <div class="information">
                        star：{{this.info.star}}
                    </div>
                    <div class="information">
                        fork：{{this.info.fork}}
                    </div>
                    <div class="information">
                        上次更新时间：{{this.info.time}}
                    </div>
                </div>
            </el-col>
            <el-col :span="4" style="min-height:20px"></el-col>
        </el-row>
        <el-row>
            <el-col :span="4" style="min-height:20px"></el-col>
            <el-col :span="16">
                <div class="junior-information">
                    <div class="junior-block">
                        <el-collapse v-model="repo">
                            <el-collapse-item title="代码库下载" name="1">
                                <div>ssh：{{this.info.ssh}}</div>
                                <div>http：{{this.info.http}}</div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    <div class="junior-block">
                        <el-collapse v-model="issue">
                            <el-collapse-item title="Issue" name="1">
                                <div v-for="(issue, index) in issueList" :key="index">
                                    <span @click="toIssue(issue.id)">{{issue.title}}</span>
                                </div>
                                <div v-if="this.issueList.length>5">
                                    <span @click="toIssueList()" class="_link">查看所有issue</span>
                                </div>
                                <div v-if="!this.issueList || this.issueList.length==0">暂无issue</div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    <div class="junior-block">
                        <el-collapse v-model="pr">
                            <el-collapse-item title="Pull Request" name="1">
                                <div v-for="(pr, index) in prList" :key="index">
                                    <span @click="toPr(pr.id)">{{pr.title}}</span>
                                </div>
                                <div v-if="this.prList.length>5">
                                    <span @click="toPrList()" class="_link">查看所有Pull Request</span>
                                </div>
                                <div v-if="!this.prList || this.prList.length==0">暂无Pull Request</div>
                            </el-collapse-item>
                        </el-collapse>
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
            info:{
                id:'',
                title:'CodeLab',
                star: 109,
                fork: 279,
                time: '2022-11-28',
                ssh: 'ssh@orz010.github.com',
                http: 'http@orz010.github.com'
            },
            contributerList:[
                {
                    AuthorUrl: 'www.baidu.com',
                    name: 'Adams Smith'
                },
                {
                    AuthorUrl: 'www.baidu.com',
                    name: 'Adams Smith'
                },
                {
                    AuthorUrl: 'www.baidu.com',
                    name: 'Adams Smith'
                }
            ],
            issueList:[
                {
                    title: 'issue1',
                    id: '1'
                },
                {
                    title: 'issue1',
                    id: '1'
                },
                {
                    title: 'issue1',
                    id: '1'
                },
                {
                    title: 'issue1',
                    id: '1'
                },
                {
                    title: 'issue1',
                    id: '1'
                },
                {
                    title: 'issue1',
                    id: '1'
                },
            ],
            prList:[
                {
                    title: 'Pr1',
                    id: '1'
                },
                {
                    title: 'Pr1',
                    id: '1'
                },
                {
                    title: 'Pr1',
                    id: '1'
                },
                {
                    title: 'Pr1',
                    id: '1'
                },
                {
                    title: 'Pr1',
                    id: '1'
                },
                {
                    title: 'Pr1',
                    id: '1'
                },
            ],
            repo:['1'],
            issue:['1'],
            pr:['1'],
        }
    },
    mounted:function(){
        this.getDetail()
    },
    methods:{
        getDetail(){
            let program_id = this.$route.query.program
            this.$axios({
                url: '/getDetailById',
                method: 'post',
                data: qs.stringify({
                    program_id: program_id
                })
            }).then(res=>{
                console.log(res)
                this.info=res.data.info
                this.contributerList=res.data.contributerList
                this.issueList=res.data.issueList
                this.prList=res.data.prList
            })
        },
        toIssueList(){
            // let routeUrl = this.$router.resolve({
            //     path: '/IssueList',
            //     query: {program: this.$route.query.program}
            // })
            // window.open(routeUrl.herf, "_blank")
            let routeUrl = this.$router.resolve({
                path: '/IssueList',
                query: {program: this.$route.query.program}
            });
            window.open(routeUrl.href, "_blank");
        },
        toPrList(){
            let routeUrl = this.$router.resolve({
                path: '/PrList',
                query: {program: this.$route.query.program}
            });
            window.open(routeUrl.href, "_blank");
        },
        toIssue(id){
            // const routeurl=this.$router.resolve({
            //     path: '/Issue',
            //     query: {issueId: id}
            // })
            // window.open(routeurl.herf, "_blank")
            let routeUrl = this.$router.resolve({
                path: '/Issue',
                query: {issueId: id, program: this.$route.query.program}
            });
            window.open(routeUrl.href, "_blank");

        },
        toPr(id){
            // const url=this.$router.resolve({
            //     path: '/Pr',
            //     query: {prId: id}
            // })
            // window.open(url.herf, "_blank")
            let routeUrl = this.$router.resolve({
                path: '/Pr',
                query: {PrId: id, program: this.$route.query.program}
            });
            window.open(routeUrl.href, "_blank");

        }
    },
}
</script>
<style>
.DetailView{
    text-align: left;
}
.DetailView .title{
    font-family: Tahoma,fantasy;
    text-align: left;
    padding-top: 50px;
    padding-left: 20px;
    font-weight: bold;
    font-size: 35px;
    /* line-height: 40px; */
    color: #353535;
}
.DetailView .contributer{
    padding-left: 20px;
    margin-top: 10px;
    font-size: 18px;
}
.DetailView .information{
    padding-left: 20px;
    font-size: 15px;
    color: #909eb4;
    margin-top: 10px;
}
.DetailView .junior-block{
    background-color: white;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px; 
    padding-left: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .04);
}
.DetailView .junior-block .el-collapse-item__header{
    font-size: 21px;
    font-weight: bold;
    padding: 10px;
}
.DetailView .junior-block .el-collapse-item__content{
    font-family: Georgia, fantasy;
    font-size: 16px;
    padding-left: 20px;
    padding-bottom: 5px;
    padding-top: 5px;
}
.DetailView .junior-block .el-collapse-item__content:hover{
    cursor: pointer;
}
._link {
  color: #00b1fd;
}
._link:hover {
  color: #38c5ff;
  cursor: pointer;
}
</style>