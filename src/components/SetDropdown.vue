<template>
  <div class="set-dropdown">
    <ul>
      <li v-for="(item, index) in items"
          :key="index"
          @click="closeDown">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SetDropdown',
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    // console.log(11111, this.items)
  },
  methods: {
    closeDown () {
      this.$emit('close-down')
    }
  }
}
</script>
<style lang="less" scoped>
  .set-dropdown {
    width: 120px;
    height: auto;
    box-shadow: 0 0 5px rgba(0,0,0,0.25);
    border-radius: 3px;
    overflow: hidden;
    background: #fff;
    li {
      width: 100%;
      height: 35px;
      line-height: 35px;
      text-align: center;
      cursor: pointer;
    }
    li:hover {
      background: #eff2f7;
    }
  }
</style>
