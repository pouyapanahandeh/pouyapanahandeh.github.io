<template>
  <v-app>
    <MainHeader />
    <v-content>
      <Introduction />
    </v-content>
    <!-- <HelloWorld/> -->
  </v-app>
</template>

<script>
import MainHeader from './components/MainHeader';
import Introduction from './components/Introduction';
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {MainHeader, Introduction},
  data: () => ({
    //
  }),
};
</script>
