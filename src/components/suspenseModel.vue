<template>
    <suspense>
        <template #default>
            <new-model></new-model>
        </template>
        <template #fallback>
            <h1>Loading...</h1>
        </template>
    </suspense>
</template>


<script lang="ts" setup>
    import NewModel from './newModel.vue'
</script>

<style scoped>

</style>