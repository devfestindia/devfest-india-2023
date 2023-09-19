<template>
  <v-container fluid class="my-0">
    <v-row justify="center" align-items="center">
            <v-col md="6" cols="12" order-md="2" order="2">
        <!-- <div class="text-center" v-if="loading">
          <v-skeleton-loader
            style="border-radius: 15px;height: 360px !important"
            class="mx-auto"
            type="image"
          ></v-skeleton-loader>
        </div> -->
        <!-- <iframe
          v-show="!loading"
          @load="load"
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/K6W9Usve6hI"
          title="DevFest India 2022 is here!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="border-radius: 15px; border: 0px solid black"
        ></iframe> -->
        <img src="../../assets/img/devfest-about-banner.png" alt="devfest banner image" class="banner-img"/>
      </v-col>
      <v-col md="6" cols="12" order-md="1" order="1" class="pr-12">
        <p
          class="google-font gdg-h1 mb-4 grey--text text--darken-4"
          style="font-size: 320%"
        >
          Welcome to DevFest India 2023
        </p>
        <p class="google-font mt-3" style="font-size: 19px">
          <v-icon>mdi-calendar-month</v-icon> September - December
        </p>
        <p
          class="google-font text--secondary"
          style="font-weight: 500; font-size: 18px"
        >
        Welcome to the Global -Google Developer Groups annual event platform where our motto is to ensure that the technology connects to all corners of the world. 
It is an all day event where you can expect talks/Sessions/workshops/Hackathons.Do not miss the best tech events nearby your area and stay tuned!!
        </p>
        <v-btn dark depressed to="/devfest" rounded color="#4285F4"
          >Find a DevFest near you
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeroComponent",
  data: () => ({
    loading: true,
  }),
  methods: {
    load() {
      this.loading = false;
    },
  },
};
</script>

<style>
.banner-img {
  height: 350px;
}
@media only screen and (max-width: 768px) {
  .banner-img {
  height: auto;
  width: 100%;
}
}
</style>
