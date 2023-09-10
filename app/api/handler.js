import FormData from 'form-data'
import {decode as base64_decode, encode as base64_encode} from 'base-64'

export function HandlerApi (url, paramsData){
  var data = new FormData()
  var myHeaders = new Headers()
  var today = new Date()
  var auth_code = base64_encode("maximuz:k3c1p1radrW2$24"+today.getDate())  
  myHeaders.append("Authorization", "Basic "+auth_code); 
  paramsData.map((param, index) => {    
    data.append(String(param[0]), String(param[1]))
  })
  data.append('token', 'noauth.android')
  data.append('device', 'postman-ano')
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };
  return fetch(url, requestOptions)
}
