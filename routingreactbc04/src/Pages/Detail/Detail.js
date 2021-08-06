import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinPhimAction } from '../../redux/actions/PhimActions';

export default function Detail(props) { //props.history, props.location, props.match (Khi component load ra từ thẻ <Route/>)

    const { chiTietPhim } = useSelector(state => state.PhimReducer);
    const dispatch = useDispatch();
    const id = props.match.params.id;

    useEffect(() => {
        dispatch(layThongTinPhimAction(id));
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <img className="w-100" src={chiTietPhim.hinhAnh} alt={chiTietPhim.tenPhim} />
                </div>
                <div className="col-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên Phim</th>
                                <th>{chiTietPhim.tenPhim}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}
