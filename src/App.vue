<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$q.addressbarColor.set('#D4CCEF')
  }
}
</script>
<style lang="scss">

</style>
