<template>
    <span :class="{'is-active':isActive}" class="hamburger" @click="handleClick" />
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    const isActive = ref(false)
    const emit = defineEmits(['toggleClick'])
    let handleClick = () => {
        isActive.value = !isActive.value
        emit('toggleClick', isActive)
    }
</script>

<style lang="scss" scoped>
.hamburger {
    position: absolute;
    left: 30px;
    bottom: 30px;
    display: inline-block;
    vertical-align: middle;
    width: 16px;
    height: 16px;
    cursor: pointer;
    transition: 0.2s;
    background: url('../assets/theme/menu_icon_packup_blue.png');
}

.hamburger.is-active {
    transform: rotate(180deg);
}
</style>