<script setup lang="ts">
import Carousel from 'primevue/carousel'
import type { CarouselProps } from './types'

const props = defineProps<CarouselProps>()
</script>

<template>
    <section class="slider">
        <Carousel
            :value="props.items"
            :numVisible="props.numVisible"
            :numScroll="props.numScroll"
            :responsiveOptions="props.responsiveOptions"
            :circular="props.circular"
            :autoplayInterval="props.autoPlayInterval"
        >
            <template #item="slotProps">
                <slot name="item" :data="slotProps.data" :index="slotProps.index" />
            </template>
        </Carousel>
    </section>
</template>
