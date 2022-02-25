<template>
    <div class="app-wrapper">
        <div class="navbar">我是上部分导航区</div>
        <div :class="{'collapse': collapseFlag}" class="main-container">
            <Sidebar :isCollapse="collapseFlag" class="sidebar-container" />
            <Collapse @toggle-click="toggleSidebar"/>
            <div class="app-main">我是主要内容区</div>
        </div>
    </div>
</template>

<script setup>
    import Sidebar from './components/sidebar.vue'
    import Collapse from '../components/Collapse.vue'
    import { ref } from 'vue'
    let collapseFlag = ref(false)
    function toggleSidebar(res) {
        collapseFlag.value = res.value
    }
</script>

<style lang="scss" scoped>

</style>