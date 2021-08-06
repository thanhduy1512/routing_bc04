import React, { Component } from 'react'
import axios from "axios";

export default class DemoApiClass extends Component {

    state = {
        mangPhim: []
    }
    componentDidMount() {

        this.renderPhim();
    }

    renderPhim = async () => {
        const result = await axios.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`)
            .then(res => {
                const result = res.data;
                this.setState({
                    mangPhim: result
                })
            })
            .catch(error => console.log(error));
    }
    renderListPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return <div className='col-4 mt-5' key={index}>
                <div className="card text-white bg-primary" >
                    <img className="card-img-top" src={phim.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                    </div>
                </div>
            </div>
        })
    }

    render() {

        return (
            <div className="container">
                <div className='row'>
                    {this.renderListPhim()}
                </div>
            </div>
        )
    }
}
