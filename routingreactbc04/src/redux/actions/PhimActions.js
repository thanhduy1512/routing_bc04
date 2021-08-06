import axios from "axios";

//File này sẽ tổng hợp tất cả action của ứng dụng

export const layDanhSachPhimApiAction = (maNhom = 'GP01') => {
    return async (dispatch) => {
        //hàm chạy sau khi dữ liệu render
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
                method: 'GET'
            });
            //dispatch dữ liệu lên redux
            dispatch({
                type: 'SET_MANG_PHIM',
                mangPhim: result.data
            });
        } catch (errors) {
            console.log(errors);
        }
    }
}

export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            });
            //Sau khi gọi api dispatch lên reducer dữ liệu chi tiết phim
            dispatch({
                type: 'SET_CHI_TIET_PHIM',
                chiTietPhim: result.data
            })
        } catch (errors) {
            console.log(errors);
        }
    }
}