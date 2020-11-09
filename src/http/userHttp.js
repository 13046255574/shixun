import request from './http'

export default {
    findDynamic(page){
        return request.get(`/dynamic/selectAllDynamicListByPage?currentPage=${page}`);
    },
    smsSendCode(mobilePhoneNumber){
        return request.post(`/sms/sendCode?mobilePhoneNumber=${mobilePhoneNumber}`);
    },
    checkCode({phone,code}){
      return request.post(`/admin/adminLoginByMobilePhoneNumber?mobilePhoneNumber=${phone}&verificationCode=${code}`);
    },
    delDynamic(dyId){
        return request.post(`/dynamic/deleteDynamic?dynamicId=${dyId}`)
    }

}
