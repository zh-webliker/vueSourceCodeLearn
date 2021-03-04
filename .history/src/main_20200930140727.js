// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 新创建一个vue
import YourVue from './instance'
new YourVue({
  el: '#app',
  data: {
    count: 0
  },
  template: `
    <div>
      <div>{{count}}</div>
      <button @click='addCount>addClick</button>
    </div>
  `,
  methods: {
    addCount () {
      const count = this.count + 1
      this.setState({
        count
      })
    }
  }
})
