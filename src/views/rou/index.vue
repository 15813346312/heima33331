<template>
<div>
   <div>12{{this.$route.params.id}}</div>
  <div>23{{this.$route.query.id}}</div>
  <button @click="aaaa">按钮,{{this.$route.query.id}}</button>
</div>
</template>

<script>
export default {
  name: 'q',
  methods: {
    aaaa () {
      this.$router.push({ // 带有路径的对象
        path: '/particular3/aaaa#car',
        query: {
          id: 'qqqq'
        }
      })
    }
  }
}
</script>

<style>

</style>
