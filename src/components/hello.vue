<template>
    <div>
        <span v-html="msg"></span>
    </div>
</template>
<script>
    //es6
    export default {
        name:"app",
         //data:function(){}，下面是es6写法
        data () {
            return {
                msg: 'Hello ly good'
            }
        },
    }
</script>
 
<style lang="scss" scoped>
//lang='scss' 不能写成 sass 打包会报错
    div{
        height:100px;
        width: 50%;
        border: solid 1px;
        margin-top: 10px;
    }
</style>