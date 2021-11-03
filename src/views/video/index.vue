<template>
  <div class="login-container">
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    <!-- ul遍历大数组，li遍历 -->
    <ul v-for="number in sets" :key="number">
      <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
    </ul>
    <button @click="test">{{ testMsg }}</button>
    <div id="to-list-example">
      <form action="" @submit.prevent=""></form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoIndex',
  data () {
    return {
      numbers: [1, 2, 3, 4, 5],
      sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],
      testMsg: '原始值'
    }
  },
  computed: { // 想要显示一个数据经过过滤或排序后的版本，而不实际变更或重置原始数据
    evenNumbers () { // 可以使用计算属性，来返回过滤或排序后的数组
      return this.numbers.filter(number => number % 2 === 0)
    }
  },
  methods: {
    even (numbers) {
      return numbers.filter(number => number % 2 === 0)
    },
    test () {
      this.testMsg = '修改值'
      this.$nextTick(() => {
        console.log('1')
      })
      console.log('2')
    }
  }
}
</script>

<style>

</style>
