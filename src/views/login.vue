<template>
  <div class="login-register-page">
    <div class="content-container">
      <div class="img-wrap">
        <div class="title">91肛肠</div>
      </div>
      <div class="form-wrap">
        <div class="form-header">
          <img src="@/assets/img/close.png" alt="">
        </div>
        <div class="form-body">
          <h3>登录</h3>
          <div class="form-item">
            <div class="form-item-label">手机号码</div>
            <div class="input-wrap">
              <el-input placeholder="手机号码"></el-input>
            </div>
          </div>
          <div class="form-item">
            <div class="form-item-label">验证码</div>
            <div class="input-wrap">
              <el-input placeholder="验证码"></el-input>
              <el-button style="margin-left: 10px">获取验证码</el-button>
            </div>
          </div>
        </div>
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
        padding: 20px;
        display: flex;
        flex-direction: column;
        .form-header{
          text-align: right;
          img{
            cursor: pointer;
          }
        }
        .form-body{
          flex: 1;
          padding-left: 144px;
          padding-top: 140px;
          h3{
            text-align: left;
            font-size: 28px;
            font-family: Circular Std Medium, Circular Std Medium-Regular;
            font-weight: 400;
            color: #2e384d;
            line-height: 32px;
            margin-bottom: 20px;
          }
          .form-item{
            margin-bottom: 16px;
            .form-item-label{
              font-size: 12px;
              font-family: Circular Std Book, Circular Std Book-Regular;
              font-weight: 400;
              color: #8c98a9;
              margin: 6px;
            }
            .input-wrap{
              display: flex;
              width: 270px;
              
            }
          }
        }
      }
    }
  }
</style>
