<template>
  <div class="wrapper">
    <el-container>
      <el-aside width="200px">
        <div class="div-img">
          <img class="img" src="../assets/title-icon.png"/>
        </div>
        <el-menu
                :router="true"
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
          <el-menu-item index="/About" >
            <i class="el-icon-document"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="dyList">
            <i class="el-icon-setting"></i>
            <span slot="title">动态列表</span>
          </el-menu-item>
           <el-menu-item index="Log">
            <i class="el-icon-s-operation"></i>
            <span slot="title">日志</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>


export default {
  name: 'Home',
}
</script>
<style scoped>
  .div-img{
    width: 200px;

  }
  .img{
    width: 180px;
    height: 55px;
    padding: 10px;
    border: 0;
  }
  .wrapper{
    width: 100%;
    height: 100%;
  }

  .el-header {
    /*background-color: #B3C0D1;*/
    background-color: #1b2c5f;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-container{
    height: 100%;
  }

  .el-aside {
    background-color:#545c64;
    /*background-color: #1b2c5f;*/
    color: #333;
  }

  .el-main {
    /*background-color: #D3DCE6;*/
    background-color: white;
    color: #333;
  }

  .el-menu{
    border: 0;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
