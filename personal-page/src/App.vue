<template>
  <v-app>
    <v-container>
      <NavBar />       
    </v-container>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data () {
      return {
        dialog: false,
      }
    },
};  
</script>
