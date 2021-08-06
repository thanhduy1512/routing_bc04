//Kiểm tra localstorage có gía trị hay chưa
let tenDN = ''
if (localStorage.getItem('userLogin')) {
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    tenDN = userLogin.taiKhoan;
}

const stateDefault = {
    tenDangNhap: tenDN
}



export const NguoiDungReducer = (state = stateDefault, action) => {

    console.log(action);
    switch (action.type) {

        case 'XU_LY_DANG_NHAP_THANH_CONG': {
            state.tenDangNhap = action.tenDangNhap;
            return { ...state }
        }

        default: return { ...state }
    }
}