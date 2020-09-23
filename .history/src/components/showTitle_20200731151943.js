export default {
  name: 'App',
  prop: {
    treeList: {
      type: Object,
      default: {}
    }
  },
  created () {
    // this.getTitle(this.treeList)
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
  render () {
    this.getTitle(this.treeList)
    
  }
}