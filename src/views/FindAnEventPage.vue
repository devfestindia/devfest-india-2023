<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col md="12">
          <p class="google-font gdg-heading mb-0 grey--text text--darken-4">
            DevFests in India
          </p>
          <p class="my-0 mb-8 h1-subheading google-font">
            Communities from each chapter, all over the India have gathered
            together to make India DevFest a success. Locate your nearest google
            developer group and join the event right here!
          </p>
        </v-col>
      </v-row>

      <!-- Upcoming DevFest -->
      <v-row align="start" justify="start">
        <v-col md="3" sm="6" v-for="(item, index) in data" :key="index">
          <devFestInfoDialogeVue :item="item" />
        </v-col>
      </v-row>
      <!-- Upcoming DevFest -->

      <p>Past DevFests</p>
      <v-row align="start" justify="start">
        <v-col
          md="3"
          sm="6"
          v-for="(item, index) in PassedDevFests"
          :key="index"
        >
          <devFestInfoDialogeVue :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import devFestInfoDialogeVue from "@/components/common/devFestInfoDialoge.vue";
import devfestData from "../assets/data/devfests.json";

export default {
  name: "CoCComponent",
  components: {
    devFestInfoDialogeVue,
  },
  data: () => ({
    data: [],
    PassedDevFests: [],
  }),
  mounted() {
    const PassedEvents = devfestData.filter((i) => {
      return new Date(i.StartingDate) - new Date().setHours(0, 0, 0, 0) < 0;
    });
    this.PassedDevFests = PassedEvents;
    const ToBeHeldEvents = devfestData.filter((i) => {
      return new Date(i.StartingDate) - new Date().setHours(0, 0, 0, 0) >= 0;
    });
    const sortedToBeHeldEvents = ToBeHeldEvents.sort((a, b) => {
      return new Date(a.StartingDate) - new Date(b.StartingDate);
    });
    // const results = [...sortedToBeHeldEvents, ...PassedEvents];
    const results = [...sortedToBeHeldEvents];
    this.data = results;
  },
  created() {
    document.title = "DevFests in India | DevFest India 2022";
  },
};
</script>

<style>
</style>