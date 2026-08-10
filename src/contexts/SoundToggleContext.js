"use client";
import React from "react";

export const SoundToggleContext = React.createContext();

function SoundToggleProvider({ children }) {
	const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);

	function toggleSoundEnabled() {
		setIsSoundEnabled(!isSoundEnabled);
	}

	return (
		<SoundToggleContext.Provider value={{ isSoundEnabled, toggleSoundEnabled }}>
			{children}
		</SoundToggleContext.Provider>
	);
}

export default SoundToggleProvider;
