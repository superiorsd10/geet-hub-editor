import React from 'react';

const ToggleButton = () => {
	return (
		<>
			<label class='switch'>
				<input type='checkbox' id='togBtn' />
				<div class='toggle round'>
					<span class='on'>Dual</span>
					<span class='off'>Mono</span>
				</div>
			</label>
		</>
	);
};

export default ToggleButton;
