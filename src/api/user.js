import { request } from '../utils/request'
import staticRouter from '@/router/staticRouter'

export const requestLogin = params => {
  return request('/api/user/login', params).then(data => {
    localStorage.setItem('user-token',JSON.stringify(data.token))
    return data
  })
}

export const requestRegister = params => {
  return request('/api/user/register',params)
}

export const requestUserInfo = params => {
  return request('/api/user/info', params).then(res => {
    console.log(res)
    // 过滤菜单
    const filterUserMenu = function (menus, accessMenu) {
      menus.forEach(function (m) {
        // console.log(m)
        if (m.noMenu) {
          return 
        }
        if(m.children) {
          let subMenu = []
          filterUserMenu(m.children,subMenu)
          if(subMenu.length > 0) {
            let _aMenu = Object.assign({}, m)
            // console.log(_aMenu)
            _aMenu.children = subMenu
            accessMenu.push(_aMenu)
            console.log(accessMenu)
          }
        }else {
          console.log(res.permissions)// mock
          res.permissions.some(p => p.name === m.name) && accessMenu.push(m)
        }
      })
    }

    let accessMenu = []
    let menus = []
    staticRouter.forEach(r => {// 包含子路由
      menus = r.menu ? menus.concat(r.children) : menus
    })
    // console.log(menus)
    filterUserMenu(menus, accessMenu)
    res.accessMenu = accessMenu
    
    return res
  })
}