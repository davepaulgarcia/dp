<template>
    <div class="row" id="home">
      <q-card class="col-12 no-border-radius" flat>
        <!--<img src="statics/bg.png" height="800px">-->
        <q-parallax
          src="statics/bg.jpg"
          :height="800"
          :speed="1"
        >
          <div :class="`${$q.screen.lt.md ? 'text-h6' : 'text-h4'} text-white text-weight-thin`">Reservation And Billing System</div>
          <div class="text-h4 text-white">-<q-icon name="mdi-ribbon"/>-</div>
          <div class="text-subtitle2 text-white">by Dave Paul Garcia</div>
          <div class="q-pt-md">
            <q-btn label="Book Now" color="primary" outline @click="goToBook()"/>

          </div>
        </q-parallax>
        <q-card-section id="about" :class="`${$q.screen.lt.md ? '' : 'q-margin'} q-py-xl q-my-xl bg-primary`">
          <div class="row" >
            <div class="col-12 text-center text-white">
              <div :class="`${$q.screen.lt.md ? 'text-h6' : 'text-h4'} text-weight-thin`">About</div>
              <div class="text-h4 ">-<q-icon name="mdi-ribbon"/>-</div>
              <div class="text-subtitle2">About Reservation</div>
              <div class="text-subtitle1 text-justify text-weight-thin q-mx-lg q-pt-xl text-white">{{lorem}} {{lorem}} {{lorem}}</div>
            </div>
          </div>
        </q-card-section>
      <q-parallax
        src="statics/login-bg2.jpg"
        id="villas"
        :height="$q.screen.lt.md ? 2000 : 500"
        :speed="1"
      >
        <div class="row text-center">
          <div :class="`col-12 ${$q.screen.lt.md ? 'text-h6' : 'text-h4'} text-white text-weight-thin`">Our Rooms</div>
          <div class="col-12 text-h4 text-white">-<q-icon name="mdi-ribbon"/>-</div>
          <div class="col-12 row flex flex-center q-gutter-md">
            <div class="col-auto"></div>
            <div class="col-12 col-md-2 q-pt-xl" v-for="i in 4" :key="i">
              <q-card >
                <img src="https://cdn.quasar.dev/img/parallax1.jpg" class="opacity">

                <q-card-section>
                  <div class="text-h6">Room {{i}}</div>
                  <div class="text-subtitle2"></div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-auto"></div>
          </div>
        </div>
      </q-parallax>
        <q-card-section :class="`${$q.screen.lt.md ? '' : 'q-margin'} q-py-xl q-my-xl bg-primary`">
          <div class="row text-white" id="contact">
            <div class="col-12 text-center">
              <div :class="`${$q.screen.lt.md ? 'text-h6' : 'text-h4'} text-weight-thin`">Contact Us</div>
              <div class="text-h4">-<q-icon name="mdi-ribbon"/>-</div>
              <div class="text-h4 row q-gutter-md flex flex-center q-pt-xl">
                <div class="col-6 q-gutter-md row">
                  <q-input v-model="filter"
                           class="col-12"
                           outlined
                           bg-color="white"
                           placeholder="Full Name"
                           color="white"
                           dense="dense"/>
                  <q-input v-model="filter"
                           class="col-12"
                           outlined
                           bg-color="white"
                           placeholder="Email"
                           color="white"
                           dense="dense"/>
                  <q-input v-model="filter"
                           class="col-12"
                           type="textarea"
                           outlined
                           bg-color="white"
                           placeholder="Comment"
                           color="white"
                           dense="dense"/>
                  <q-btn label="send" class="col-12" color="white" flat/>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section :class="`bg-primary`">
          <div class="row text-white">
            <div class="col-12 text-center q-pt-xl">
              <div class="text-h4">-<q-icon name="mdi-ribbon"/>-</div>
              <div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
</template>

<script>
  import route from '../../router/route_names';
    export default {
        name: "LandingPage.vue",
      data: () => ({
        filter: '',
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }),
      methods:{
        goToBook(){
          this.$router.push({name: route.ROUTE_BOOK});
        }
      }
    }
</script>

<style lang="scss" scoped>
  .my-card{
    width: 100%;
    max-width: 250px;
  }
  .q-margin{
    margin-left: 200px;
    margin-right: 200px;
  }
  .opacity {
    opacity: 0.3;
    filter: alpha(opacity=50); /* For IE8 and earlier */
  }
</style>
