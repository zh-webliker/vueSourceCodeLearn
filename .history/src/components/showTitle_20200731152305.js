export default {
  name: 'App',
  prop: {
    treeList: {
      type: Array,
      default: []
    }
  },
  created () {
    // this.getTitle(this.treeList)
    console.log(this.treeList)
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
  render (h) {
    this.getTitle(this.treeList)
    return h('div', '11')
  }
}