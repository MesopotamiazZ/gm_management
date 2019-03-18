<template>
  <div class="homeUserTable">
    <iwTable :columns="columns"
             :data="data"
             @select-row="selectRow">
      用户管理
      <!-- <template slot-scope="user">
        <ul>
          <li v-for="item in user.data" :key="item">{{item}}</li>
        </ul>
      </template> -->
    </iwTable>
  </div>
</template>
<script>
import iwTable from '@/components/Table/iwTable'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'homeUserTable',
  components: {
    iwTable
  },
  data () {
    return {
      data: [],
      columns: [
        // {
        //   type: 'selection',
        //   width: 60,
        //   align: 'center'
        // },
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: '姓名',
          slot: 'username'
        },
        {
          title: '电话',
          slot: 'phone'
        },
        {
          title: '注册时间',
          slot: 'createtime'
        },
        {
          title: '用户状态',
          slot: 'state'
        },
        {
          title: '操作',
          slot: 'action'
        }
      ]
    }
  },
  computed: {
    ...mapState('homeModule', ['homeTableData'])
  },
  methods: {
    ...mapActions('homeModule', ['getHomeTableData']),
    selectRow () {
      this.columns.shift()
      this.columns.unshift({
        type: 'selection',
        width: 60,
        align: 'center'
      })
    }
  },
  async created () {
    await this.getHomeTableData()
    this.data = this.homeTableData
  }
}
</script>
<style lang="less">
.homeUserTable {
  width: 100%;
  height: 100%;
}
</style>