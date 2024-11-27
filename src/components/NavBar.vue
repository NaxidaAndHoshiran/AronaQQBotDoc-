<template>
  <div class="header">
    <a class="header-arona">
      <p>AronaQQBot</p>
    </a>
    <a class="header-main" href="/">
      <img src="@/assets/shouye.svg" alt="">
      <p>项目主页</p>
    </a>
    <a class="header-document" href="/doc">
      <img src="@/assets/baocun.svg" alt="">
      <p>文档</p>
    </a>
    <div class="header-github" @click="goGithub">
      <img src="@/assets/github.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
  methods: {
    goGithub () {
      window.open('https://github.com/NaxidaAndHoshiran/AronaQQBotDoc')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  *{
    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
  }
  .header{
    width: 100%;
    height: 3.75rem;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img{
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  a:link,a:visited,a:active{
    color: #000000;
    text-decoration: none;
  }
  a:hover{
    color:rgba(28, 204, 235, 0.8);
    transition: all 0.3s cubic-bezier(0,1,0,1);
  }
  .header-arona{
    position: absolute;
    left: 2%;
    font-size: 1.3rem;
    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
  }
  .header-main,.header-document{
    display: flex;
    flex-direction: row;
    margin:2%;
  }
  .header-github{
    position: absolute;
    right: 2%;
  }
  .header-github img:hover {
    filter: invert(0.5) sepia(1) saturate(3) hue-rotate(180deg);
  }
</style>
