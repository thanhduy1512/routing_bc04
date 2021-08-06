import React, { useState, useEffect } from 'react'
import axios from 'axios';
export default function DemoApiFunction(props) {

    const [mangPhim, setMangPhim] = useState([]);


    useEffect(async () => {
        //Hàm chạy sau khi dữ liệu render
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET'
            });
            //setState mảng phim
            setMangPhim(result.data);
        } catch (errors) {
            console.log(errors);
        }

    }, [])


    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.tenPhim} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                    </div>
                </div>

            </div>
        })
    }


    return (
        <div className="container">
            <h3 className="text-center">Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}

