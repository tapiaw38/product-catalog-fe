<script setup lang="ts">
import { PanelMenu } from 'primevue'
import type { MenuItem } from 'primevue/menuitem'
import { ref } from 'vue'

const items = ref<MenuItem[]>([
    {
        label: 'Category 1',
        items: [
            {
                label: 'Product 1',
                icon: 'pi pi-check-circle',
                command: () => {
                    console.log('Product 1 Selected')
                }
            },
            {
                label: 'Product 2',
                icon: 'pi pi-check-circle',
                command: () => {
                    console.log('Product 2 Selected')
                }
            }
        ]
    },
    {
        label: 'Category 2',
        items: [
            {
                label: 'Product 3',
                icon: 'pi pi-check-circle',
                command: () => {
                    console.log('Product 3 Selected')
                }
            },
            {
                label: 'Product 4',
                icon: 'pi pi-check-circle',
                command: () => {
                    console.log('Product 4 Selected')
                }
            }
        ]
    }
])
</script>

<template>
    <PanelMenu :model="items" />
</template>

<style scoped></style>
