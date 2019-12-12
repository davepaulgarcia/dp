<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="bg-white text-grey q-pt-sm" style="height: 70px;">
      <q-toolbar>
        <!--<q-btn-->
          <!--flat-->
          <!--dense-->
          <!--round-->
          <!--@click="leftDrawerOpen = !leftDrawerOpen"-->
          <!--icon="far fa-clipboard"-->
          <!--color="primary"-->
          <!--aria-label="Menu"-->
        <!--/>-->
        <!--<div class="q-pl-md text-subtitle1 text-weight-bold">-->
          <!--Summary-->
        <!--</div>-->
        <q-btn flat round icon="mdi-bell-outline" color="primary"/>
        <q-btn flat round icon="mdi-settings" color="primary"/>
        <q-btn flat round icon="mdi-email-outline" color="primary"/>
        <q-toolbar-title>
        </q-toolbar-title>
        <q-btn flat round icon="account_circle" color="primary"/>
        <q-btn flat round icon="menu" class="mobile-only" @click="leftDrawerOpen = !leftDrawerOpen" color="primary"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      show-if-above
      content-class="background text-deep-purple-1"
    >
      <q-scroll-area style="height: 100%;">
      <q-card flat style="border-radius: 0" class="bg-transparent">
        <q-card-section class="text-center">
          <h5 class="q-ma-md text-weight-bold">Reserve</h5>
        </q-card-section>
      </q-card>

      <q-list class="q-pt-md">
        <div class="q-mx-md q-my-sm" v-for="(item, key) in drawerData" :key="key">
          <q-expansion-item
            v-if="item.hasOwnProperty('subItems')"
            expand-separator>
            <template v-slot:header>
              <q-item-section avatar>
                <q-icon :color="item.color" :name="item.icon" />
              </q-item-section>

              <q-item-section>
                {{item.label}}
              </q-item-section>

            </template>
            <q-item v-for="subItem in item.subItems"
                    :key="subItem.label"
                    exact-active-class="bg-deep-purple-4 text-white"
                    :to="{name: subItem.route}" clickable>
              <q-item-section avatar>
                <span class="q-ml-md">{{subItem.icon}}</span>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{subItem.label}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-item v-else  exact-active-class="bg-deep-purple-4 text-white" :to="{name: item.route}" clickable>
            <q-item-section avatar>
              <q-icon :color="item.color" :name="item.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{item.label}}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>

      <q-list class="q-pt-xl">
        <q-item class="q-mx-md q-my-sm" clickable v-for="(item, key) in drawerData2" @click.native="signOut" :key="key">
          <q-item-section avatar>
            <q-icon :color="item.color" :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      </q-scroll-area>

    </q-drawer>

    <q-page-container>
      <q-page class="bg-deep-purple-1">
        <keep-alive>
          <router-view />
        </keep-alive>
      </q-page>
    </q-page-container>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>
        © 2019, made by Dave Paul Garcia
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import route from "../router/route_names";
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      drawerData: [
        {label: 'Dashboard'    , icon: 'home'                , color: 'white'    ,route: route.ROUTE_ADMIN_DASHBOARD},
        {label: 'Transactions' , icon: 'mdi-bulletin-board'  , color: 'orange-2' , subItems: [

            { label: 'Pending'     , icon: 'P', color: 'white' ,route: route.ROUTE_ADMIN_PENDING},
            { label: 'Reserved'    , icon: 'R', color: 'white' ,route: route.ROUTE_ADMIN_RESERVED},
            { label: 'Checked-In'  , icon: 'C', color: 'white' ,route: route.ROUTE_ADMIN_CHECKED_IN},
            { label: 'Checked-Out' , icon: 'C', color: 'white' ,route: route.ROUTE_ADMIN_CHECKED_OUT},

          ]},
        {label: 'Villas'   , icon: 'mdi-bank'              , color: 'green-12'    ,route: route.ROUTE_ADMIN_VILLAS},
        {label: 'Discount' , icon: 'mdi-tag-text-outline'  , color: 'secondary'   ,route: route.ROUTE_ADMIN_DISCOUNT},
        {label: 'Accounts' , icon: 'mdi-account-multiple'  , color: 'blue-2'      ,route: route.ROUTE_ADMIN_ACCOUNT},
        {label: 'Billing'  , icon: 'mdi-wallet'            , color: 'red-2'       ,route: route.ROUTE_ADMIN_BILLING},
        {label: 'Reports'  , icon: 'mdi-chart-line-variant', color: 'primary'     ,route: route.ROUTE_ADMIN_REPORT},
      ],
      drawerData2:[
        {label: 'Forum'    , icon: 'mdi-message-bulleted' , color: 'indigo-11'},
        {label: 'Settings' , icon: 'fa fa-wrench'         , color: 'purple-11'},
        {label: 'Logout'   , icon: 'mdi-arrow-expand-up'  , color: 'amber-12'},
      ]
    }
  },
  methods:{
    signOut() {
      localStorage.removeItem('user');
      this.$router.push({name: route.ROUTE_LOG_IN});
    }
  }
}
</script>
<style lang="scss">
  .background{
    background: rgb(138,109,194);
    background: linear-gradient(to bottom, rgba(138,109,194,1) 0%, rgba(106,86,157,1) 49%, rgba(85,70,131,1) 100%);
  }
</style>
