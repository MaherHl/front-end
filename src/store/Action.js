// action
let login = ()=>{
    return {
      type : "login",
      value : true
    }
  }
  let logout = ()=>{
    return {
      type:"logout"
    }
  }



export {login, logout}