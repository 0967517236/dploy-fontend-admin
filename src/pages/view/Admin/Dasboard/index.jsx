import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../../constants";
import ChartsPage from "./chartData";
import "./index.css";

const Dashboard = () => {
   
const [num,setNum] = useState(0)
const [numActive,setNumActive] = useState(0)
const [numShip,setNumShip] = useState(0)
const [numSuc,setNumSuc] = useState(0)


useEffect(() => {
  fetch(API_BASE_URL+`/invoice/statistics/Đang_xử_lý`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
     
        setNum(res.body)
      

    return res
      
    }
    )
    .catch((error) => {

    });
    
}, []);
  
  return (
    <div>
      <Row>
        <Col xs={24} md={6} className="colDashboard">
          <div className="layerTotal">
            <Row>
              <span style={{fontWeight:500}}> Hóa đơn mới</span>
            </Row>
            <Row style={{justifyContent:'space-between'}}>
                <Col span={15}>
                    Số lượng: 
                </Col>
                <Col span={2}>
                 {num}
                </Col>
            </Row>
          </div>
        </Col>
        <Col xs={24} md={6} className="colDashboard">
          <div className="layerTotal">
            <Row>
              <span  style={{fontWeight:500}}> Hóa đơn đang chế biến</span>
            </Row>
            <Row style={{justifyContent:'space-between'}}>
                <Col span={15}>
                    Số lượng:
                </Col>
                <Col span={2}>
               {numActive}
                </Col>
            </Row>
          </div>
        </Col>
        <Col xs={24} md={6} className="colDashboard">
          <div className="layerTotal">
            <Row>
              <span  style={{fontWeight:500}}> Hóa đơn vận chuyển</span>
            </Row>
            <Row style={{justifyContent:'space-between'}}>
                <Col span={15}>
                    Số lượng:
                </Col>
                <Col span={2}>
                {numShip}
                </Col>
            </Row>
          </div>
        </Col>
        <Col xs={24} md={6} className="colDashboard">
          <div className="layerTotal">
            <Row>
              <span  style={{fontWeight:500}}> Hóa đơn hoàn thành</span>
            </Row>
            <Row style={{justifyContent:'space-between'}}>
                <Col span={15}>
                    Số lượng:
                </Col>
                <Col span={2}>
                {numSuc} 
                </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row style={{ maxHeight: "500px" }}>

        <ChartsPage />
      </Row>
    </div>
  );
};

export default Dashboard;
