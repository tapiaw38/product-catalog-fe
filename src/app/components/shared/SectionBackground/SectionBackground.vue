<script setup lang="ts">
import type { SectionBackgroundProps } from './types'

const props = defineProps<SectionBackgroundProps>()
</script>

<template>
    <div
        class="relative"
        :style="{
            backgroundColor: props.color,
            backgroundImage: `url(${props.image})`,
            backgroundSize: props.zize,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: props.attachment,
            width: props.width,
            height: props.height
        }"
    >
        <slot></slot>
    </div>
</template>

<style scoped></style>
