<template>
  <q-layout view="hHh lpR fff">
    <q-header class="bg-transparent text-grey" >
      <q-toolbar :class="$q.screen.lt.md ? '' : 'q-px-xl'" style="z-index: 1">
        <q-btn v-show="$q.screen.lt.md" icon="menu" color="white" round flat @click="leftDrawerOpen = !leftDrawerOpen"/>
        <q-icon name="mdi-image-filter-vintage" color="white" size="sm"/>
        <!--<span class="text-h6 text-white">Reserve</span>-->
        <q-toolbar-title class="flex flex-center">
          <div v-show="!$q.screen.lt.md">
            <q-icon name="mdi-ribbon" color="white"/>
            <q-btn type="a" href="#home" flat label="Home" color="primary" class="text-capitalize text-white"/>
            <q-btn type="a" href="#about" flat label="About" color="primary" class="text-capitalize text-white"/>
            <q-btn type="a" href="#villas" flat label="Rooms" color="primary" class="text-capitalize text-white"/>
            <q-btn type="a" href="#contact" flat label="Contact" color="primary" class="text-capitalize text-white"/>
            <q-icon name="mdi-ribbon" color="white"/>
          </div>
        </q-toolbar-title>
        <q-btn label="Sign In" color="primary" class="no-shadow text-capitalize text-white" flat/>
        <!--<q-icon name="mdi-ribbon" color="white"/>-->
      </q-toolbar>
      <q-page-scroller expand position="top"  :scroll-offset="150" :offset="[0, -50]">
        <div class="col q-pa-lg bg-primary shadow-10" />
      </q-page-scroller>
    </q-header>


    <q-drawer show-if-above
              v-if="$q.screen.lt.md"
              :width="250"
              v-model="leftDrawerOpen"
              side="left"
              content-class="background text-deep-purple-1">
      <q-list class="q-pt-md">
        <q-item exact-active-class="bg-deep-purple-4 text-white" clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="mdi-ribbon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item exact-active-class="bg-deep-purple-4 text-white" clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="mdi-ribbon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>
        <q-item exact-active-class="bg-deep-purple-4 text-white" clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="mdi-ribbon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Villas</q-item-label>
          </q-item-section>
        </q-item>
        <q-item exact-active-class="bg-deep-purple-4 text-white" clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="mdi-ribbon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Contact</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>


    <q-page-container style="padding-top: 0">
      <q-page>
        <router-view />
      </q-page>
      <!-- place QPageScroller at end of page -->
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
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
    export default {
        name: "LandingLayout.vue",
      data: () => ({
        leftDrawerOpen: false
      })
    }
</script>

<style lang="scss">
  html {
    scroll-behavior: smooth;
  }
  .background{
    background: rgb(138,109,194);
    background: linear-gradient(to bottom, rgba(138,109,194,1) 0%, rgba(106,86,157,1) 49%, rgba(85,70,131,1) 100%);
  }
</style>
