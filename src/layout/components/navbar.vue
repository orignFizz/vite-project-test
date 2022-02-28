<template>
    <div class="navbar">
        <div class="logo-container">
            <img :src="logo" alt="" class="logo-img">
        </div>
        <div class="right-menu">
            <screen-full />
            <el-dropdown class="navbar-dropdown">
                <span>
                    <img :src="logoAuthor" alt="" class="logo-author">
                    <el-icon class="arrow-icon">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <el-icon size="20px"><Stamp /></el-icon>
                            <span>个人信息</span>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-icon size="20px"><Expand /></el-icon>
                            <span>退出登录</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
    import logo from '@/assets/theme/nav_icon_logo_m.png'
    import logoAuthor from '@/assets/theme/author.jpg'
    import { ArrowDown, Stamp, Expand } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">

.logo-container {
    float: left;
    height: 50px;
    .logo-img {
        width: 290px;
        height: 40px;
        margin: 5px 0 5px 10px;
    }
}
    .right-menu {
        display: flex;
        float: right;
        height: 50px;
        line-height: 50px;
        margin-right: 10px;
    }

    .navbar-dropdown {
        height: 50px;
        line-height: 50px;
        margin-left: 10px;
    }

    .logo-author {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        margin-top: 7px;
    }

    .arrow-icon {
        margin-left: 10px;
        vertical-align: 8px;
    }
</style>