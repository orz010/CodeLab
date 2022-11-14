<template>
    <div class="homeindex">
        <div class="background">
            <!-- <img src="../assets/images/background_home.jpg" class="background" alt=""> -->
        </div>
        <div class="title">
            CodeLab
        </div>
        <div class="searchbox">
            <SearchBox :options="option"/>
        </div>
    </div>
</template>
<script>
import SearchBox from '../components/searchBox.vue'
export default {
    name: 'HomeIndex',
    components: {
        SearchBox,
    },
    data(){
        return{
            option: [
                {
                value: '1',
                label: 'C'
                }, {
                value: '2',
                label: 'C++'
                }, {
                value: '3',
                label: 'Java'
                }, {
                value: '4',
                label: 'Python'
                }, {
                value: '5',
                label: 'JavaScript'
                }, {
                value: '6',
                label: 'Ada'
                }, {
                value: '7',
                label: 'rust'
                },
            ]
        }
        
    },
}
</script>
<style>
.homeindex .background {
  position:absolute;
  width:100%;
  height:100%;
  left:0;
  z-index:-1;
  object-fit: cover;
}
.homeindex .title{
    margin-top: 250px;
    font-size : 60px;
}
.homeindex .searchbox{
    margin-top: 50px;
}
</style>