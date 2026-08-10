import React from "react";

import Header from "../components/Header";

import "./styles.css";
import SoundToggleProvider from "../contexts/SoundToggleContext";

function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<SoundToggleProvider>
					<Header />
					{children}
					<footer>
						<img src="/ie-badge.gif" width={100} />
						<span>Thanks for visiting!</span>
					</footer>
				</SoundToggleProvider>
			</body>
		</html>
	);
}

export default RootLayout;
