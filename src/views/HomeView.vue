<template>
  <v-main class="pa-0 ma-0">
    <!-- Hero -->
    <heroVue class="my-md-15" />
    <!-- Hero -->

    <!-- Overview -->
    <overviewVue/>
    <!-- Overview -->

    <!-- Technologies -->
    <technologiesVue class="my-15"/>
    <!-- Technologies -->

    <!-- social info -->
    <SocialInfo />
    <!-- social info -->
  </v-main>
</template>

<script>
import heroVue from "@/components/home/hero.vue";
import overviewVue from '@/components/home/overview.vue';
import technologiesVue from '@/components/home/technologies.vue';
import SocialInfo from '@/components/home/socialInfo.vue';


export default {
  name: "HomePage",
  components: {
    heroVue,
    overviewVue,
    technologiesVue,
    SocialInfo
  },
  data: () => ({
    
  }),
  created(){
    document.title = "DevFest India 2023";
  }
};
</script>
