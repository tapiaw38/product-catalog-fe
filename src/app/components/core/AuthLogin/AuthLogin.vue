<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
</script>

<template>
  <div
    class="flex flex-column align-items-start justify-content-center gap-2"
  >
    <div class="flex flex-column gap-2 justify-content-center">
      <label for="username">Email</label>
      <InputText id="email" type="text" />
    </div>
    <div class="flex flex-column gap-2 justify-content-center">
      <label for="password">Password</label>
      <InputText id="password" type="password" />
    </div>
  </div>
  <div class="flex mt-4">
    <Button
      label="Iniciar Sesión"
      icon=""
      class="w-full mx-auto"
    ></Button>
  </div>
</template>

<style scoped></style>
