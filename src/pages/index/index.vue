<template>
  <div class="container">
    <button @click="showHandler">点我打开</button>
    <comModal @closeModal="closeModal" :isShow="is_show">
      <span slot="title">点击x关闭</span>
      <div slot="content">
        <div  v-for="(item,index) in 2" :key="index">
          我是内容
        </div>
      </div>
    </comModal>
    <rich-text :nodes="content"></rich-text>
  </div>
</template>

<script>
import comModal from '@/components/model'

export default {
  data () {
    return {
      content: `<div style="color:red">测试html</div>`,
      is_show: false
    }
  },
  mounted () {
    console.log('Index')
  },

  components: {
    comModal
  },

  methods: {
    closeModal () {
      this.is_show = false
    },
    showHandler () {
      this.is_show = true
    }
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
