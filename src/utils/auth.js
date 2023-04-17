import Cookies from 'js-cookie'

const TokenKey = 'MAS_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setAttr(name, attr) {
  return Cookies.set(name, attr)
}

export function getAttr(token) {
  return Cookies.get(token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

