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
import { IoLaptopOutline } from "react-icons/io5";
import { MdPageview } from "react-icons/md";
import { BiTimer,BiDoorOpen } from "react-icons/bi";
import Blank  from '../../assets/blank.png'
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
    <div className="container homeContainer">
     
      <Row className="sectionA">
        <Col md={6} className='left'>
          <div>
          <img src={Blank} alt="" />
          </div>
          <div>
            <h5 style={{fontWeight:'600'}}>Name</h5>
            <h5 style={{fontWeight:'600'}} className='primary-color'>ONLINE ACTIVITY REPORT</h5>
            <h5 style={{fontWeight:'600'}}>March 2021</h5>
          </div>
        </Col>
        <Col md={6}>
          <Activity />
        </Col>
      </Row>
      <Row className="sectionB">
        <Col md={3}>
          <div>
            <p>People Who Viewed <br /> Your Page</p>
            <div className='count'>
              <IoLaptopOutline />
              <h2>734</h2>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <p>Times Your Page <br /> was Viewed</p>
            <div className='count'>
              <MdPageview />
              <h2>1046</h2>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <p>Average minutes <br /> Spent on Your Page</p>
            <div className='count'>
              <BiTimer />
              <h2>1.6</h2>
            </div>
          </div>
        </Col>
        <Col md={3}>
        <div>
            <p>Pageviews Where this Page <br /> Was the Entry Page</p>
            <div className='count'>
              <BiDoorOpen />
              <h2>35%</h2>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='sectionC'>
        <Col md={4}>
          <Device />
        </Col>
        <Col md={4}>
          <Source />
        </Col>
        <Col md={4}>
          <Location />
        </Col>
      </Row>
    </div>
  );
}
