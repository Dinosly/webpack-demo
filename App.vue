<template>
    <div>
        <div class="first">
            <span>df</span>
            <span v-html="msg"></span>
        </div>
        <hello></hello>
    </div>
</template>
<script>
    //es6
    import hello from './src/components/hello.vue';//导入当前目录的hello.vue
    
    export default {
        name:"app",
        data () {
            return {
                msg: 'first Component ',
            }
        },
        components:{
        //等价于
        // hello: hello
            hello
        }
    }
</script>

<style lang="scss">
.first{
  height: 100px;
  width: 100px;
  background-color: red;
}
// @import '_assets/sass/style.scss';
// #app {
//   height: 100%;
//   background-color: $white;
// }
// .container {
//   padding-left: 200px;
//   padding-top: 50px;
//   width: 100%;
//   min-width: 1024px;
//   height: 100%;
// }
// .dialog-body{
//   padding: 10px 30px;
// }

// .animate_input {
//   -webkit-animation-duration: 1s;
//   animation-duration: 1s;
//   -webkit-animation-fill-mode: both;
//   animation-fill-mode: both;
//   animation-timing-function:ease;
//   -webkit-animation-timing-function:ease;
// }
// .shake_input {
//   -webkit-animation-name: inputShake;
//   animation-name: inputShake;
// }
// @keyframes inputShake {
//   0%, 100% {
//     -webkit-transform: translateZ(0);
//     transform: translateZ(0);
//   }
//   10%, 30%, 50%, 70%, 90% {
//     -webkit-transform: translate3d(-5px,0,0);
//     transform: translate3d(-5px,0,0);
//   }
//   20%, 40%, 60%, 80% {
//     -webkit-transform: translate3d(5px,0,0);
//     transform: translate3d(5px,0,0);
//   }
// }
// .el-form-item.is-success .shake_input, .el-form-item.is-success .shake_input:focus{
//   border-color: #F56C6C!important;
// }
// .el-form-item.is-success .error_input, .el-form-item.is-success .error_input:focus{
//   border-color: #F56C6C!important;
// }
// </style>
