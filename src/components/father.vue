<template>
    <div>
        我是父组件内容
        <el-button @click="handleClick">点击</el-button>
        我是计数器：{{ num }}
        <child ref="childRef" msg="hello Word" type="a" />
    </div>
</template>

<script lang="ts" setup>
import { computed, provide, ref } from 'vue'
import { useStore } from 'vuex'
    const childRef = ref()
    const store = useStore()
    let handleClick = () => {
        // console.log(childRef);
        childRef.value.childFun()
        store.dispatch('test/increment', {num: 4})
    }

    const obj = {
        name: '李昌',
        age: '48'
    }
    let someValue: any = 'this is a string'
    let strLength: number = (someValue).length
    console.log(store.state.test);
    const num = computed(() => store.state.test.num)
    // console.log(strLength, 33);
    // enum Color { red, green , blue}
    // let c: Color = Color.green
    // let d: string = Color[2]
    // console.log(d, 222);

    // let arr: Array<number> = [1, 222, 555]
    // console.log(arr);
    
    // let notSure: any = 4
    // notSure.toFixed()
    
    // let arr: any[] = [1, true, 'free']
    // console.log(arr[2]);
    
    // function warnUser(): void {
    //     console.log('我是空的')
    // }
    // warnUser()
    provide('info', obj)
</script>

<style scoped>

</style>