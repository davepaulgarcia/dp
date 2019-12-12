<template>
  <q-page class="q-pa-lg">
    <div :class="`row ${$q.platform.is.mobile ? 'q-gutter-y-md' :'q-gutter-md'}`">
      <q-card class="col-md col-12" v-for="item in 4" :key="item">
        <q-card-section class="row">
          <span class="col">Sales</span>
            <q-btn icon="mdi-dots-horizontal"  flat round size="sm" color="primary"/>
        </q-card-section>
        <q-card-section class="q-pa-none">
            <q-line-chart style="max-height: 150px"/>
        </q-card-section>
      </q-card>
    </div>
    <!--<div class="q-pt-lg">-->
      <!--<q-card>-->
        <!--<q-card-section class="row">-->
          <!--<span class="col">Sales</span>-->
          <!--<q-btn icon="mdi-dots-horizontal"  flat round size="sm" color="primary"/>-->
        <!--</q-card-section>-->
        <!--<q-card-section class="q-pa-none">-->
          <!--<q-line-chart style="max-height: 150px"/>-->
        <!--</q-card-section>-->
      <!--</q-card>-->
    <!--</div>-->
    <div class="q-pt-lg">
      <q-card>
        <q-card-section>
          <q-toolbar>
            <span class="text-h5">Calendar</span>
            <q-toolbar-title class="flex flex-center">

            </q-toolbar-title>
            <q-btn stretch flat icon="mdi-chevron-left" color="primary" @click="calendarPrev" />
            <q-separator vertical />
            <q-btn stretch flat icon="mdi-chevron-right" color="primary" @click="calendarNext" />
          </q-toolbar>
        </q-card-section>
        <q-card-section style="overflow: auto">
          <q-calendar
            ref="calendar"
            v-model="selectedDate"
            class="bg-white"
            view="month"
            animated
            transition-prev="slide-right"
            transition-next="slide-left"
            style="height: 500px; overflow: hidden"
            locale="en-us"
          />
        </q-card-section>
      </q-card>

    </div>

  </q-page>
</template>

<script>
  import QLineChart from "../../components/QLineChart";
    export default {
      name: "DashboardPage.vue",
      components:{
          QLineChart
      },
      data: () => ({
        selectedDate: ''
      }),
      methods: {
        calendarNext () {
          this.$refs.calendar.next()
        },
        calendarPrev () {
          this.$refs.calendar.prev()
        }
      }
    }
</script>

<style scoped>

</style>
