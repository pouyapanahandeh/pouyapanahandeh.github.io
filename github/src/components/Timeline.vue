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
                  {{year.description}}
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
          year: '2014 - 2017',
          description:'abdol karim'
        },
        {
          color: 'green',
          year: '2014 - 2015',
          description:'abdol saghir'
        },
        {
          color: 'pink',
          year: '2017 - present',
          description: 'abdol majid'
        },
        {
          color: 'amber',
          year: '2018 - present',
          description: 'abdol rahim'
        },
        {
          color: 'orange',
          year: '2000',
          description: 'abdol satar'
        }
      ]
    })
  }
</script>

<style>
</style>
