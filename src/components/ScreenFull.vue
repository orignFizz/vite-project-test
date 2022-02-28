<template>
    <div>
        <el-icon size="26px" class="screen-box" :title="isFullScreen ? '退出全屏' : '全屏'"  @click="handleClick">
            <full-screen />
        </el-icon>
    </div>
</template>

<script setup lang="ts">
    import { FullScreen } from '@element-plus/icons-vue'
    import { ElMessage } from 'element-plus';
    import screenfull from 'screenfull'
    import { onMounted, onBeforeUnmount, ref } from 'vue'

    let isFullScreen = ref(false)

    onMounted(() => {
        init()
    })

    onBeforeUnmount(() => {
        destroy()
    })

    let handleClick = () =>{
        if (!screenfull.isEnabled) {
            ElMessage.warning('不支持全屏')
            return
        }
        screenfull.toggle()
    }

    let change = () => {
        isFullScreen.value = screenfull.isFullscreen
    }

    let init = () => {
        if (screenfull.isEnabled) {
            screenfull.on('change', change)
        }
    }

    let destroy = () => {
        if (screenfull.isEnabled) {
            screenfull.off('change', change)
        }
    }

</script>

<style scoped>
    .screen-box {
        margin-top: 12px;
        cursor: pointer;
    }
</style>