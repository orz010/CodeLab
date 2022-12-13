<template>
    <div class="prList">
        <el-row>
            <el-col :span="4" style="min-height:20px"></el-col>
            <el-col :span="16">
                <div class="prListTitle">
                    共有 {{this.prNum}} 条pr
                </div>
                <div class="content">
                    <div v-for="(pr, index) in curprList" :key="index" class="content-block">
                        <span @click="topr(pr.pr_id)" class="content-text">#{{index+(pageIdx-1)*10+1}}：{{pr.title}}</span>
                    </div>
                </div>
                <div style="text-align: center">
                    <el-pagination layout="prev, pager, next, jumper"
                                 background
                                 :current-page="pageIdx"
                                 :page-size="size"
                                 :total="prNum"
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
            prNum: 12,
            prList:[
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
            ],
            pageIdx: 1,
            size:10,
            curprList:[
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
                {id:'1', title:'pr1'},
            ]
        }
    },
    mounted:function(){
        this.getprList()
    },
    methods:{
        getprList(){
            let loading = this.$loading({fullscreen: true, text: '拼命加载中...'})
            let program_id = this.$route.query.program
            this.$axios({
                url: '/contents/getPrListById',
                method: 'post',
                data: qs.stringify({
                    program_id: program_id
                })
            }).then(res=>{
                loading.close()
                console.log(res)
                this.prNum=res.data.prNum
                this.prList=res.data.prList
                this.handleCurrentChange(1)
            })
        },
        handleCurrentChange(val){
            this.pageIdx=val
            this.curprList=[]
            console.log(this.pageIdx)
            for(var i=this.pageIdx*10-10; i<this.pageIdx*10 && i<this.prList.length; i++){
                this.curprList.push(this.prList[i])
            }
        },
        topr(id){
            let routeUrl = this.$router.resolve({
                path: '/pr',
                query: {prId: id, program: this.$route.query.program}
            });
            window.open(routeUrl.href, "_blank");
        }
    }
}
</script>
<style>
.prList{
    text-align: left;
}
.prList .prListTitle{
    font-family: Tahoma,fantasy;
    text-align: left;
    padding-top: 50px;
    padding-left: 20px;
    font-weight: bold;
    font-size: 28px;
    /* line-height: 40px; */
    color: #353535;
}
.prList .content-block{
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
.prList .content-text{
    padding: 10px;
}
.prList .content-text:hover{
  color: #0191cf;
  cursor: pointer;
}
</style>