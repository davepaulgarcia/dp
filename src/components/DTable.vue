<template>
  <q-table
    :title="title"
    color="primary"
    class="shadow-0"
    :data="data"
    :columns="columns"
    :filter="filter"
    row-key="name"
    :hide-header="isHideHeader"
    :hide-bottom="isHideBottom"
    :pagination.sync="pagination"
    :loading="isLoading"
  >
    <template v-slot:top-right="props">
      <span class="q-mx-sm"><slot name="button"/></span>
      <q-input v-model="filter"
               outlined
               placeholder="Search" dense="dense" class="float-left">
        <template v-slot:append>
          <q-icon
            name="search"
            class="cursor-pointer"
          />
        </template>
      </q-input>
    </template>

    <!--TABLE COLUMNS-->
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th v-for="col in props.cols"
              :key="col.name"
              :props="props"
              class="text-primary">
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>
    <template slot="body" slot-scope="props">
      <slot name="body" :data="props"/>
    </template>

  </q-table>
</template>

<script>
    export default {
        name: "DTable",
        props:{
          data: Array,
          columns: Array,
          customBody: Boolean,
          title: String,
          isLoading: Boolean,
          isHideHeader: Boolean,
          isHideBottom: Boolean,
        },
        data: () => ({
          filter: '',
          pagination: {
            sortBy: 'name',
            descending: false,
            rowsPerPage: 10
            // rowsNumber: xx if getting data from a server
          },
        })
    }
</script>

<style scoped>

</style>
