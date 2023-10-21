
export const WORK= (items) => {
    return {
        type: "WORK_VALUE",
        payload: items
    }
}

export const TNAME= (items) => {
    return {
        type: "TNAME",
        payload: items
    }
}
export const TGENDER= (it) => {
    return {
        type: "TGENDER",
        payload: it
    }
}
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}


export const REALDLT = (id) => {
    return {
        type: "SRT_ALL",
        payload: id
    }
}

export const REALEDIT = (id) => {
    return {
        type: "REAL_EDIT",
        payload: id
    }
}
export const TOGGLETEACHERS = (id) => {
    return {
        type: "TOGGLE_TEACHERS",
        payload: id
    }
}
export const TNUMBER = (id) => {
    return {
        type: "TNUMBER",
        payload: id
    }
}

export const TADDRESS = (id) => {
    return {
        type: "TADDRESS",
        payload: id
    }
}

export const TCLASS = (id) => {
    return {
        type: "TCLASS",
        payload: id
    }
}






export const TOGGLEHOME = (id) => {
    return {
        type: "TOGGLEHOME",
        payload: id
    }
}

export const TOGGLESTD = (id) => {
    return {
        type: "TOGGLESTD",
        payload: id
    }
}

export const TOGGLENOTI = (id) => {
    return {
        type: "TOGGLENOTI",
        payload: id
    }
}

export const TOGGLECOM = (id) => {
    return {
        type: "TOGGLECOM",
        payload: id
    }
}



export const SRT= () => {
    return {
        type: "SRT_ALL",
      }
}

export const SRTTWO= () => {
    return {
        type: "SRT_ALL_TWO",
       }
}

export const CHAGNE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const changeInputValue = (value) => ({type: CHAGNE_INPUT_VALUE, payload: value})


export const ONCHANG= (vlu) => {
    return {
        type: "ON_CHANG",
        payload: vlu
    }
}



export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}


export const TOGGLE = (id) => {
    return {
        type: "TOGGLE_CART",
        payload: id
    }
}





// Student Section start
export const SNAME = (id) => {
    return {
        type: "SNAME",
        payload: id
    }
}
export const SGENDER = (id) => {
    return {
        type: "SGENDER",
        payload: id
    }
}


export const SSAVE = (id) => {
    return {
        type: "SSAVE",
        payload: id
    }
}


export const STDDLT = (id) => {
    return {
        type: "STDDLT",
        payload: id
    }
}

export const STDEDIT = (id) => {
    return {
        type: "STDEDIT",
        payload: id
    }
}

// Student Section end


// Student Search Start

export const SFIND = (id) => {
    return {
        type: "SFIND",
        payload: id
    }
}

export const LOGOUT = () => {
    return {
        type: "LOGOUT",
    }
}
// Student Search End


export const NOTICEADD = (id) => {
    return {
        type: "NOTICEADD",
        payload: id
    }
}
export const DELETENOTICE = (id) => {
    return {
        type: "DELETENOTICE",
        payload: id
    }
}


export const CHPASS = (id) => {
    return {
        type: "CHPASS",
        payload: id
    }
}