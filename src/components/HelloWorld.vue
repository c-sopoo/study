<template>
  <div class="hello">
    <el-button @click="login">按钮</el-button>
  </div>
</template>

<script>
// import Vue from 'vue'
// import {MessageBox} from 'element-ui'
import { requestLogin } from '../api/user'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    // Button
  },
  methods: {
    login () {
      requestLogin({ 'name': 'linjinze999',code:1 }).then(data=> this.$alert(data))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
