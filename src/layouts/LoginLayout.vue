<template>
  <q-layout>
    <q-header class="bg-transparent text-grey">
      <q-toolbar>
        <span class="text-h6">Reserve</span>
        <q-toolbar-title>
        </q-toolbar-title>
        <q-btn flat round icon="mdi-web" color="primary"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="bg-login">
          <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
    export default {
        name: "LoginLayout.vue"
    }
</script>

<style lang="scss" scoped>
.bg-login{
  background-image: url("../statics/login-bg3.png");
}
</style>
