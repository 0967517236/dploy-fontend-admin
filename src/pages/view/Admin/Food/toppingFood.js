import { Button, Col, List, Modal, notification, Row, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../../constants';

const ToppingFood = ({ isModal, handleOk, handleCancel, id }) => {
    const [data, setData] = useState([])
    const [topping, setTopping] = useState()
    const isLogin = localStorage.getItem('islogin')
    console.log(id)
    useEffect(() => {
        fetch(API_BASE_URL+`/product/${id}/topping`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                setData(res.body.toppingList)

                return res;
            })
            .catch((error) => { });
    }, [id]);
    useEffect(() => {
        fetch( API_BASE_URL+`/topping/`, {

            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization': `Bearer ${isLogin}`
            })


        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                setTopping(res.body)

                return res;
            })
            .catch((error) => { });
    }, [id, isLogin]);
    const checkDisable = (data, record) => {
        var check = false;
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].id === record.id) {

                    check = true
                    break


                }
            }
        }
        return check;
    }
    const handleDelete=(id)=>{
        console.log(id)
        const newdata =data.filter(product => product.id !== id);
        setData(newdata)
    }
    const handleAdd=(topping)=>{
        console.log(topping)
      
        setData([...data,topping])
    }
    const handleUpdate=(topping)=>{
        const newData = {toppingList:topping}
        fetch( API_BASE_URL+`/product/${id}/topping`, {

            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization': `Bearer ${isLogin}`
            }),
            body:JSON.stringify(newData)


        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
               if(res.description==="Successful"){
                notification['success']({
                    message: 'Thông báo',
                    description:
                      'Cập nhật thành công'
                })
                handleCancel()
               }

                return res;
            })
            .catch((error) => { });
    }

    const columnAll = [
        {
            title: "Tên topping",
            dataIndex: "name",
            render: (text) => <span>{text}</span>,

        },



        {
            title: "",
            dataIndex: "",
            with: 3,

            key: "x",
            render: (text, record) => (
                <>
                    {" "}
                    <>
                        {checkDisable(data, record) ?
                         <Button  onClick={()=>handleDelete(record.id)}>
                            -
                     </Button> :  <Button  onClick={()=>handleAdd(record)}>
                            +
                     </Button>}

                       
                    </>
                </>
            ),
        },
    ];


    return (
        <div>
            <Modal
                title="Chi tiết"
                visible={isModal}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1200}
                footer={null}
            >
                <Row>
                    <Col xs={24} md={12}>
                        <div style={{ margin: '10px' }}>
                            <Row>
                                <h3>Tất cả topping</h3>
                            </Row>
                            <Row>
                                <Table
                                    className="table-food-admin"
                                    columns={columnAll}
                                    scroll={{ x: '100vh' }}

                                    dataSource={topping}

                                />
                            </Row>
                        </div>

                    </Col>
                    <Col xs={24} md={12}>
                        <div style={{ margin: '10px' }}>
                            <Row>
                                <h3>Topping đã thêm</h3>
                            </Row>
                            <Row>
                                {data && data.length !== 0 ? <List
                                    bordered
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item>
                                            {item.name}
                                        </List.Item>
                                    )} /> : ""}

                            </Row>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Button type='primary' onClick={()=>handleUpdate(data)}>Cập nhật</Button>
                </Row>
            </Modal>
        </div>
    )
}

export default ToppingFood
