<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      treeList: [
        {
          title: 'title1',
          childrenList: [
            {title: 'title1-1'},
            {title: 'title1-2'},
            {title: 'title1-3'},
            {
              title: 'title1-4',
              childrenList: [
                {title: 'title1-4-1'},
                {title: 'title1-4-2'},
              ]
            },
          ]
        },
        {
          title: 'title2',
          childrenList: [
            {title: 'title2-1'},
            {title: 'title2-2'},
            {
              title: 'title2-3',
              childrenList: [
                {title: 'title2-3-1'},
                {title: 'title2-3-2'},
              ]
            },
            {
              title: 'title2-4',
              childrenList: [
                {title: 'title2-4-1'},
                {title: 'title2-4-2'},
              ]
            },
          ]
        },
      ],
    }
  },
  created () {
    this.getTitle(this.treeList)
  },
  methods: {
    getTitle (list) {
      for (let i = 0; i < list.length; i++) {
        console.log(list[i].title)
        
        if (list[i].childrenList) {
          this.getTitle (list[i].childrenList)
        }
      }
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
