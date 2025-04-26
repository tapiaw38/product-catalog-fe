<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { INavbarItem } from '@/app/components/shared/Navbar/types.ts'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

const navbarItems: INavbarItem[] = [
    {
        label: '',
        route: '/',
        icon: 'pi pi-fw pi-home'
    },
    {
        label: '',
        route: '/products',
        icon: 'pi pi-fw pi-shopping-bag'
    }
]
</script>

<template>
    <div class="relative">
        <Menubar :model="navbarItems">
            <template #start>
                <div class="flex-row relative">
                    <div>
                        <img
                            src="../../../assets/images/logo.png"
                            alt="Logo"
                            style="width: 40px; height: 40px"
                            class="rounded-full mr-2"
                        />
                    </div>
                </div>
            </template>
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
            </template>
            <template #end>
                <div class="flex-row relative justify-content-end align-items-center">
                    <router-link to="/auth">
                        <i class="pi pi-user mr-3" style="font-size: 1rem"></i>
                    </router-link>
                    <Button
                        @click="() => {}"
                        label=""
                        icon="pi pi-shopping-cart"
                        :badge="String(1)"
                        badgeClass="p-badge-info"
                    />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<style scoped></style>
