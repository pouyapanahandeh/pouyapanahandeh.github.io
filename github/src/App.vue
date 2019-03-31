<template>
  <v-app>    
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Hey! </span>
        <span class="font-weight-light">I'm pooya</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/pouyapanahandeh" round>
        Github
        <v-icon right>person_pin</v-icon>
      </v-btn>
    </v-toolbar>
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-layout align-center column justify-center>
          <h1 class="display-2 font-weight-thin mb-3"></h1>
          <h4 class="subheading"></h4>
        </v-layout>
    </v-parallax>
    <v-content>
      <Timeline/>
    </v-content>
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-layout align-center column justify-center>
          <h1 class="display-2 font-weight-thin mb-3"></h1>
          <h4 class="subheading"></h4>
        </v-layout>
    </v-parallax>
    <v-content>
      
      <HelloWorld/>
      <Footer/>
    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Timeline,
    Footer
  },
  data: () => ({
      
    })
}
</script>
