<template>
    <div class="PrView">
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
export default {
    data(){
        return{
            title: 'Pr1',
            List:[
                {author:'Adams Smith', content:'I find a Pr', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a Pr', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a Pr', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a Pr', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a Pr', time:'2022-11-28'},
                {author:'Adams Smith', content:'I find a Pr', time:'2022-11-28'},
            ]
        }
    },
    methods:{
        created(){

        },
    }
}
</script>
<style>
.PrView{
    text-align: left;
}
.PrView .Title{
    font-family: Tahoma,fantasy;
    text-align: left;
    padding-top: 50px;
    padding-left: 20px;
    font-weight: bold;
    font-size: 28px;
    /* line-height: 40px; */
    color: #353535;
}
.PrView .content-block{
    min-height: 40px;
    background-color: white;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px; 
    padding-left: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .04);
    font-size: 20px;
}
.PrView .content-text{
    font-family: Georgia, fantasy;
    padding-left: 20px;
    padding-bottom: 10px;
}
.PrView .author{
    padding: 20px;
}
.PrView .time{
    font-size: 15px;
    color: #909eb4;
}
</style>