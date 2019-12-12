<template>
  <q-card class="col-12 no-border-radius" flat>
    <q-card-section class="my-card row flex flex-center q-gutter-md" style="border-radius: 0 0 50px 50px;">
        <div class="col-12 col-md-3 flex flex-center ">
          <v-date-picker
            mode="range"
            class="shadow-10"
            color="purple"
            v-model="range"
            :min-date='new Date()'
            :select-attribute="selectDragAttribute"
            :drag-attribute="selectDragAttribute"
            is-inline
            @drag="dragValue = $event"
          >
            <div slot="day-popover" slot-scope="{ format}">
              {{ format(dragValue ? dragValue.start : range.start, 'MMM D') }}
              -
              {{ format(dragValue ? dragValue.end : range.end, 'MMM D') }}
            </div>
          </v-date-picker>
        </div>
        <div class="col-12 col-md-7">
          <q-card class="shadow-10">
            <q-card-section>
              <d-table
                title="Basket"
                :is-hide-bottom="!!data.length"
                :data="data"
                custom-body
                :columns="$options.columns">

                <template slot="body" slot-scope="props">
                  <q-tr>
                    <q-td key="Name">
                      <q-btn icon="mdi-trash-can-outline" @click="removeRow(data.indexOf(props.data.row))" round flat size="sm" color="red"/>
                      {{props.data.row.roomName}}
                    </q-td>
                    <q-td key="quantity" class="text-center">
                      <q-btn icon="mdi-minus" round :disable="props.data.row.quantity === 1" flat size="sm" color="red" @click="props.data.row.quantity--"/>
                      {{props.data.row.quantity}}
                      <q-btn icon="mdi-plus" round :disable="props.data.row.quantity === props.data.row.available" flat size="sm" color="green" @click="props.data.row.quantity++"/>
                    </q-td>
                    <q-td key="roomPrice" class="text-center">
                      {{props.data.row.roomPrice}}
                    </q-td>
                    <q-td key="numberOfNights" class="text-center">
                      {{props.data.row.numberOfNights}}
                    </q-td>
                    <q-td key="total" class="text-center">
                      {{((props.data.row.total * props.data.row.quantity) * props.data.row.numberOfNights).toFixed(2)}}
                    </q-td>
                  </q-tr>
                  <q-tr v-if="data.indexOf(props.data.row) === data.length -1">
                    <q-td colspan="3"/>
                    <q-td class="text-right">
                     Grand Total:
                    </q-td>
                    <q-td class="text-left">
                     P {{data.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.total) * currentValue.numberOfNights ,0).toFixed(2)}}
                    </q-td>
                  </q-tr>
                </template>
              </d-table>
            </q-card-section>
          </q-card>
        </div>
    </q-card-section>
    <q-card-section :style="`${$q.screen.lt.md ? '' : 'margin-left: 230px; margin-right: 230px'}`">
      <q-card flat>
        <q-card-section >
          <span class="text-h4">
            Room Available
          </span>
          <span class="text-h6 text-grey">
            (6)
          </span>
        </q-card-section>
        <q-card-section class="row">
        <div class="col-12 flex flex-center" v-if="isLoading">
          <q-spinner-bars
            color="primary"
            size="5em"
          />
          <q-tooltip :offset="[0, 8]">Please Wait...</q-tooltip>
        </div>
        <div class="col-12 row q-gutter-md justify-center" v-else>
          <q-card class="col-md-3 col-12" v-for="(item, i) in rooms" :key="i">
            <q-img
              src="statics/hotelimage.jpg"
              basic>
              <div class="absolute-top text-h6">
                {{item.roomName}}
              </div>
            </q-img>
            <q-card-section>
              <div class="text-h6">{{item.available}} more left</div>
              <div class="text-subtitle2 text-grey"><q-icon name="mdi-information-outline"/>{{item.description}}</div>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pa-none">
              <q-btn flat icon="mdi-account"  :label="`2-${item.capacity}`" class="q-mr-sm" />
              <span>P{{item.roomPrice}}/day - P{{item.additional}}/Additional</span>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-btn label="add to basket" flat color="primary" icon="mdi-plus" class="full-width bg-primary text-white" @click="addToBasket(item)"/>
            </q-card-section>
          </q-card>
        </div>
        </q-card-section>
      </q-card>
    </q-card-section>
  </q-card>
</template>

<script>
  import DTable from "../../components/DTable";
  import { date } from 'quasar';
  let dateToday = new Date();
  let dateTomorrow = date.addToDate(dateToday, { days: 1});

    export default {
      name: "BookPage.vue",
      components:{
        DTable
      },
      computed:{
        computedData(){
          let cols = this.$options.columns.map(col => col.field);
          return cols;
        },
        selectDragAttribute() {
          return {
            popover: {
              visibility: 'hover',
              isInteractive: false, // Defaults to true when using slot
            },
          };
        },
      },
      data() {
        return {
          dragValue: null,
          range: {
            start: dateToday,
            end: dateTomorrow,
          },
          selectAttribute: {
            dot: true
          },
          data    : [],
          rooms   : [],
          isLoading: false
        }
      },
      methods:{
        async getRooms(){
          this.isLoading = true;
          let rooms = await this._insertData('json/get-villa', this.range);
          console.log(rooms);
          this.rooms = Object.assign([], rooms);
          this.isLoading = false;

        },
        addToBasket(item){
          if(this.data.find( ({ roomID }) => roomID === item.roomID )){
            this.$q.notify({
              message: 'Room already in the basket',
              color: 'primary',
              position: 'bottom',
            })
          }else{
            let pushData = Object.assign({}, {
              roomName       : item.roomName    ,
              available      : item.available   ,
              description    : item.description ,
              capacity       : item.capacity    ,
              roomPrice      : item.roomPrice   ,
              additional     : item.additional  ,
              roomID         : item.roomID      ,
              numberOfNights : item.numberOfNights      ,
              quantity       : 1                ,
              total          : item.roomPrice
            });
            this.data.push(pushData);
          }
        },
        removeRow(index){
          this.data.splice(index, 1);
        }
      },
      mounted() {
        this.getRooms();
      },
      watch: {
        range: function (val) {
          this.data = [];
          this.getRooms();
        }
      },
      columns : [
        {name: 'roomName'   , required: true, label: 'Room Name'  , field: 'roomName'   , align: 'left'   , sortable: true},
        {name: 'quantity'   , required: true, label: 'Quantity'   , field: 'quantity'   , align: 'center'   , sortable: true},
        {name: 'roomPrice'  , required: true, label: 'Room Price' , field: 'roomPrice'  , align: 'center'   , sortable: true},
        {name: 'numberOfNights'  , required: true, label: 'Number Of Night/s' , field: 'numberOfNights'  , align: 'center'   , sortable: true},
        {name: 'total'      , required: true, label: 'Total'      , field: 'total'      , align: 'center'   , sortable: true},
      ]
    }
</script>

<style lang="scss">
.my-card {
  /*background: linear-gradient(to right, #ff00cc, #333399);*/
  background: $primary;
  padding-top: 100px;
}
</style>
