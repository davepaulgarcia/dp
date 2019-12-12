<template>
  <q-page class="q-pa-lg flex flex-center">
    <q-card class="shadow-17">
      <q-card-section class="q-pa-lg flex flex-center row">
       <q-icon class="col-12" name="mdi-account-circle" size="20" style="font-size: 7rem;" color="primary"/>
        <span class="col-12 text-center text-h5 text-weight-bold">
          SignIn
        </span>
        <span class="col-12 text-center">
          Enter your Credentials Below
        </span>
      </q-card-section>
      <q-card-section class="row q-gutter-y-md">
          <div class="col-12">
            <q-input v-model="userForm.username"
                     rounded
                     :disable="isLoading"
                     error-message="username is required"
                     :error="$v.userForm.username.$error"
                     hint="username is required"
                     dense
                     outlined
                     placeholder="Username">
              <template v-slot:prepend>
                <q-icon
                  name="mdi-account-outline"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>

        <div class="col-12">
          <q-input v-model="userForm.password"
                   rounded
                   dense
                   :disable="isLoading"
                   error-message="password is required"
                   :error="$v.userForm.password.$error"
                   hint="password is required"
                   :type="isPwd ? 'password' : 'text'"
                   outlined
                   placeholder="Password">
            <template v-slot:prepend>
              <q-icon
                name="mdi-lock-outline"
                class="cursor-pointer"
              />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
      </q-card-section>
      <q-separator/>
      <q-card-section class="q-py-xl">
        <q-btn color="primary" label="Login" :loading="isLoading" class="text-capitalize full-width" @click="loginUser()"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
  import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
  import route from '../../router/route_names'
  export default {
      name: "LogInPage.vue",
      data: ()=> ({
        filter: '',
        isLoading: false,
        isPwd: true,
        userForm: {
          username: '',
          password: '',
          address: {
            street: '2'
          }
        }
      }),
    validations:{
      userForm: {
        username   : {required},
        password   : {required},
      }
    },
    methods:{
      async loginUser(){
        this.$v.userForm.$touch();
        if(!this.$v.userForm.$error){
          this.isLoading = true;
          let data = await this._insertData('backend/log-in', this.userForm);
           if(data.message === "Success"){
             localStorage.setItem("user", data.userDetails.username);
             this.$router.push({name: route.ROUTE_ADMIN_DASHBOARD});
           } else {
             this.$q.notify({
               message: data.message,
               color: 'primary',
               position: 'bottom',
             })
           }
          this.isLoading = false;
        }
      },
    }
  }
</script>

<style scoped>

</style>
