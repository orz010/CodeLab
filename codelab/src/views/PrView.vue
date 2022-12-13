<template>
    <div class="prView">
        <el-row>
            <el-col :span="4" style="min-height:20px"></el-col>
            <el-col :span="16">
                <div class="Title">
                    {{this.title}}
                </div>
                <div class="sub-info">
                    <span class="sub-author">{{this.author}}&nbsp;&nbsp;&nbsp;<span class="sub-date">{{this.time | dateFormat}}</span></span>
                </div>
                <div class='sub-info' v-if="content.length!=0"><span class="sub-content">{{this.content}}</span></div>
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
            title: 'pr1',
            author: '',
            time: '',
            content: '',
            List:[
                {author:'Adams Smith', content:'I find a pr', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a pr', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a pr', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a pr', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a pr', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a pr', time:'2022-11-28'},
            ]
        }
    },
    mounted:function(){
        this.getpr()
    },
    methods:{
        getpr(){
            let loading = this.$loading({fullscreen: true, text: '拼命加载中...'})
            let pr_id = this.$route.query.prId
            let program_id = this.$route.query.program
            this.$axios({
                url: '/contents/getPrById',
                method: 'post',
                data: qs.stringify({
                    pr_id: pr_id,
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
.prView{
    text-align: left;
}
.prView .Title{
    font-family: Tahoma,fantasy;
    text-align: left;
    padding-top: 50px;
    padding-left: 20px;
    font-weight: bold;
    font-size: 28px;
    /* line-height: 40px; */
    color: #353535;
}
.prView .content-block{
    min-height: 40px;
    background-color: white;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px; 
    padding-left: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .04);
    font-size: 20px;
}
.prView .content-text{
    font-family: Tahoma,fantasy;
    padding-left: 20px;
    padding-bottom: 10px;
}
.prView .author{
    padding: 20px;
}
.prView .time{
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