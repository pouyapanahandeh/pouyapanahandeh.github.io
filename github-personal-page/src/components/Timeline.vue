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
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida placerat nisl sed porttitor.'
        },
        {
          color: 'green',
          year: '2014 - 2015',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida placerat nisl sed porttitor.'
        },
        {
          color: 'pink',
          year: '2017 - present',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida placerat nisl sed porttitor.'
        },
        {
          color: 'amber',
          year: '2018 - present',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida placerat nisl sed porttitor.'
        },
        {
          color: 'orange',
          year: '2000',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida placerat nisl sed porttitor.'
        }
      ]
    })
  }
</script>

<style>
</style>
