<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/personalPicture.jpg')" id="avatar" class="my-4" contain height="150"></v-img>
      </v-flex>
    </v-layout>
    <v-layout text-center wrap>
      <v-flex mb-4>
        <h2>
          Pooya Panahandeh
        </h2>
        <p>
          <v-icon color="light-blue lighten-1">mdi-map-marker</v-icon> Budapest, Hungary <v-icon color="light-blue lighten-1">mdi-cellphone-android</v-icon>+36 20 3302131  
        </p>
      </v-flex>
    </v-layout>
    
    <v-layout wrap>
      <v-flex mb-5 xs12 >
        <v-layout justify-center>
          <a href="https://www.linkedin.com/in/pouyapan/">
            <v-icon color="blue darken-1">mdi-linkedin-box</v-icon>
          </a>
          <a href="https://stackoverflow.com/users/6927069/pooya-panahandeh">
            <v-icon color="orange lighten-1">mdi-stack-overflow</v-icon>
          </a>
          <a href="https://www.instagram.com/panahandehpooya/">
            <v-icon color="red darken-1">mdi-instagram</v-icon>
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
</script>
<style>
a{
  text-decoration: none;
}
</style>