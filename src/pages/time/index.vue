<template>
  <div>
    time
  </div>
</template>

<script>
import { timeBanner } from 'utils/api/advert'

export default {
  created () {
    this.getTimeBanner()
  },
  methods: {
    // 获取倒计时广告
    async getTimeBanner () {
      let data = await timeBanner()
      console.log('time')
      console.log(data)
    }
  }
}
</script>

<style>
</style>
