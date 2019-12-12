<template>
  <q-page class="q-pa-lg">
    <q-card flat>
      <q-card-section>
          <d-table
            title="Villas"
            :data="data"
            custom-body
            :is-loading="isLoading"
            :columns="$options.columns">
            <template slot="button">
              <q-btn label="Add Villa" color="primary" outline class="text-capitalize"/>
            </template>

            <template slot="body" slot-scope="props">
              <q-tr>
                <q-td v-for="item in computedData" :key="item">
                  {{props.data.row[item]}}
                </q-td>
                <q-td key="Action" class="text-center">
                  <d-btn-dropdown/>
                </q-td>
              </q-tr>
            </template>
          </d-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
  import DTable from "../../components/DTable";
  import DBtnDropdown from "../../components/DBtnDropdown";
  export default {
    name: "VillasPage.vue",
    components:{
      DTable,
      DBtnDropdown
    },
    data: () => ({
      data    : [],
      isLoading: false
    }),
    computed:{
      computedData(){
       let cols = this.$options.columns.map(col => col.field);
       cols.pop();
       return cols;
      }
    },
    methods:{
      async getActiveVilla(){
        this.isLoading = true;
        this.data      = await this._getData('json/active-villas');
        console.log(this.data);

        this.isLoading = false;
      }
    },
    activated() {
      this.getActiveVilla();
    },
    columns : [
      {name: 'name'       , required: true, label: 'Name'       , field: 'name'      , align: 'left' , sortable: true},
      {name: 'villaType'  , required: true, label: 'Villa Type' , field: 'villaType' , align: 'left' , sortable: true},
      {name: 'capacity'   , required: true, label: 'Capacity'   , field: 'capacity'  , align: 'left' , sortable: true},
      {name: 'villaPrice' , required: true, label: 'Villa Price', field: 'villaPrice', align: 'left' , sortable: true},
      {name: 'Action'     , required: true, label: 'Action'     , field: 'Action'    , align: 'center' , sortable: true},
    ]
  }
</script>

<style scoped>

</style>
