import React, { useContext } from "react"
import { Fade } from "react-reveal"
import emoji from "react-easy-emoji"
import "./Greeting.css"
import landingPerson from "../../assets/lottie/landingPerson"
import DisplayLottie from "../../components/displayLottie/DisplayLottie"
import SocialMedia from "../../components/socialMedia/SocialMedia"
import Button from "../../components/button/Button"
import Resume from "../../assets/resume.pdf"

import { illustration, greeting } from "../../portfolio"
import StyleContext from "../../contexts/StyleContext"

export default function Greeting() {
	const { isDark } = useContext(StyleContext)
	if (!greeting.displayGreeting) {
		return null
	}
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="greet-main" id="greeting">
				<div className="greeting-main">
					<div className="greeting-text-div">
						<div>
							<h1
								className={isDark ? "dark-mode greeting-text" : "greeting-text"}
							>
								{" "}
								{greeting.title}{" "}
								<span className="wave-emoji">{emoji("👋")}</span>
							</h1>
							<p
								className={
									isDark
										? "dark-mode greeting-text-p"
										: "greeting-text-p subTitle"
								}
							>
								{greeting.subTitle}
							</p>
							<SocialMedia />
							<div className="button-greeting-div">
								<Button
									text="See my resume"
									newTab={true}
									href={Resume}
									download
								/>
							</div>
						</div>
					</div>
					<div className="greeting-image-div">
						<img
							className="profile-image"
							src={require("../../assets/images/profile.jpeg").default}
						/>
					</div>
				</div>
			</div>
		</Fade>
	)
}
