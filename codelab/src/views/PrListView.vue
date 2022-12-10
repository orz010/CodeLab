<template>
    <div class="PrList">
        <el-row>
            <el-col :span="4" style="min-height:20px"></el-col>
            <el-col :span="16">
                <div class="PrListTitle">
                    共有 {{this.PrNum}} 条Pr
                </div>
                <div class="content">
                    <div v-for="(Pr, index) in PrList" :key="index" class="content-block">
                        <span @click="toPr(Pr.id)" class="content-text">#{{index+1}}：{{Pr.title}}</span>
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
            PrNum: 6,
            PrList:[
                {id:'1', title:'Pr1'},
                {id:'1', title:'Pr1'},
                {id:'1', title:'Pr1'},
                {id:'1', title:'Pr1'},
                {id:'1', title:'Pr1'},
                {id:'1', title:'Pr1'},
            ]
        }
    },
    methods:{
        created(){

        },
        toPr(id){
            let routeUrl = this.$router.resolve({
                path: '/Pr',
                query: {PrId: id}
            });
            window.open(routeUrl.href, "_blank");
        }
    }
}
</script>
<style>
.PrList{
    text-align: left;
}
.PrList .PrListTitle{
    font-family: Tahoma,fantasy;
    text-align: left;
    padding-top: 50px;
    padding-left: 20px;
    font-weight: bold;
    font-size: 28px;
    /* line-height: 40px; */
    color: #353535;
}
.PrList .content-block{
    min-height: 40px;
    background-color: white;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px; 
    padding-left: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .04);
    font-size: 20px;
}
.PrList .content-text{
    padding: 10px;
}
.PrList .content-text:hover{
  color: #0191cf;
  cursor: pointer;
}
</style>