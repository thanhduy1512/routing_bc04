import axios from "axios";
import { history } from "../../App";
import { USER_LOGIN } from "../../util/setting";



export const dangNhapAction = (userLogin) => {//{taiKhoan:'',matKhau:''}
    return async (dispatch) => {
        try {
            console.log(userLogin);
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: userLogin,
            });

            console.log('result', result);
            dispatch({
                type: 'XU_LY_DANG_NHAP_THANH_CONG',
                tenDangNhap: result.data.taiKhoan
            })

            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
            localStorage.setItem(ACCESSTOKEN, result.data);

            alert("đăng nhập thành công");
            history.push("/home")

        } catch (errors) {

            console.log('errors', errors.response?.data);
            //?: optional chaining
        }
    }
}

export const datVe = (thongTinDatVe) => {

    // {
    //     "maLichChieu": 0,
    //     "danhSachVe": [
    //       {
    //         "maGhe": 0,
    //         "giaVe": 0
    //       }
    //     ],
    //     "taiKhoanNguoiDung": "string"
    //   }

    return async dispatch => () => {


        try {
            let result = axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                method: 'post',
                data: thongTinDatVe,
                headers: { 'Authorazition': 'Bearer' + localStorage.getItem(ACCESSTOKEN) }
            });

            console.log(result.data);
        } catch (errors) {

            console.log(errors.response?.data);

        }
    }

}