<template>
  <div class="main-header-page">
    <div class="main-content">
      <div class="title-wrap">
        <h1>91肛肠在线</h1>
        <div class="location-wrap">
          <img class="map" src="@/assets/img/map.png" alt="">
          <span class="location">广州市</span>
          <img class="arrow" src="@/assets/img/arrow-down.png" alt="">
        </div>
      </div>
      <div class="nav-wrap">
        <div class="item-wrap">
          <router-link tag="div" class="nav-item" :to="{name: 'home'}"><span>首页</span></router-link>
          <router-link tag="div" class="nav-item" :to="{name: 'hospital'}"><span>找医院</span></router-link>
          <router-link tag="div" class="nav-item" :to="{name: 'doctor'}">找医生</router-link>
          <router-link tag="div" class="nav-item" :to="{name: 'healthy'}">健康咨询</router-link>
          <router-link tag="div" class="nav-item" :to="{name: 'mall'}">药品商城</router-link>
          <router-link tag="div" class="nav-item" :to="{name: 'about'}">关于我们</router-link>
        </div>
        <div class="btn-wrap">
          <el-button @click="login" round>登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    login(){
      this.$router.push({name: "login"})
    }
  }
}
</script>

<style lang="scss">
  .main-header-page{
    min-width: 1080px;
    width: 100%;
    background-color: #5B75FC;
    .main-content{
      width: 76%;
      padding-top: 59px;
      padding-bottom: 39px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title-wrap{
        flex: 1;
        display: flex;
        align-items: flex-end;
        h1{
          font-size: 45px;
          letter-spacing: 2px;
          font-family: Roboto, Roboto-Bold;
          font-weight: 600;
          color: #fff;
          margin: 0;
          margin-right: 94px;
        }
        .location-wrap{
          display: flex;
          align-items: center;
          padding-bottom: 10px;
          .map{
            width: 16px;
            height: 21px;
          }
          .location{
            width: 48px;
            height: 22px;
            font-size: 16px;
            font-family: PingFang SC, PingFang SC-Medium;
            font-weight: 500;
            text-align: left;
            color: #ffffff;
            line-height: 20px;
            margin-left: 9px;
            margin-right: 3px;
          }
          .arrow{
            width: 16px;
            height: 9px;
          }
        }
      }
      .nav-wrap{
        flex: 1;
        display: flex;
        align-items: center;
        .item-wrap{
          flex: 1;
          display: flex;
          .nav-item{
            flex: 1;
            cursor: pointer;
            font-size: 16px;
            font-family: Poppins, Poppins-Medium;
            font-weight: 500;
            text-align: left;
            color: #ffffff;
            span{
              padding: 4px;
              border-bottom: none;
            }
          }
          .router-link-active{
            span{
              border-bottom: 1px solid #fff;
            }
          }
        }
        .btn-wrap{
          .el-button.is-round{
            width: 100px;
            height: 40px;
            background-color: #5B75FC;
          }
        }
      }
    }
  }
</style>
