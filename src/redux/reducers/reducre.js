
const INIT_STAT = {
  teachername: '',
  teachergender: '',
  contectnumber: '',
  address: '',
  classesunderthem: '',
  workvalue: "",
  teacherstoggle: false,
  teacherscom: false,
  teachersnotice: false,
  teachersstudnt: false,
  teachershome: true,
  carts: [],
  isEdit: null,
  sname: '',
  sgender: '',
  student: [],
  searchdata: {},
  spassword: "",
  stlogin: true,
  stdata: false,
  noticeboard: []
}

export const cartreducer = (state = INIT_STAT, action) => {
  switch (action.type) {

 

    case "NOTICEADD":
      return {
        ...state,
        noticeboard: [...state.noticeboard, action.payload],
      }

  

    case "DELETENOTICE":
      const updatenotice = state.noticeboard.filter((elem) => {
        return action.payload !== elem.id;
      });
      return {
        ...state,
        noticeboard: updatenotice
      }

    case "SFIND":
      return {
        ...state,
        searchdata: action.payload,
        stlogin: false,
        stdata: true
      }
    case "LOGOUT":
      return {
        ...state,
        searchdata: {},
        stlogin: true,
        stdata: false
      }



    // student section start
    case "SNAME":
      return {
        ...state,
        sname: action.payload,
      }

      case "CHPASS":
        return {
          ...state,
          spassword: action.payload,
        }
          
    case "SGENDER":
      return {
        ...state,
        sgender: action.payload,
      }

    case "SSAVE":

      return {
        ...state,
        student: [...state.student, action.payload],
        sname: '',
        sgender: '',
        spassword: "",
      }




    case "STDDLT":
      const updatestd = state.student.filter((elem) => {
        return action.payload !== elem.id;
      });
      return {
        ...state,
        student: updatestd
      }

    case 'STDEDIT':
      let newEditstd = state.student.find((elem) => {
        return elem.id === action.payload
      });

      const updatest = state.student.filter((elem) => {
        return action.payload !== elem.id;
      });


      return {
        ...state,
        student: updatest,
        sname: newEditstd.sname,
        sgender: newEditstd.sgender,
        spassword: newEditstd.spassword,
      }





    // student section end


    case "TNAME":
      return {
        ...state,
        teachername: action.payload,
      }
    case "WORK_VALUE":
      return {
        ...state,
        workvalue: action.payload,
      }
    case "TGENDER":
      return {
        ...state,
        teachergender: action.payload,
      }

    case "TNUMBER":
      return {
        ...state,
        contectnumber: action.payload
      }
    case "TADDRESS":
      return {
        ...state,
        address: action.payload
      }
    case "TCLASS":
      return {
        ...state,
        classesunderthem: action.payload,
      }





    case "RMV_CART":

      return {
        ...state,
        carts: [...state.carts, action.payload],
        teachername: '',
        teachergender: '',
        contectnumber: '',
        address: '',
        classesunderthem: '',
        workvalue: "",
      }


    case "SRT_ALL":
      const updateItems = state.carts.filter((elem) => {
        return action.payload !== elem.id;
      });
      return {
        ...state,
        carts: updateItems
      }

    case 'REAL_EDIT':
      let newEditItem = state.carts.find((elem) => {
        return elem.id === action.payload
      });

      const updateItem = state.carts.filter((elem) => {
        return action.payload !== elem.id;
      });


      return {
        ...state,
        carts: updateItem,
        teachername: newEditItem.name,
        teachergender: newEditItem.gender,
        contectnumber: newEditItem.number,
        address: newEditItem.address,
        classesunderthem: newEditItem.classes,
        workvalue: newEditItem.work,
      }




    case "TOGGLE_TEACHERS":

      return {
        ...state,
        teacherstoggle: true,
        teacherscom: false,
        teachersnotice: false,
        teachersstudnt: false,
        teachershome: false,
      }
    case "TOGGLECOM":

      return {
        ...state,
        teacherstoggle: false,
        teacherscom: true,
        teachersnotice: false,
        teachersstudnt: false,
        teachershome: false,
      }
    case "TOGGLEHOME":

      return {
        ...state,
        teacherstoggle: false,
        teacherscom: false,
        teachersnotice: false,
        teachersstudnt: false,
        teachershome: true,
      }
    case "TOGGLESTD":

      return {
        ...state,
        // teacherstoggle: teachersT,
        teacherstoggle: false,
        teacherscom: false,
        teachersnotice: false,
        teachersstudnt: true,
        teachershome: false,
      }
    case "TOGGLENOTI":

      return {
        ...state,
        teacherstoggle: false,
        teacherscom: false,
        teachersnotice: true,
        teachersstudnt: false,
        teachershome: false,
      }





    case "SRT_ALL_TWO":
      const newSrttwo = state.products.filter((curItem) => curItem.id > 15);
      return {
        ...state,
        filterproducts: newSrttwo
      }


    case "ADD_CART":

      const newPropertyName = 'amountt';
      const newPropertyValue = 1;
      action.payload[newPropertyName] = newPropertyValue;

      let existingProduct = state.carts.find(
        (curItem) => curItem.id === action.payload.id
      );

      if (existingProduct) {
        let updatedProduct = state.carts.map((curElem) => {
          if (curElem.id === action.payload.id) {
            let newAmount = curElem.amountt + 1;

            return {
              ...curElem,
              amountt: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          carts: updatedProduct,
        };
      }


      else {
        return {
          ...state,
          carts: [...state.carts, action.payload]

        }
      }





    case "TOGGLE_CART":
      const newtoggle = !action.payload
      return {
        ...state,
        toggles: newtoggle
      }

    default:
      return state
  }
}