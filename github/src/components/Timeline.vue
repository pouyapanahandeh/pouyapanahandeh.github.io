<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 sm10>
          <v-timeline>        
            <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              small
            >
              <template v-slot:opposite>
                <span
                  :class="`headline font-weight-bold ${year.color}--text`"
                  v-text="year.year"
                ></span>
              </template>
              <div class="py-3">
                <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">Lorem ipsum</h2>
                <div :class="`${year.title}`">
                  
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      years: [
        {
          color: 'red',
          year: '2000',
          title: 'pooya inja 2'
        },
        {
          color: 'green',
          year: '1970',
          title: 'pooya inja 1'
        },
        {
          color: 'pink',
          year: '1980'
        },
        {
          color: 'amber',
          year: '1990'
        },
        {
          color: 'orange',
          year: '2000'
        }
      ]
    })
  }
</script>

<style>
</style>
