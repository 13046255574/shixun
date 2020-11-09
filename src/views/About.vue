<template>
  <div >
    <h1>This is an 503 靓仔界面about page</h1>
    <el-divider content-position="left"></el-divider>
    <h1>团队成员：</h1><br>
      <h3>一群帅比....</h3>
      <p>1. 你眼瞎吗撞我心口上了</p>

      <p> 2. “不要抱怨” “抱我”</p>

      <p> 3. 美好的事情你都用脸做到了</p>

      <p>  4. 你是什么人你是我的心上人</p>

      <p>   5. 我不想撞南墙了只想撞你的胸膛</p>

      <p>  6. 我一点不想你但一点半想你了</p>

      <p>  7. 虽然溜肩，但是锁骨真好看</p>

      <p>  8. 我对你的爱，就像拖拉机上山轰轰烈烈</p>

      <p>   9. 你就委屈一下，栽在我手里行不行?</p>

      <p>   10. 你怎么这么讨厌呢! 讨人喜欢百看不厌</p>

      <p>   11. 你猜我想吃什么? 痴痴地望着你</p>

      <p>   12. 甜有100种方式 吃糖 蛋糕和98次想你</p>

      <p>   13. “喜欢你是件很麻烦的事。”“但我偏偏喜欢找麻烦。”</p>

      <p>  14. “圆规为什么能画圆”“因为它的心一直没变”</p>

      <p>    15. “最近都在干嘛呢?”“一直吃。”“一直吃怎么还这么瘦。”“痴痴地等你”</p>

      <p>  16. 吃烧烤是先考海鲜还是烤肉烤肉先考虑你</p>

      <p>  17. 等下可以帮我洗一下东西吗?”“可以啊，洗什么?”“喜欢我。</p>
    <el-divider content-position="left"></el-divider>
    <div class="about">
      <div v-for="(item,i) in imgData" class="introduce">
        <img :src="item.url" style="width:300px">
        <div class="font">{{item.name}}</div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
      data(){
          return{
              imgData:[
                  {id:1,url:'https://yoonada.oss-cn-shenzhen.aliyuncs.com/images/20201108232744.jpg',name:'刘常江'},
                  {id:2,url:'https://yoonada.oss-cn-shenzhen.aliyuncs.com/images/20201108233027.jpg',name:'林条达'},
                  {id:3,url:'https://yoonada.oss-cn-shenzhen.aliyuncs.com/images/20201108232824.jpg',name:'李伟杰'},
                  {id:4,url:'https://yoonada.oss-cn-shenzhen.aliyuncs.com/images/20201108232959.jpg',name:'高艺威'},
                  {id:5,url:'https://yoonada.oss-cn-shenzhen.aliyuncs.com/images/20201108233540.jpg',name:'周诗轩'},
                  {id:6,url:'https://yoonada.oss-cn-shenzhen.aliyuncs.com/images/20201108233507.jpg',name:'黄鹏'},
                  {id:7,url:'https://yoonada.oss-cn-shenzhen.aliyuncs.com/images/20201108232924.jpg',name:'教练'}
              ]
          }
      },
      methods:{

      },
      mounted(){

      }
  }
</script>
<style>
  .about{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
  }
  .introduce{
      text-align: center;
  }
  .font{
    font-weight: bold;
  }
</style>
