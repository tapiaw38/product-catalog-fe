<script setup lang="ts">
import type { ProductCardProps } from './types'
import Button from 'primevue/button'
import Tag from 'primevue/tag'

const props = defineProps<ProductCardProps>()
</script>

<template>
    <div class="flex flex-row gap-2 border-t border-surface-200">
        <div
            class="relative p-4"
            style="
                border-radius: 14px;
                box-shadow:
                    0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                    0px 1px 2px 0px rgba(0, 0, 0, 0.06);
            "
        >
            <img
                class="block xl:block mx-auto rounded w-full h-full max-h-24rem"
                :src="props.image"
                :alt="props.title"
            />
            <div class="absolute bg-black/70 rounded-border" style="left: 4px; top: 4px">
                <Tag
                    :value="props.isActive ? 'Disponible' : 'Sin stock'"
                    :color="props.isActive ? 'success' : 'danger'"
                    :icon="props.isActive ? 'pi pi-check-circle' : 'pi pi-times-circle'"
                    class="p-2"
                />
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex flex-column justify-center items-start gap-2">
                <div class="flex-column gap-5 my-2">
                    <span class="font-medium text-surface-500 text-sm">{{ props.category }}</span>
                    <div class="text-lg font-medium my-2">{{ props.title }}</div>
                    <span class="text-surface-500 text-sm">{{ props.description }}</span>
                </div>
                <div class="flex flex-column">
                    <div class="flex flex-column items-center gap-2">
                        <div
                            class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2 max-w-4rem"
                            style="
                                border-radius: 30px;
                                box-shadow:
                                    0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                                    0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                            "
                        >
                            <span class="text-surface-900 font-medium text-sm">{{
                                props.rating
                            }}</span>
                            <i class="pi pi-star-fill text-yellow-500"></i>
                        </div>
                    </div>
                </div>
                <div class="flex flex-column mt-2">
                    <span class="text-xl font-semibold">${{ props.price }}</span>
                    <div class="flex flex-row gap-2 mt-2">
                        <Button
                            icon="pi pi-heart"
                            outlined
                            :color="isActive ? 'success' : 'secondary'"
                        />
                        <Button icon="pi pi-shopping-cart" label="" :disabled="props.isActive" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
