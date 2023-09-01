<template>
  <v-app style="background-color: #F3F6FB">
    <appToolbarVue/>
    <v-main class="">
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col md="10">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
     
    </v-main>
    <appFooterVue/>
  </v-app>
</template>

<script>
import appFooterVue from './components/core/appFooter.vue';
import appToolbarVue from './components/core/appToolbar.vue';
export default {
  name: 'App',
  components:{
    appToolbarVue,
    appFooterVue
  },
  data: () => ({
    //
  }),
};
</script>
