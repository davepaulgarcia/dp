<template>
  <q-page class="q-pa-lg">
    <q-card flat>
      <q-card-section>
        <d-table
          title="Billing"
          :data="data"
          custom-body
          :is-loading="isLoading"
          :columns="$options.columns">

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
        this.data      = await this._getData('json/active-billing');
        console.log(this.data);
        this.isLoading = false;
      }
    },
    activated() {
      this.getActiveDiscount();
    },
    columns : [
      {name: 'totalBill'          , required: true, label: 'Total Bill'         , field: 'totalBill'          , align: 'left' , sortable: true},
      {name: 'paymentBalance'     , required: true, label: 'Payment Balance'    , field: 'paymentBalance'     , align: 'left' , sortable: true},
      {name: 'modeOfPayment'      , required: true, label: 'Mode Of Payment'    , field: 'modeOfPayment'      , align: 'left' , sortable: true},
      {name: 'reservationStatus'  , required: true, label: 'Reservation Status' , field: 'reservationStatus'  , align: 'left' , sortable: true},
      {name: 'Action'             , required: true, label: 'Action'             , field: 'Action'             , align: 'center' , sortable: false},
    ]
  }
</script>

<style scoped>

</style>
