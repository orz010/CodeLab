<template>
    <div class="DetailView">
        <el-row>
            <el-col :span="4" style="min-height:20px"></el-col>
            <el-col :span="16">
                <div class="primary-inforrmation">
                    <div class="title">
                        {{this.infor.repo_name}}
                    </div>
                    <div class="contributer">
                        <span class="_link" @click="toOwner(owner.contributer_name)" v-for="(owner, index) in contributerList" :key="index"><span v-if="index<=5">{{owner.contributer_name}}&nbsp;&nbsp;</span></span>
                    </div>
                    <div class="inforrmation">
                        star：{{this.infor.stargazers_count}}
                    </div>
                    <div class="inforrmation">
                        fork：{{this.infor.forks_count}}
                    </div>
                    <div class="inforrmation">
                        主要语言：{{this.infor.language}}
                    </div>
                    <div class="inforrmation">
                        上次更新时间：{{this.infor.update_time | dateFormat}}
                    </div>
                </div>
            </el-col>
            <el-col :span="4" style="min-height:20px"></el-col>
        </el-row>
        <el-row>
            <el-col :span="4" style="min-height:20px"></el-col>
            <el-col :span="16">
                <div class="junior-inforrmation">
                    <div class="junior-block">
                        <el-collapse v-model="repo">
                            <el-collapse-item title="代码库下载" name="1">
                                <div>ssh：<span>{{this.infor.ssh_url}}</span></div>
                                <div>http：<span>{{this.infor.clone_url}}</span></div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    <div class="junior-block">
                        <el-collapse v-model="issue">
                            <el-collapse-item title="Issue" name="1">
                                <div v-for="(issue, index) in issue_list" :key="index">
                                    <span @click="toIssue(issue.issue_id)">#{{index+1}}：{{issue.title}}</span>
                                </div>
                                <div v-if="this.issue_list.length>5">
                                    <span @click="toissue_list()" class="_link">查看所有issue</span>
                                </div>
                                <div v-if="!this.issue_list || this.issue_list.length==0">暂无issue</div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    <div class="junior-block">
                        <el-collapse v-model="pr">
                            <el-collapse-item title="Pull Request" name="1">
                                <div v-for="(pr, index) in pr_list" :key="index">
                                    <span @click="toPr(pr.pr_id)">#{{index+1}}：{{pr.title}}</span>
                                </div>
                                <div v-if="this.pr_list.length>5">
                                    <span @click="topr_list()" class="_link">查看所有Pull Request</span>
                                </div>
                                <div v-if="!this.pr_list || this.pr_list.length==0">暂无Pull Request</div>
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
            infor:{
                id:'',
                title:'CodeLab',
                star: 109,
                fork: 279,
                time: '2022-11-28',
                ssh: 'ssh@orz010.github.com',
                http: 'http@orz010.github.com',
                owner: '',
            },
            contributerList:[
                {
                    AuthorUrl: 'www.baidu.com',
                    name: 'orz010'
                },
                {
                    AuthorUrl: 'www.baidu.com',
                    name: 'AdamsSmith'
                },
                {
                    AuthorUrl: 'www.baidu.com',
                    name: 'AdamsSmith'
                }
            ],
            
            issue_list:[
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
            pr_list:[
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
            let loading = this.$loading({fullscreen: true, text: '拼命加载中...'})
            let program_id = this.$route.query.program
            this.$axios({
                url: '/crawler/getDetailById/',
                method: 'post',
                data: qs.stringify({
                    program_id: program_id
                })
            }).then(res=>{
                loading.close()
                console.log(res)
                this.infor=res.data.info
                this.contributerList=res.data.contributor_list
                this.issue_list=res.data.issue_list
                this.pr_list=res.data.pr_list
            })
        },
        toissue_list(){
            // let routeUrl = this.$router.resolve({
            //     path: '/issue_list',
            //     query: {program: this.$route.query.program}
            // })
            // window.open(routeUrl.herf, "_blank")
            let routeUrl = this.$router.resolve({
                path: '/Issuelist',
                query: {program: this.$route.query.program}
            });
            window.open(routeUrl.href, "_blank");
        },
        topr_list(){
            let routeUrl = this.$router.resolve({
                path: '/Prlist',
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

        },
        toOwner(name){
            window.open('https://github.com/'+name, "_blank");
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
.DetailView .inforrmation{
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