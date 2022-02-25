<template>
    <div>
        我是子组件内容
        {{ nameObj.name }}
        修改一下内容
    </div>
</template>

<script lang="ts" setup>
    import { defineComponent, inject } from 'vue'
    function childFun () {
        console.log('我在父组件中调用了')
    }
    defineExpose({ childFun })

    const nameObj = inject('info')
    console.log(nameObj, 33);
    

</script>

<style scoped>

</style>