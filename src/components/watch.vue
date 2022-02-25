<template>
    <div>
        {{user.name}}
    </div>
</template>

<script setup>
import {watch, ref, toRefs, toRaw} from 'vue'
    const user = ref({
        name: '小狼',
        age: '12'
    })
    const userObj = toRaw(user)
    console.log(userObj);
</script>

<style lang="scss" scoped>

</style>