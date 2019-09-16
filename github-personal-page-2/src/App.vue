<template>
  <v-app>
    <MainHeader />
    <v-content>
      <Introduction />
      <Education />
      <Experience />
      <Skills />
    </v-content>
    <Footerend />
  </v-app>
</template>

<script>
import MainHeader from './components/MainHeader';
import Introduction from './components/Introduction';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills'
import Footerend from './components/Footerend'
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {MainHeader, Introduction, Education, Experience, Skills, Footerend},
  data: () => ({
    //
  }),
};
</script>
