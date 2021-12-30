<template>
  <div>
    <div v-if="!repoName">loading...</div>
    <div v-else>
      most star repo is <a :href="repoUrl">{{ repoName }}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      repoName: '',
      repoUrl: '',
    }
  },
  mounted() {
    // 使用vue-resource发送ajax请求
    // this.$http
    //   .get('https://api.github.com/search/repositories?q=v&sort=stars')
    //   .then((response) => {
    //     const result = response.data
    //     const { name, html_url } = result.items[0]
    //     this.repoName = name
    //     this.repoUrl = html_url
    //   })
    //   .catch((error) => alert('请求出错'))

    // axios
    //   .get('https://api.github.com/search/repositories', {
    //     params: {
    //       q: 'v',
    //       sort: 'stars',
    //     },
    //   })
    //   .then((response) => {
    //     const result = response.data
    //     const { name, html_url } = result.items[0]
    //     this.repoName = name
    //     this.repoUrl = html_url
    //   })
    //   .catch((error) => alert('请求出错'))

     axios
      .get('/api/repositories/vue')
      .then((response) => {
        const result = response.data
        const { name, html_url } = result.data
        this.repoName = name
        this.repoUrl = html_url
      })
      .catch((error) => alert('请求出错'))
  },
  methods: {},
  watch: {},
}
</script>

<style scoped>
</style>