<template>
  <q-btn-dropdown color="primary" label="Action" outline class="text-capitalize">
    <q-list>
      <q-item clickable v-close-popup>
        <q-item-section>
          <q-item-label>Edit</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-close-popup>
        <q-item-section>
          <q-item-label>Rooms</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
  </q-btn-dropdown>
</template>

<script>
    export default {
        name: "DBtnDropdown.vue"
    }
</script>

<style scoped>

</style>
