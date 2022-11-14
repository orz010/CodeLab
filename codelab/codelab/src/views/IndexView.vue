<template>
    <div class="homeindex">
        <div class="title">
            <h1>CodeLab</h1>
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