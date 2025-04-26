<script setup lang="ts">
import Card from 'primevue/card'
import type { AppCardProps } from './types'

const props = defineProps<AppCardProps>()
</script>

<template>
    <Card class="flex flex-column justify-content-center align-items-center">
        <template #title>
            <p class="font-light text-xl text-center">{{ props.title }}</p>
        </template>
        <template #content>
            <p class="font-light text-xl text-center">{{ props.content }}</p>
        </template>
    </Card>
</template>

<style scoped></style>
