import React from "react";
import { connect, styled } from "frontity";
import fb_icon from "../../static/images/fb-white-2.png";
import ig_icon from "../../static/images/ig-white.png";
import google_icon from "../../static/images/google.png";
import pin_icon from "../../static/images/pin.png";
import cw_icon from "../../static/images/cw-logo.png";
import heart from "../../static/images/heart.png";

const Footer = ({ state }) => {
	return (
		<>
			<FootRow>
				<Column className="column-1">
					<IconRow>
						<a href="#">
							<IconContainer>
								<Icon className="fb-icon icons" src={fb_icon} />
							</IconContainer>
						</a>

						<a href="#">
							<IconContainer className="ig-icon-container" >
								<Icon className="ig-icon icons" src={ig_icon} />
							</IconContainer>
						</a>

						<a href="#">
							<IconContainer>
								<Icon className="google-icon icons" src={google_icon} />
							</IconContainer>
						</a>

						<a href="#">
							<IconContainer>
								<Icon className="pin-icon icons" src={pin_icon} />
							</IconContainer>
						</a>
					</IconRow>

					<Column_n>
						715, Swastik Disa Corporate Park, Opp. Shreyas Cinemas, LBS Rd, Nityanand Nagar, Ghatkopar West, Mumbai 400086.
					</Column_n>
				</Column>

				<Column>
					<Column_n>
						715, Swastik Disa Corporate Park, Opp. Shreyas Cinemas, LBS Rd, Nityanand Nagar, Ghatkopar West, Mumbai 400086.
					</Column_n>
				</Column>

				<Column>
					<Column_n>
						715, Swastik Disa Corporate Park, Opp. Shreyas Cinemas, LBS Rd, Nityanand Nagar, Ghatkopar West, Mumbai 400086.
					</Column_n>
				</Column>
			</FootRow>

			<FootRow>
				<Copyright>
					©	2020, CaptainWeb LLP
				</Copyright>

				<Info>
					Made with
					<Icon className="heart" src={heart} />
					by
					<a href="https://captainweb.in">
						<Icon src={cw_icon} />
					</a>
				</Info>
			</FootRow>
		</>
	);
};

export default connect(Footer);

const FootRow = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 1.5rem 0;
`;

const Column = styled.div`
	width: 30%;
	display: flex;
	justify-content: center;
`;

const IconRow = styled.span`
	display: flex;
	flex-direction: row;
	width: auto;
	justify-content: center;
	margin: 1rem 0;
`;

const Icon = styled.img`
	width: 28px;
	height:	28px;
	transition: all 0.3s ease-in-out;
	border-radius: 5px;
	margin: 0 0.5rem;
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Copyright = styled.p`
	position: relative;
`;

const Info = styled.p`
	display: flex;
	align-items: center;
`;

const Column_n = styled.span`
	margin: 1rem 2rem;
	text-align: center;
`;
