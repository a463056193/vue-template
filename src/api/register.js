import request from '@/utils/request'

export default {
// send v-code
//   sendCode(mobile) {
//     return request({
//       url: `/edumsm/send/${mobile}`,
//       method: 'get'
//     })
//   },
  //user register
  submitRegister(formItem) {
    return request({
      url: `/eduservice/member/register`,
      method: 'post',
      data: formItem
    })
  }
}