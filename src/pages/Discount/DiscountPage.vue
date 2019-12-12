<template>
  <q-page class="q-pa-lg">
    <q-card flat>
      <q-card-section>
        <d-table
          title="Discount"
          :data="data"
          custom-body
          :is-loading="isLoading"
          :columns="$options.columns">
          <template slot="button">
            <q-btn label="Add Discount" color="primary" outline class="text-capitalize"/>
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
        this.data      = await this._getData('json/active-discount');
        console.log(this.data);
        this.isLoading = false;
      }
    },
    activated() {
      this.getActiveDiscount();
    },
    columns : [
      {name: 'discountType'        , required: true, label: 'Discount Type'       , field: 'discountType'         , align: 'left' , sortable: true},
      {name: 'discountPercentage'  , required: true, label: 'Discount Percentage' , field: 'discountPercentage'   , align: 'left' , sortable: true},
      {name: 'Action'              , required: true, label: 'Action'              , field: 'Action'               , align: 'center' , sortable: false},
    ]
  }
</script>

<style scoped>

</style>
