<template>
  <div>
    <header>
      <nav>audio是音频，video是视频！</nav>
      <nav>111</nav>
      <nav>111</nav>
      <nav>111</nav>
    </header>
    <div class="grid">
      <i>*_*</i>
      <i>*_*</i>
      <i>*_*</i>
      <i>*_*</i>
      <i>*_*</i>
      <i>*_*</i>
    </div>
    <!-- 如果是params，那就是一个键值对，如果是params。id就是值 -->
    <div>1{{this.$route.params.id}}</div>
    <div>2{{this.$route.query.id}}</div>
    <button @click="insurance()">查看详情</button>
    <button @click="insurance2(3)">查看详情2</button>
    <button @click="insurance3(4)">查看详情2,{{this.$route.query.id}}</button>
    <button @click="aaaa(obj)">cookie按钮</button>
    <textarea name="" id="" cols="30" rows="10">111111111111111</textarea>
    <div class="aaa"></div>
    <div class="div"></div>

    <!-- <div>
      <video src="http://www.baidu.com" id="music" @play="cccc"></video>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'QaIndex',
  data () {
    return {
      obj: {
        name: '张',
        age: '23',
        www: '123'
      },
      str: '111-222-3333'
    }
  },
  methods: {
    aaaa (str) {
      const reg = /^\d{3}\-\d{3}\-\d{4}$/
      console.log(reg)
      return reg.test(str)
      // 创建一个正则表达式对象，设置他的规则，，拿他来测试一个数组
      // const reg = new RegExp(/([a-z])\1/gi)  // \1代表第一个括号的内容，的重复
      // return reg.test(str)
      // const arr = []
      // console.log(Object.keys(obj))
      // Object.keys(obj).forEach(key => {
      //   arr.push(key + ':' + obj[key])
      // })
      // return arr
      // const copy = (text) => navigator.clipboard.writeText(text)
      // copy('helloworld')
      // console.log(copy)
      // console.log(document.cookie)
      // const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift()
      // cookie('_ga')
      // console.log('cookie:', cookie('_ga'))
      // this.$router.push({ // 带有路径的对象
      //   path: '/particular3/aaaa',
      //   query: {
      //     id: 'qqqq'
      //   }
      // })
      // this.$router.push('/particular3?id=aaaa') // 字符串路径
      // const acticle:
      // this.$router.push({
      //   name: 'particular3',
      //   params: {
      //     id: this.$route.params.id
      //   }
      // })
      // var a = this.$route.params
      // console.log(a)
      // var b = this.$route.query.id
      // console.log(b)
    },
    insurance () {
      const obj = { // 如果一个变量再声明时才被赋值，应该用const
        a: 1,
        b: 2
      }
      if (!obj) {
        throw new Error('参数不能为空11')
      }
      const q = () => {
        throw new Error('参数不能为空11')
      }
      const p = (obj, ooo = q) => {
        obj.filter(num => num === ooo)
      }
      console.log(p)
      console.log('obj:', obj)
      const findStudentByAge = (arr, age) => {
        if (age) throw new Error('参数不能为空')
        return arr.filter(num => num === age)
      }
      console.log(findStudentByAge)
      function aaa ({ a, b }) {
        console.log(`两个数是${a}和${b}`)
      }
      // const aaa = ({ a, b }) => {
      //   console.log(`两个数是${a}和${b}`)
      // }
      console.log('11', aaa)
      const values = []
      for (var key in obj) {
        console.log('大一key', key)
        values.push(obj[key])
      }
      const a = [12, 13, 23, 33, 44, 20]
      const b = 20
      const c = (a, b) => a.filter(num => num === b)
      // const d = (a, b) => a.filter(num => num === b)
      console.log(a, b)
      console.log(c)

      // const values = Object.values(obj)
      // console.log(values)
    },
    insurance2 (id) {
      this.$router.push({
        name: 'particular2',
        params: {
          id: id
        }
      })
    },
    insurance3 (id) {
      this.$router.push({
        path: '/particular2',
        query: {
          id: id
        }
      })
    }
    // cccc () {
    //   var music = document.getElementById('music')
    //   var state = 0
    //   document.addEventListener('touchstart', function () {
    //     if (state === 0) {
    //       music.play()
    //       state = 1
    //     }
    //   }, false) // true为捕获，false为冒泡
    // }
  },
  mounted () {
    // this.cccc()
  },
  created () {
    import('./a.js').then(data => { // import支持动态导入，返回的是一个promise，也就是。then
      console.log('data:', data)
      console.log('222', data.a)
    })
  }
}
</script>

<style>

.grid{
  border: 1px solid var(--content-color);
  display: grid;
  grid-template-columns: 1fr 500px 1fr;
}
:root {
  /* 设定键值对，用var，变量的变量 */
  --r: 255;
  --g: 0;
  --b: 0;
  --content-color:rgb(var(--r), var(--g), var(--b));
  /* :root 选择器匹配文档根元素html */
  /* --text-color: red */
}
.aaa{
  /* 做一个三角形角标，把边界看成是一个正方形，对角线分成4个，它就又了四个三角形角标嘛，那么只需要全体透明，在局部显示就可以做成牧歌方向的三角形角标了。 */
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-left-color: red;
}
.div {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: red;
}
#music{
  width: 100px;
  height: 100px;
}
</style>
