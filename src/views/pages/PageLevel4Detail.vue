<template>
  <div>
    详情页id：{{ id }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style>

</style>