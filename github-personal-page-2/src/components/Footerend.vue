<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="blue darken-1">
        <strong class="subheading">Get connected with me!</strong>

        <div class="flex-grow-1"></div>

        <v-btn to="https://docs.google.com/forms/d/e/1FAIpQLSdfitzl1XNFCSI6o0ecvSxCtq4AaqOyEw_5AdOg9HPTZSWApw/viewform?usp=sf_link">
          <v-icon size="24px">mdi-contact-mail-outline</v-icon>
          &nbsp; Contact me
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        {{ new Date().getFullYear() }} — Made with &nbsp; <v-icon>mdi-heart-flash</v-icon> 
      </v-card-actions>
    </v-card>
  </v-footer>
</template>