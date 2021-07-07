import React, { useState } from 'react';
import Navigation from './../navbar/Navigation';
import Create from './../modals/Create';
import Update from './../modals/Update';
import { Container, Row, Col, Form, Modal } from 'react-bootstrap';
import './index.css';
import ShopCard from './../ShopCard/ShopCard';

const Index = () => {
    const [createModalShow, setCreateModalShow] = useState(false);
    const handleCreateClose = () => setCreateModalShow(false);
    const handleCreateShow = () => setCreateModalShow(true);

    const [updateModalShow, setUpdateModalShow] = useState(false);
    const handleUpdateClose = () => setUpdateModalShow(false);
    const handleUpdateShow = () => setUpdateModalShow(true);

    return (
        <>
        <Navigation
        onClick={handleCreateShow}
        />

        <Container>
            <Row className="justify-content-md-between heading">
            <Col md="6" sm="12">
                <h3>Shops</h3>
            </Col>
            <Col md="6" sm="12" className="d-flex justify-content-end">
                <div>
                    <p>Sort By &nbsp;
                    <select className="srt_by">
                        <option value="Name">Name</option>
                        <option value="location">location</option>
                        <option value="Date">Date</option>
                    </select>
                    </p>
                </div>
            </Col>
            </Row>

            <Row>
            <Col md="3" sm="12">
                <div className="filter_container">
                    <div className="search_by">
                        <p>search by name</p>
                        <Form.Control size="sm" type="text" placeholder="Small text" />
                    </div>
                    <div className="search_by">
                        <p>search by location</p>
                        <Form.Control size="sm" type="text" placeholder="Small text" />
                    </div>
                    <div className="search_by">
                        <p>search by catagry</p>
                        <Form.Control size="sm" type="text" placeholder="Small text" />
                    </div>
                    <div className="search_by">
                        <p>search by Opening Date</p>
                        <Form.Control size="sm" type="text" placeholder="Small text" />
                    </div>
                    <div className="search_by">
                        <p>search by Closing Date</p>
                        <Form.Control size="sm" type="text" placeholder="Small text" />
                    </div>
                </div>
            </Col>

            <Col md="9" sm="12" className="">
                <Row>
                    <ShopCard edit_click={handleUpdateShow}/>
                    <ShopCard edit_click={handleUpdateShow}/>
                    <ShopCard edit_click={handleUpdateShow}/>
                    <ShopCard edit_click={handleUpdateShow}/>
                    <ShopCard edit_click={handleUpdateShow}/>
                    <ShopCard edit_click={handleUpdateShow}/>
                </Row> 
            </Col>

            
            </Row>
        </Container>
        <Create 
        show={createModalShow}
        onHide={handleCreateClose}
        />
        <Update 
        show={updateModalShow}
        onHide={handleUpdateClose}
        />


        </>
    );
}

export default Index;
