<template>
    <div>
        我是子组件内容
        {{ nameObj.name }}
        我又测试来了
    </div>
</template>

<script lang="ts" setup>
    import { defineComponent, inject } from 'vue'
    function childFun () {
        console.log('我在父组件中调用了')
    }
    defineExpose({ childFun })

    interface type {
        name: '',
        age: ''
    }
    let nameObj = <type>inject('info')
    console.log(nameObj, 33);
    

</script>

<style scoped>

</style>