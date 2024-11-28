<template>
  <div>
    <Detail-card picAdress="https://theme-hope-assets.vuejs.press/bg/6-light.svg" class='firstcard'>
      <div class='firstcard-img'>
        <img src="https://doc.hoshiran.tech/assets/image/bot_avatar.png" alt="">
      </div>
      <div class='firstcard-article'>
        <div class='firstcard-title'>QQ机器人「阿洛娜」</div>
        <div class='firstcard-middleArticle'>一个攻略查询/游戏养成的QQ机器人</div>
        <div class='firstcard-lastArticle'>
          <div class='firstcard-lastArticle-document'>最终用户许可协议</div>
          <div class='firstcard-lastArticle-use'>
            <img src="../assets/right.svg" alt="">
            开始使用
          </div>
        </div>
      </div>
    </Detail-card>
    <DetailCard picAdress='https://theme-hope-assets.vuejs.press/bg/7-light.svg' class='secondcard'>
      <div class='secondcard-title'>
        <p style='font-size: 2rem' class='secondcard-title-first'>小提示</p>
          <div>Tips: 请注意全角与半角的区别，阿洛娜全部使用半角 "#"，而不是全角 "＃"</div>
          <div>Tips: 部分指令需要将各参数用空格分开，如：`#转账@用户 100`</div>
          <div>Tips: 一切指令"[]"表示为必填参数，'&lt; &gt;'表示为可选参数，请将括号去掉后替换相应内容发送</div>
      </div>
    </DetailCard>
    <DetailCard picAdress='https://theme-hope-assets.vuejs.press/bg/3-light.svg' class='thirdcard'>
      <div class='thirdcard-section'>
        <div style='    font: bold 2.5vw/1 sans-serif;margin:5%'>指令功能</div>
        <div>查询 BlueArchive 游戏攻略</div>
        <div>BlueArchive 抽奖模拟</div>
        <div>每日时事新闻与B站新番推荐</div>
        <div>每日运势、人品与塔罗牌查询</div>
        <div>特色机制与系统功能</div>
      </div>
      <div class='thirdcard-picture'>
        <img src="https://doc.hoshiran.tech/assets/image/box.svg" alt="">
      </div>
    </DetailCard>
  </div>
</template>

<style lang="scss" scoped>
  .firstcard {
    display: flex;
    position: relative;
  }
  .firstcard-title{
    position: absolute;
    top:3%;
    left: 60%;
    font-size: 3rem;
    font-family:'PingFang SC', sans-serif;
  }
  .firstcard-img{
    width: 18rem;
    height: 18rem;
    position: absolute;
    top: 15%;
    left: 15%;
    img{
      width: 100%;
      height: 100%;
      border-radius: 30%;
    }
  }
  .firstcard-article{
    width:25.625rem;
    height: inherit;
    position: absolute;
    right: 15%;
    display: flex;
    flex-direction: row;
  }
  .firstcard-title{
    width:inherit;
    height:33%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    order: 1;
    font: bold 2.5vw/1 sans-serif;
    letter-spacing: 0.1ch;
    background: linear-gradient(90deg, #075b59, #006169, #00667d, #006a94, #006ead, #0070c7, #0070de, #006df2, #0067ff, #535cff, #9046ff, #c20fff);
    color: rgb(255 255 255/80%);
    -webkit-background-clip: text;
    background-clip: text;
    text-transform: uppercase;
    animation: text-ani 5s ease-in-out infinite;
    text-decoration: none;
    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @keyframes text-ani {
    to {
        background-position: 100vw 0;
        filter: hue-rotate(360deg);
    }
}
  .firstcard-middleArticle{
    width:inherit;
    height:33%;
    position: absolute;
    top: 33%;
    left: 0;
    font-size: 1.5rem;
    font-family:'PingFang SC', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .firstcard-lastArticle{
    width:inherit;
    height:33%;
    position: absolute;
    top: 66%;
    left: 0;
    font-size: 1.5rem;
    font-family:'PingFang SC', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .firstcard-lastArticle-document{
    width:15rem;
    height:3rem;
    margin: 5%;
    font-size: 1.3rem;
    background-color:  rgb(10.0657894737, 192.2565789474, 219.4342105263);
    color:#fff;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .firstcard-lastArticle-document:hover{
    background-color:  rgb(0, 217, 250);
  }
  .firstcard-lastArticle-use{
    width:10rem;
    height:3rem;
    margin: 5%;
    font-size: 1.3rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(142, 150, 170, 0.199);
    img{
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .firstcard-lastArticle-use:hover{
    background-color: rgba(142, 150, 170, 0.5);
  }
  .secondcard{
    display: flex;
    position: relative;
  }
  .secondcard-title{
    width:50rem;
    height: auto;
    position: absolute;
    left:20%;
    top:30%;
    display: flex;
    flex-direction: column;
    font: bold 1.5vw/1 sans-serif;
    div{
      width: 100%;
      height: 3rem;
    }
  }
  .secondcard-title-first{
    margin:5%;
  }
  .thirdcard{
    position: relative;
  }
  .thirdcard-section{
    width:20rem;
    height: inherit;
    position:absolute;
    left:20%;
    top:30%;
    font: bold 1.5vw/1 sans-serif;
    div{
      margin:5%
    }
  }
  .thirdcard-picture{
    position:absolute;
    right:20%;
    top:30%;
    width:10rem;
    height: 10rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
<script>
import DetailCard from '@/components/DetailCard.vue'

export default {
  name: 'MainView',
  components: {
    DetailCard
  }
}
</script>
