<template>
  <div class="main-page">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/main-header'
import Footer from '@/components/main-footer'
export default {
  data() {
    return {}
  },
  components: {Header, Footer},
  methods: {
  
  }
}
</script>

