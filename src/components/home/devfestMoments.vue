<template>
    <v-container fluid class="">
      <v-row>
        <v-col class="">
          <p
            class="google-font gdg-h1 mb-4 grey--text text--darken-4 text-center"
          >
            Devfest India Moments'22 Shots
          </p>
          <p class="google-font" style="font-size: 110%">
          </p>
        </v-col>
      </v-row>
      <v-row class="ma-0 pa-0">
        <v-col md="12">
          <v-carousel> 
            <div v-for="(item, index) in imgs" :key="index"> 
              <v-carousel-item>
         <div class="text-center" v-if="loading">
          <v-skeleton-loader
            style="border-radius: 15px;height: 360px !important"
            class="mx-auto"
            type="image"
          ></v-skeleton-loader>
        </div> 
        <iframe
          v-show="!loading"
          @load="load"
          width="100%"
          height="360"
          :src="item.src"
          title="DevFest India 2022 is here!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="border-radius: 15px; border: 0px solid black"
        ></iframe>
              </v-carousel-item>
            </div>
            </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      model: null,
      loading: true,
      imgs: [
        {
          src: "https://www.youtube.com/embed/K6W9Usve6hI"
        },
        {
          src: "https://www.youtube.com/embed/K6W9Usve6hI"

        },
        {
          src: "https://www.youtube.com/embed/K6W9Usve6hI"

        },
         {
          src: "https://www.youtube.com/embed/K6W9Usve6hI"

        },
      ],
    }),
    methods: {
    load() {
      this.loading = false;
    },
  },
  };
  </script>
  <style>
  .v-carousel__controls {
    display: none !important;
  }
</style>
  
