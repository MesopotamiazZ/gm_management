<template>
  <div class="home" @click="closeDropdown">
    <div class="left-wrap">
      <div class="left-wrap-brand">{{brand}}</div>
      <div class="left-wrap-menu">
        <Menu theme="dark" width="100%">
          <MenuItem name="1">
            <Icon type="md-document"/>首页
          </MenuItem>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"/>用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats"/>统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </div>
    </div>
    <div class="right-wrap">
      <div class="right-wrap-title">
        <div class="current-router">
          <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem>详情</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div class="title-menu"></div>
        <div class="set-info">
          <span class="avatar"
                ref="avatar"
                @click="setDropdown">
            <img :src="user.avatar" alt="">
          </span>
          <span class="span-username"
                ref="spanUsername"
                @click="setDropdown">{{user.username}}</span>
          <SetDropdown :items="sets"
                       v-show="isClickSet"
                       @close-down="closeDown"></SetDropdown>
        </div>
      </div>
      <div class="right-wrap-content">
        <div class="home-main-operator">
          <div class="main-operator operator1">
            <div class="main-operator-left"></div>
            <div class="main-operator-right">用户管理</div>
          </div>
          <div class="main-operator operator2">
            <div class="main-operator-left"></div>
            <div class="main-operator-right"></div>
          </div>
          <div class="main-operator operator3">
            <div class="main-operator-left"></div>
            <div class="main-operator-right"></div>
          </div>
          <div class="main-operator operator4">
            <div class="main-operator-left"></div>
            <div class="main-operator-right"></div>
          </div>
        </div>
        <div class="home-main-wrapper">
          <component :is="componentName"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SetDropdown from '@/components/SetDropdown'
import HomeUserTable from '@/components/homeUserTable'
import { mapState, mapMutations, mapActions } from 'vuex'
// console.log(mapActions)

export default {
  name: 'home',
  components: {
    SetDropdown,
    HomeUserTable
  },
  computed: {
    ...mapState(['count', 'obj'])
  },
  data () {
    return {
      brand: '游戏后台管理',
      user: {
        username: '管理员',
        avatar: require('assets/logo.png')
      },
      sets: ['首页', '设置', '退出'],
      isClickSet: false,
      componentName: 'HomeUserTable'
    }
  },
  mounted () {
    console.log('mounted')
    // console.log(this.count, this.obj)
    // this.increment();
    // console.log(this.count, this.obj)
    // this.this.getHomeTableData()
  },
  methods: {
    // ...mapMutations('homeModule'),
    // ...mapActions('homeModule', ['getHomeTableData']),
    ...mapActions(['increment']),
    setDropdown (e) {
      if (!this.isClickSet) {
        this.isClickSet = true
      } else {
        this.isClickSet = false
      }
    },
    closeDropdown (e) {
      let dom1 = this.$refs.avatar
      let dom2 = this.$refs.spanUsername
      if (!dom1.contains(e.target) && !dom2.contains(e.target)) {
        this.isClickSet = false
      }
    },
    closeDown () {
      this.isClickSet = false
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  display: flex;
}
&.left-wrap {
  flex: 1;
  height: 100%;
  background: #515a6e;
  .left-wrap-brand {
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 2px;
    border-bottom: 1px solid #a8a8a8;
    background: #4cb6cb;
  }
  .left-wrap-menu {
    width: 100%;
    height: calc(100% - 60px);
  }
}
&.right-wrap {
  flex: 5.7;
  height: 100%;
  .right-wrap-title {
    width: 100%;
    height: 60px;
    background: #4cb6cb;
    display: flex;
    .current-router {
      flex: 1;
    }
    .title-menu {
      flex: 2.6;
    }
    .set-info {
      flex: 1;
      position: relative;
      .avatar {
        position: absolute;
        right: 20px;
        top: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .span-username {
        position: absolute;
        font-size: 16px;
        top: 20px;
        right: 66px;
        cursor: pointer;
      }
      .set-dropdown {
        position: absolute;
        bottom: -109px;
        right: 15px;
      }
    }
  }
  .right-wrap-content {
    width: 100%;
    height: calc(100% - 60px);
    .home-main-operator {
      width: 100%;
      height: 110px;
      padding: 15px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      .main-operator {
        flex: 1;
        height: 100%;
        color: #333;
        font-size: 20px;
        display: flex;
        border: 1px solid #ddd;
        cursor: pointer;
        box-shadow: 1px 2px 1px rgba(0,0,0,0.1);
        border-radius: 2px;
        .main-operator-left {
          width: 80px;
        }
        .main-operator-right {
          flex: 1;
          text-align: center;
          line-height: 80px;
        }
      }
      .main-operator:hover {
        border-color: #FF7F50;
      }
      .operator1 {
        margin-right: 40px;
      }
      .operator2 {
        background: lightcyan;
        margin-right: 40px;
      }
      .operator3 {
        background: lightgray;
        margin-right: 40px;
      }
      .operator4 {
        background: lightsalmon;
      }
    }
    .home-main-wrapper {
      width: 100%;
      height: calc(100% - 110px);
      padding: 0 15px 15px 15px;
    }
  }
}

/* 修改iview样式 */
.ivu-breadcrumb {
  height: 60px;
  line-height: 60px;
  text-align: left;
  padding: 0 0 0 20px;
}
.ivu-breadcrumb-item-separator {
  color: #333;
}
</style>
