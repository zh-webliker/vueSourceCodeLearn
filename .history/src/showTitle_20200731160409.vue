<template>
  <div>
    <div v-for="(i,index) in treeList" :key="index">
      <div>{{i.title}}</div>
      <div v-if="i.childrenList">
        <showTitle :treeList='i.childrenList'></showTitle>
      </div>
    </div>
  </div>
</template>

<script>
import showTitle from './showTitle'
export default {
  props: {
    treeList: Array
  },
  components: {
    showTitle
  }
}
</script>

<style>

</style>