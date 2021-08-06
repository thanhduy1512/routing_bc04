import axios from 'axios';
import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from "react-redux";
import { layDanhSachPhimApiAction } from '../../redux/actions/PhimActions';
import { NavLink } from "react-router-dom";
import { Carousel } from 'antd';

export default function Home(props) {
    const contentStyle = {
        height: '320px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    //useSelector: dùng để lấy state từ redux về
    const { mangPhim } = useSelector(state => state.PhimReducer);
    const dispatch = useDispatch();

    useEffect(async () => {


        const action = layDanhSachPhimApiAction();

        dispatch(action)




    }, [])
    const renderListPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className='col-4 mt-5' key={index}>
                <div className="card text-white bg-primary" >
                    <img className="card-img-top" src={phim.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>

                        <NavLink className="btn btn-danger" to={`/detail/${phim.maPhim}`}>Đặt vé</NavLink>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div className="container">
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            <h3 className="text-center">Danh Sách Phim</h3>
            <div className="row">
                {renderListPhim()}
            </div>
        </div>
    )
}
