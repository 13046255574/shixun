<template>
    <div class="login-bg">
        <div class="title">503靓仔管理系统</div>
        <div class="form-data">
            <div class="login-form">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                    <el-form-item prop="phone">
                        <el-input type="text" v-model="ruleForm.phone" autocomplete="off">
                            <template slot="prepend">
                                <i class="el-icon-phone-outline"></i>
                            </template>
                            <template slot="append">
                                <el-button type="primary" @click="sendCode()" v-if="show">点击发送</el-button>
                                <span v-else>再次发送({{count}}s)</span>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="code">
                        <el-input v-model.number="ruleForm.code"></el-input>
                    </el-form-item>
                    <div>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import user from '../http/userHttp'

    export default {
        name: "login",
        data() {
            var checkCode = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('验证码不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        callback();
                    }
                }, 1000);
            };
            var validatePhone = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号码'));
                } else if (value.length != 11) {
                    callback(new Error('请输入11位手机号码'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    phone: '',
                    checkPhone: '',
                    code: ''
                },
                show: true,
                count: '',
                timer: null,
                rules: {
                    phone: [
                        {validator: validatePhone, trigger: 'blur'}
                    ],
                    code: [
                        {validator: checkCode, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            // 倒计时
            getCode() {
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count -= 1;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000);
                }
            },
            // 判断是否是管理员
            isAdmin() {
                return user.isAdmin(this.ruleForm.phone)
            },
            async sendCode() {

              const code=  await this.sendPhoneCode();
              console.log(code.data.code)
              if (code.data.code===1010){
                 await  this.getCode();
              }
            },
            async sendPhoneCode() {
                const verifyCode = await user.smsSendCode(this.ruleForm.phone);
                this.$message.success(verifyCode.data.msg);
                return verifyCode;
            },
            showMessage(message) {
                this.$message({
                    message: message,
                    type: 'warning'
                });
            },
            // 提交验证
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        // 开始登陆
                        let response = await user.checkCode(this.ruleForm);
                        if (response.data.code === 2200) {
                            window.sessionStorage.setItem('token', response.data.result);
                            this.$message.success('登录成功！');
                            this.$router.push('/About');
                        } else {
                            this.$message.warning(response.data.msg);
                        }

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

        },
        mounted() {
        }
    }
</script>

<style scoped>
    .login-bg {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(#e66465, #9198e5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .form-data {
        border: 2px solid #daebf5;
        border-radius: 20px;
        width: 400px;
        padding: 20px;
    }

    .title {
        margin: 30px;
        font-size: 40px;
    }

    .el-button {
        width: 100%;
    }
</style>
