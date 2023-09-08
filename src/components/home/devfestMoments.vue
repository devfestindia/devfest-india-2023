<template>
    <v-container fluid class="">
      <v-row>
        <v-col class="">
          <p
            class="google-font mb-2"
            style="font-size: 3.5vh;line-height: 1.22;font-weight:500"
          >
            devFest Moments'22 Shots
          </p>
          <p class="google-font" style="font-size: 110%">
          </p>
        </v-col>
      </v-row>
      <v-row class="ma-0 pa-0">
        <v-col md="12">
          <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item
              v-for="(item, index) in imgs"
              :key="index"
              style="height:400px"
              v-slot:default="{ active, toggle }"
            >
              <v-img
                class="ma-4"
                :color="active ? undefined : 'grey lighten-1'"
                :src="require('@/assets/img/2019/'+item.img)"
                style="width: 10%;"
                @click="toggle"
              ></v-img>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      model: null,
      imgs: [
        {
          name: "",
          img:"",
        },
        {
          name: "",
          img:
            "",
        },
        {
          name: "",
          img:
            "",
        },
         {
          name: "",
          img:
            "",
        },
      ],
    }),
  };
  </script>
  
