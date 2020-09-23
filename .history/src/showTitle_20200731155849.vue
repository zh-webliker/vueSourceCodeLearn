<template>
  <div>
    <div v-for="(i,index) in treeList" :key="index">
      {{i.title}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    treeList: Array
  }
}
</script>

<style>

</style>