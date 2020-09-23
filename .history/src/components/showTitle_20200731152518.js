export default {
  name: 'App',
  props: {
    treeList: Array
  },
  created () {
  },
  methods: {
    getTitle (list) {
      for (let i = 0; i < list.length; i++) {
        render (h) {
          return h('div', list[i].title)
        }
        console.log(list[i].title)
        if (list[i].childrenList) {
          this.getTitle (list[i].childrenList)
        }
      }
    },
  },
  render (h) {
    this.getTitle(this.treeList)
    return h('div', '11')
  }
}