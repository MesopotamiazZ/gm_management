<template>
  <div class="iwTable">
    <div class="iwTable-header" v-if="isShowHeader">
      <div class="iwTable-header-title">
        <span>
          <slot></slot>
          <!-- <slot :data="data"></slot> -->
        </span>
      </div>
      <div class="iwTable-header-btns">
        <Button type="primary" @click="selectRow">选择</Button>
        <Button type="error">删除</Button>
        <Button type="primary" ghost @click="cancelSelect">取消</Button>
      </div>
      <div class="iwTable-header-search">
        <Input suffix="ios-search" placeholder="ID/用户名" style="width: auto" />
      </div>
    </div>
    <div class="iwTable-body" ref="iwTableBody">
      <SelfTable border stripe 
        ref="selectionTable"
        :columns="columns"
        :data="data">
        <template slot-scope="{ row, index }" slot="username">
          <Input type="text" v-model="editUserName" v-if="editIndex === index" />
          <span v-else>{{ row.username }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="phone">
          <Input type="text" v-model="editPhone" v-if="editIndex === index" />
          <span v-else>{{ row.phone }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="createtime">
          <Input type="text" v-model="editCreatetime" v-if="editIndex === index" />
          <span v-else>{{ getBirthday(row.createtime) }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="state">
          <Input type="text" v-model="editState" v-if="editIndex === index" />
          <span v-else>{{ row.state }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="action">
          <div v-if="editIndex === index">
            <Button @click="handleSave(index)">保存</Button>
            <Button @click="editIndex = -1">取消</Button>
          </div>
          <div v-else>
            <Button @click="handleEdit(row, index)">修改信息</Button>
            <Button>修改密码</Button>
          </div>
        </template>
      </SelfTable>
    </div>
    <div class="iwTable-footer">
      <Page :total="100" :page-size="10" />
      <div class="total-num">总共：100条</div>
    </div>
  </div>
</template>
<script>
import SelfTable from "./table/table";
export default {
  name: 'iwTable',
  components: {
    SelfTable
  },
  props: {
    isShowHeader: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      editIndex: -1,  // 当前聚焦的输入框的行数
      editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editAge: '',  // 第二列输入框
      editBirthday: '',  // 第三列输入框
      editAddress: '',  // 第四列输入框
      // columns: [
        
      // ],
      // data: [
        
      // ]
    }
  },
  computed: {
  },
  created () {
    // let tableHeight = this.$refs.iwTableBody.offsetHeight
    // console.log(tableHeight)
    // console.log(this.$refs.selectionTable.$el.style)
    // this.$refs.selectionTable.$el.style.height = tableHeight + 'px'
  },
  methods: {
    // 选择按钮
    selectRow () {
      this.$emit('select-row')
    },
    // 取消按钮
    cancelSelect () {
      this.columns.shift()
      this.columns.unshift({
        type: 'index',
        width: 60,
        align: 'center'
      })
    },
    // 点击每行的编辑修改按钮
    handleEdit (row, index) {
      this.editUserName = row.username
      this.editPhone = row.phone
      this.editCreatetime = row.createtime
      this.editState = row.state
      this.editIndex = index
    },
    // 点击保存按钮
    handleSave (index) {
      this.data[index].username = this.editUserName
      this.data[index].phone = this.editPhone
      this.data[index].createtime = this.editCreatetime
      this.data[index].state = this.editState
      this.editIndex = -1
    },
    getBirthday (birthday) {
      const date = new Date(parseInt(birthday))
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return `${year}-${month}-${day}`
    }
  }
}
</script>
<style lang="less" scoped>
.iwTable {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #ddd;
  .iwTable-header {
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid #ddd;
    .iwTable-header-title {
      display: inline-block;
      float: left;
      font-size: 16px;
      span {
        padding-left: 5px;
        border-left: 3px solid #2d8cf0;
        color: #333;
      }
    }
    .iwTable-header-search {
      display: inline-block;
      float: right;
      margin-right: 20px;
    }
    .iwTable-header-btns {
      display: inline-block;
      float: right;
    }
  }
  .iwTable-body {
    height: calc(100% - 100px);
    border-bottom: 1px solid #ddd;
  }
  .iwTable-footer {
    height: 50px;
    .ivu-page {
      height: 100%;
      line-height: 50px;
      text-align: right;
      padding: 0 10px;
      display: inline-block;
      float: right;
    }
    .total-num {
      font-size: 14px;
      float: right;
      position: relative;
      top: 16px;
    }
  }
}
</style>