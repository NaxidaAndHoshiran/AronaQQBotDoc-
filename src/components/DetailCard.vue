<template>
    <div class="section-card">
        <img :src=picAdress alt="">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .section-card{
        width: 100%;
        height: 60vh;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>

<script>
export default {
    props:{
        picAdress:{
            type:String,
            default:''
        }
    }
}
</script>