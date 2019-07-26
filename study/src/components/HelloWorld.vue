
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- 帶html格式 -->
    <div v-html="html">

    </div>
    
    <!-- 1.自定义指令 -->
    <div v-test='5'>

    </div>



   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      html: '<a href="www.baidu.com">百度一下</a>'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
