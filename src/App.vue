<template>
  <v-app>
    <v-content>
      <Calender />
    </v-content>
  </v-app>
</template>

<script>
import Calender from './components/Calender.vue';

export default {
  name: 'App',
  components: {
    Calender
  },
  data: () => ({
    //
  }),
};
</script>
