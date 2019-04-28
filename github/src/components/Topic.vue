<template>
  <v-container>
   <v-jumbotron color="blue-grey darken-3 lighten-1 white--text text-xs-center" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h1>My Interests</h1>
            <h2>Topics that I want to learn more about.</h2>
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
  </v-container>
</template>

<script>
    export default {
        data: () => ({})
  }
</script>

<style>
</style>
