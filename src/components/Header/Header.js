"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";
import { SoundToggleContext } from "../../contexts/SoundToggleContext";

function Header() {
	const id = React.useId();

	// TODO: Global state?
	const { isSoundEnabled, toggleSoundEnabled } =
		React.useContext(SoundToggleContext);

	return (
		<header className={styles.wrapper}>
			<MaxWidthWrapper className={styles.innerWrapper}>
				<a href="/">Kool Website</a>

				<button
					onClick={() => {
						toggleSoundEnabled();
					}}
				>
					{isSoundEnabled ? <Volume2 /> : <VolumeX />}
					<VisuallyHidden>
						{isSoundEnabled ? "Disable sound effects" : "Enable sound effects"}
					</VisuallyHidden>
				</button>
			</MaxWidthWrapper>
		</header>
	);
}

export default Header;
