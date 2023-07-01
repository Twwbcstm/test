<template>
    <div class="login">
        <div class="login-box">
          <span class="borderline"></span>
          <form action="">
              <h2>登录</h2>
              <div class="input-box">
                  <input type="text" required>
                  <span>用户</span><i></i>
              </div>
              <div class="input-box">
                  <input type="text" required>
                  <span>密码</span><i></i>
              </div>
              <div class="links">
                <span>
                    <a href="#">忘记密码？</a>
                </span>
                <span>
                    <a href="#">记住！</a>
                </span>
              </div>
              <input type="submit" name="" id="" value="登录">
          </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
    font-family: '黑体';
    box-sizing: border-box;
}
.login{
   
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #222;
    .login-box{
        position: relative;
        width: 380px;
        height: 420px;
        background: #1c1c1c;
        border-radius: 8px;
        overflow: hidden;
        form{
            position: absolute;
            inset: 4px;
            background: #222;
            padding: 50px 40px;
            border-radius: 8px;
            z-index: 2;
            display: flex;
            flex-direction: column;
            h2{
                color: #fff;
                font-weight: 500;
                text-align: center;
                letter-spacing: 0.1em;
            }
            .input-box{
                position: relative;
                width: 300px;
                margin-top: 35px;
                input{
                    position: relative;
                    width: 100%;
                    padding: 20px 10px 10px;
                    background: transparent;
                    outline: none;
                    border: none;
                    box-shadow: none;
                    color: #23242a;
                    font-size: 1em;
                    letter-spacing: 0.05em;
                    z-index: 10;
                    transition: 0.5s;
                }
                span{
                    position: absolute;
                    left: 0;
                    padding: 20px 10px 10px;
                    pointer-events: none;
                    color: #8f8f8f;
                    font-size: 1em;
                    letter-spacing: 0.05em;
                    transition: 0.5s;
                }
                input:valid ~ span,input:focus ~ span{
                    color: #fff;
                    font-size: 0.75em;
                    transform: translateY(-34px);
                }
                i{
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background: #fff;
                    border-radius: 4px;
                    overflow: hidden;
                    transition: 0.5s;
                    pointer-events: none;
                }
                input:valid ~ i,input:focus ~ i{
                    height: 44px;
                }
              
            }
            input[type='submit']{
                border:none;
                outline: none;
                padding: 9px 9px;
                background-color: #fff;
                cursor: pointer;
                font-size: 0.9em;
                border-radius: 4px;
                font-weight: 600;
                width: 100px;
                margin-top: 10px;
               
            }
            input[type='submit']:active{
                    opacity: 0.8;
            }
            .links{
                    display: flex;
                    // background-color: #ff2770;
                    justify-content: space-between;
                    span{
                        // flex: 1;
                        margin: 10px 0;
                        font-size: 0.75em;
                        color: #8f8f8f;
                        text-decoration: none;
                        // background-color: aqua;
                    }
                   
                }
                .links a:hover,.links a:nth-child(2){
                       color: #fff;
                }
        }
    }
    .borderline{
        position: absolute;
        top: 0;
        inset: 0;
    }
    .login-box::before,.login-box::after,.borderline::before,.borderline::after{
        content:'';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 380px;
        height: 420px;
        background: linear-gradient(0deg,transparent,transparent,#45f3ff,#45f3ff,#45f3ff);
        z-index: 1;
        transform-origin: bottom right;
        animation: animate 6s linear infinite;
    }
    .login-box::after{
        animation-delay: -3s;
    }
    .borderline::before{
        background: linear-gradient(0deg,transparent,transparent,#ff2770,#ff2770,#ff2770);
        animation-delay: -1.5s;
    }
    .borderline::after{
        background: linear-gradient(0deg,transparent,transparent,#ff2770,#ff2770,#ff2770);
        animation-delay: -4.5s;
    }
}

@keyframes animate {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
</style>