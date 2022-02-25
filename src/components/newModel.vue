<template>
    <div>
        <h1>{{ result }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({result : 'ok'})
            }, 3000)
        })
    }
})
</script>

<style scoped>

</style>