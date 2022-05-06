import React from "react";
import Device from "../../components/Device/Device";
import Location from "../../components/Location/Location";
import Source from "../../components/Source/Source";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import Activity from "../../components/Activity/Activity";
import "./home.css";
import { Col, Row } from "react-bootstrap";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

export default function Home() {
  return (
    <div className='container'>
      {/* <Activity />
      <Device />
      <Source  />
      <Location /> */}
      <Row className="sectionA">
        <Col md={6}>
          <img src="" alt="" />
          <div>
            <h5>Name</h5>
            <h5>ONLINE ACTIVITY REPORT</h5>
            <h5>March 2021</h5>
          </div>
        </Col>
        <Col md={6}>
          <Activity />
        </Col>
      </Row>
    </div>
  );
}
