<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="blue darken-1">
        <strong class="subheading">Get connected with me!</strong>

        <div class="flex-grow-1"></div>
          <v-dialog v-model="dialog" width="600">
            <template v-slot:activator="{ on }">
              <v-btn color="" dark v-on="on">
                <v-icon>mdi-contact-mail-outline</v-icon>
                &nbsp;
                Contact Me!
              </v-btn>
            </template>

            <v-card>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdfitzl1XNFCSI6o0ecvSxCtq4AaqOyEw_5AdOg9HPTZSWApw/viewform?embedded=true" width="600" height="720" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </v-card>
          </v-dialog>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        {{ new Date().getFullYear() }} — Made with &nbsp; <v-icon>mdi-heart-flash</v-icon> 
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>