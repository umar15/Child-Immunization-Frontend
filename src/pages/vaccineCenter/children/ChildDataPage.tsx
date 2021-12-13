import React from "react";
import { Container, Col, Row } from "reactstrap";
import Footer from "../../../components/footer/Footer";
import FooterBottom from "../../../components/footer/FooterBottom";
import AdminHeader from "../../../components/header/AdminHeader";
import "../../../index.css";
import Sidebar from "./../Sidebar";
import ChildData from "./ChildData";

const ChildDataPage = () => {
	return (
		<>
			<AdminHeader userType="Vaccine center" />
			<Container className="admin-container">
				<Row>
					<Col className="sidebar-row" lg="3">
						<Sidebar height="1400px" />
					</Col>
					<Col lg="9">
						<ChildData />
					</Col>
				</Row>
			</Container>
			<Footer />
			<FooterBottom />
		</>
	);
};

export default ChildDataPage;
