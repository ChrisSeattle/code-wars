function validateUsr(username) {
    res = /^[a-z0-9_]|{3,16}$/.test(username); 
    return res
  }