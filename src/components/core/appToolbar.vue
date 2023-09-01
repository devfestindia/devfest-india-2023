<template>
    <v-app-bar
      flat
      fixed
      app
      class="px-5"
      color="white"
    >
      <v-app-bar-nav-icon class="d-md-none d-lg-none" @click="toggleDrawer"></v-app-bar-nav-icon>
  
      <v-toolbar-title class="mr-4 px-0 google-font">
        <router-link to="/" style="text-decoration: none; font-size: 100%">
          DevFest India
        </router-link>
      </v-toolbar-title>
  
      <div class="hidden-sm-and-down">
        <v-btn rounded text small class="mr-1" color="primary" to="/communities"
          >Communities</v-btn
        >
        <v-btn rounded text small class="mr-1" color="primary" to="/team"
          >Team</v-btn
        >
        <!-- <v-btn rounded text small class="mr-1" color="primary" to="/bootcamps"
          >Bootcamp</v-btn
        > -->
        <v-btn rounded text small class="mr-1" color="primary" to="/about"
          >About</v-btn
        >
      </div>
  
      <v-spacer></v-spacer>
  
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
  
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
  
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
      <!-- <v-list class="py-0 my-0 hidden-sm-and-down" >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://picsum.photos/200/"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>Test</v-list-item-title>
            <v-list-item-subtitle>Test lasdas</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
      <v-btn rounded depressed small color="primary" target="_blank" href="https://bootcamp.techferment.com"
          >Bootcamp</v-btn
        >
    </v-app-bar>
  </template>
  
  <script>
  export default {
    methods:{
      toggleDrawer() {
        this.$store.commit("TOGGLE_DRAWER");
      },
    }
  };
  </script>
  
  <style>

  </style>