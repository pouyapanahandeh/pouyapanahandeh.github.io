<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="510">
      <template v-slot:activator="{ on }">
        <v-layout row>
          <v-flex xs2> Welcome! </v-flex>
          <v-flex xs8></v-flex>
          <v-flex xs2><v-btn color="indigo" dark v-on="on">Contact me</v-btn></v-flex>
        </v-layout>
      </template>

      <v-card id="border">
        <v-card-text>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdfitzl1XNFCSI6o0ecvSxCtq4AaqOyEw_5AdOg9HPTZSWApw/viewform?embedded=true" width="500" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="indigo" text @click="dialog = false">
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>  
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
<style>
#border{
  border-radius: 15px;
}
</style>
