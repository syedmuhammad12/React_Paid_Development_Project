import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import {FaHome} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./footercss";
import { Link } from "react-router-dom";

export const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Important Links</Heading>
			<Link to="/home">Home</Link>
			<FooterLink href="#">Values</FooterLink>
			<FooterLink href="#">Services</FooterLink>
			<FooterLink href="#">Clients</FooterLink>
		</Column>
		<Column>
			<FooterLink href="#">Industries</FooterLink>
			<FooterLink href="#">Career</FooterLink>
		</Column>
		<Column className="contactus">
			<Heading>Contact Us</Heading>
			<FooterLink href="#">
            <i>
				<span style={{ marginLeft: "0px" }}>
				<FaHome/>  &nbsp; Ned University Karachi
				</span>
			</i>
            </FooterLink>
			<FooterLink href="#">
            <i>
				<span style={{ marginLeft: "0px" }}>
				<FiMail/>  &nbsp;hivefive@gmail.com
				</span>
			</i>
            </FooterLink>
            <FooterLink href="#">
            <i>
				<span style={{ marginLeft: "0px" }}>
				<FaPhoneAlt/>  +92-3236969696
				</span>
			</i>
            </FooterLink>
         
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
                <SocialIcon url="https://instagram.com/cristiano?igshid=YmMyMTA2M2Y=" />
                </span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				<SocialIcon url="https://m.facebook.com/NEDUETOfficial/" />
				</span>
                
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				<SocialIcon url="https://twitter.com/jaketrent" />
				</span>
                
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	<p style={{color: 'white'}}>All rights reserved 2022</p>
	</Box>
);
};
export default Footer;
