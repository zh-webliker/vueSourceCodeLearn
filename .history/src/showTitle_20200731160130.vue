<template>
  <div>
    <div v-for="(i,index) in treeList" :key="index">
      {{i.title}}
    </div>
  </div>
</template>

<script>
import showTitle from 'showTitle'
export default {
  props: {
    treeList: Array
  }
}
</script>

<style>

</style>