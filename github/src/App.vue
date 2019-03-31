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
        <v-icon right>fab fa-github</v-icon>
      </v-btn>
    </v-toolbar>
    <v-parallax dark :src="require('@/assets/imageOne.jpg')">
        <v-layout align-center column justify-center>
          <h1 class="display-2 font-weight-thick mb-3">Pouya Panahandeh</h1>
          <h4 class="subheading"></h4>
        </v-layout>
    </v-parallax>
    <v-content>
      <Timeline/>
    </v-content>
    <v-parallax dark :src="require('@/assets/imageTwo.jpg')">
        <v-layout align-center column justify-center>
          <h1 class="display-2 font-weight-thick mb-3">LET'S HAVE A CHAT</h1>
          <h2 class="subheading">Reach out and send me a friendly hello.</h2>
          <div align-center column justify-center>
            <v-btn href="" color="blue-grey lighten-1"  fab>
              <v-icon size="24px" fab>fab fa-linkedin</v-icon>
            </v-btn>
            <v-btn href="" color="blue-grey lighten-1"  fab>
              <v-icon size="24px">fab fa-twitter-square</v-icon>
            </v-btn>
            <v-btn href="" color="blue-grey lighten-1"  fab>
              <v-icon size="24px">fas fa-envelope-square</v-icon>
            </v-btn>            
          </div>
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
