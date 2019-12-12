<template>
  <q-page class="q-pa-lg">
    <q-card flat>
      <q-card-section>
        <d-table
          title="Account"
          :data="data"
          custom-body
          :is-loading="isLoading"
          :columns="$options.columns">
          <template slot="button">
            <q-btn label="Add Account" color="primary" outline class="text-capitalize"/>
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
    name: "DiscountPage.vue",
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
      async getActiveDiscount(){
        this.isLoading = true;
        this.data      = await this._getData('json/active-account');
        console.log(this.data);
        this.isLoading = false;
      }
    },
    activated() {
      this.getActiveDiscount();
    },
    columns : [
      {name: 'fullName'  , required: true, label: 'Full Name', field: 'fullName' , align: 'left'    , sortable: true},
      {name: 'username'  , required: true, label: 'Username' , field: 'username' , align: 'left'    , sortable: true},
      {name: 'position'  , required: true, label: 'Position' , field: 'position' , align: 'left'    , sortable: true},
      {name: 'status'    , required: true, label: 'Status'   , field: 'status'   , align: 'left'    , sortable: true},
      {name: 'Action'    , required: true, label: 'Action'   , field: 'Action'   , align: 'center' , sortable: false},
    ]
  }
</script>

<style scoped>

</style>
