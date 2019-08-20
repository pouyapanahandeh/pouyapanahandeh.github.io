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
    <v-jumbotron color="blue-grey darken-3 lighten-1 white--text text-xs-center" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h4 class="display-2">Pouya Panahandeh</h4>
            <h4 class="display-1">
              <v-chip color="indigo" text-color="white">
                <v-avatar>
                  <v-icon>fab fa-python</v-icon>
                </v-avatar>
                python
              </v-chip>
              <v-chip color="indigo" text-color="white">
                <v-avatar>
                  <v-icon>fab fa-node-js</v-icon>
                </v-avatar>
                node-js
              </v-chip>
              <v-chip color="indigo" text-color="white">
                <v-avatar>
                  <v-icon>fab fa-js-square</v-icon>
                </v-avatar>
                javaScript
              </v-chip>
              <v-chip color="indigo" text-color="white">
                <v-avatar>
                  <v-icon>fab fa-vuejs</v-icon>
                </v-avatar>
                Vue
              </v-chip>
              <v-chip color="indigo" text-color="white">
                <v-avatar>
                  <v-icon>fab fa-react</v-icon>
                </v-avatar>
                react
              </v-chip>
              <v-chip color="indigo" text-color="white">
                <v-avatar>
                  <v-icon>fab fa-java</v-icon>
                </v-avatar>
                Java
              </v-chip>
            </h4>
            <h4 class="display-1">
              <v-chip color="primary" text-color="white">
                Budapest, Hungary
                <v-icon right>fas fa-street-view</v-icon>
              </v-chip>
            </h4>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-content>
      <Timeline/>
    </v-content>
        <v-parallax dark :src="require('@/assets/imageOne.jpg')">
        <v-layout align-center column justify-center>
          <v-content>
            <HelloWorld/>
          </v-content>
        </v-layout>
    </v-parallax>
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
      <Topic/>
    </v-content>
    <v-content>
      <Footer/>
    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Timeline from './components/Timeline'
import Topic from './components/Topic'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Timeline,
    Topic,
    Footer
  },
  data: () => ({
      
    })
}
</script>
