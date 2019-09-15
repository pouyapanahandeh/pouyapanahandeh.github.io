<template>
  <v-app>
    <MainHeader />
    <v-content>
      <Introduction />
      <Education />
    </v-content>
    <!-- <HelloWorld/> -->
  </v-app>
</template>

<script>
import MainHeader from './components/MainHeader';
import Introduction from './components/Introduction';
import Education from './components/Education';
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {MainHeader, Introduction, Education},
  data: () => ({
    //
  }),
};
</script>
