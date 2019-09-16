<template>
    <v-container fluid>
        <v-container>
            <v-layout justify-center wrap>
                <h3>Experience</h3>
            </v-layout>
            <v-layout class="my-8" justify-center wrap>
                <v-flex xs12 sm10>
                    <v-timeline>        
                        <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
                        <template v-slot:opposite>
                            <span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
                        </template>
                        <div class="py-3">
                            <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">{{year.title}}</h2>
                            <div :class="`${year.title}`">
                            {{year.description}}
                            </div>
                        </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>
<script>
  export default {
    data: () => ({
        
      years: [
        {
          color: 'orange',
          year: 'Apr 2019 - Sep 2019',
          title: 'ManyTours.com',
          description:'Designer and Frontend Developer at manytours.com.'
        },
        {
          color: 'green',
          year: 'Dec 2018 - Sep 2019',
          title: 'MaDj.club',
          description:'Designer and Frontend Developer at MaDj.club.'
        },
        {
          color: 'blue',
          year: 'Feb 2019 - Aug 2019',
          title: 'NOKIA.com',
          description: 'Web Developer at Nokia Solutions and Networks.'
        },
        {
          color: 'red',
          year: 'Sep 2018 - Apr 2019',
          title: 'Eotvos Lorand University',
          description: 'Research Assistant.'
        },
        {
          color: 'orange',
          year: '2015 - 2017',
          title: 'ponisha.com',
          description: 'Worked as freelance Developer.'
        }
      ]
    })
  }
</script>