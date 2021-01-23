<template>
  <div class="login-register-page">
    <div class="content-container">
      <div class="img-wrap">
        <div class="title">91肛肠</div>
      </div>
      <div class="form-wrap">
        <div class="form-header"></div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
  @import "~@/style/variables.scss";
  .login-register-page{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F4F6FC;
    .content-container{
      width: 76%;
      height: 648px;
      margin: 0 auto;
      display: flex;
      background: #ffffff;
      border-radius: 0 5px 5px 0;
      box-shadow: 0 3px 20px 0 rgba(0,0,0,0.03);
      .img-wrap{
        flex: 1;
        height: 100%;
        position: relative;
        background-image: url("~@/assets/img/16012.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        font-size: 28px;
        font-family: Circular Std Medium, Circular Std Medium-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 32px;
        .title{
          position: absolute;
          top: 43px;
          left: 58px;
        }
      }
      .form-wrap{
        flex: 1;
      }
    }
  }
</style>
