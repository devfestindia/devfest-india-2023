<template>
  <v-container fluid>
    <v-row justify="center" align-items="center" class="px-2" style=" border-radius: 15px">
      <v-col
        md="6"
        cols="12"
        class="text-center pa-md-10 pt-4"
        style="background-color: white"
      >
        <!-- <p
          class="google-font gdg-h1 mb-4 grey--text text--darken-4"
          style="font-size: 220%"
        >
          What to Expect
        </p>
        <p
          class="google-font text--secondary"
          style="font-weight: 500; font-size: 17px"
        >
          An annual event hosted by the Google Developers Group across the world
          to bring the technology closer to the developers. It is an all day
          developer conference where we aim to focus on multiple technologies
          through lightning talks, sessions, workshops, etc.
        </p> -->
        <img src="../../assets/img/devfest-expect.svg" style="width:100%" />
        <p>If you are a student/professional/entrepreneur, or wantrapreneur who feels that technical knowledge and expertise will boost your skill - then Devfest is 1 stop place for excellency. 

Come here to meet/learn and excell with all the experts</p>
      </v-col>

      <v-col md="6" class="pa-0 ma-0 pl-8"  style="background-color: white;">
        <v-container fluid class="google-font px-0">
          <!-- <v-row align="start">
            <v-col md="3" cols="12" sm="4" v-for="(item, index) in whatWedo" :key="index">
              <div class="pa-md-6 pa-4" style="background-color: white; border-radius: 15px">
                <p style="font-size: 20px; font-weight: 600" class="mt-4">
                  {{ item.title }}
                </p>
                <p>{{ item.desc }}</p>
              </div>
            </v-col>
          </v-row> -->
          <div v-for="(item, index) in whatWedo" :key="index" class="d-flex">
            <div class="pt-12">
              <img :src="require(`../../assets/img/${item.icon}`)" />
            </div>
            <div class="pa-md-6 pa-4">
                <p style="font-size: 20px; font-weight: 600" class="mt-4">
                  {{ item.title }}
                </p>
                <p>{{ item.desc }}</p>
              </div>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OverviewComponent",
  data: () => ({
    whatWedo: [
      {
        title: "Technical content",
        size: "15%",
        icon: "tech-content.svg",
        img: "https://developers.google.com/community/devfest/images/conference.svg",
        desc: "Worldwide events hosted by the Google Developer Groups community, featuring leading experts on Google technologies in areas like Android, Firebase, Flutter, Machine Learning and so much more",
      },
      {
        title: "Workshops",
        size: "15%",
        icon: "workshops.svg",
        img: "https://developers.google.com/community/devfest/images/workshops.svg",
        desc: "Full-day workshops, hands-on experiences, hacking and debugging events, all centered on your favorite Google technologies.",
      },
      {
        title: "Networking",
        size: "15%",
        icon: "networking.svg",
        img: "https://developers.google.com/community/devfest/images/networking.svg",
        desc: "Meet and connect with other developers in your community.",
      }
    ],
  }),
};
</script>

<style>
</style>
