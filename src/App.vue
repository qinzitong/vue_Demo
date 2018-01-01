<template>
  <div id="app">
    hello world
    <v-head></v-head>
    <tab></tab>
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
  import VHead from 'components/v-header/v-header'
  import Tab from 'components/tab/tab'
  export default {
    components: {
      VHead,
      Tab
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/variable.styl"
  #app
    color: $color-theme;
</style>
