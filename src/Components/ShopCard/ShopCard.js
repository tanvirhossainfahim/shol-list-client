import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './ShopCard.css';
import { FaMapMarkerAlt, FaTrashAlt, FaRegEdit } from "react-icons/fa";



const ShopCard = ({ edit_click }) => {
    return (
        <Col md="12" sm="12" className="shop_card">
            <div>
                <Row>
                    <Col md="4" sm="12" className="">
                        <div className="shop_image_container" style={{backgroundImage : 'url("https://source.unsplash.com/1600x900/?shop")' }}> 
                        </div>
                    </Col>

                    <Col md="8" sm="12">
                        <div className="shop_detail">
                            <div className="title">
                                <h3>Cauvery Emporium</h3>
                                <span>
                                    <button className="btn_trash"><FaTrashAlt/></button>  
                                    <button className="btn_edit" onClick={edit_click}><FaRegEdit/></button>
                                </span>
                            </div>
                            <p> <FaMapMarkerAlt/> 49, Mahatma Gandhi Road, Shivajinagar, Bangalore</p>
                            <p>category</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
}

export default ShopCard;
