import React from 'react';

const ToggleButton = ({onChange}) => {
	return (
		<>
			<label class='switch'>
				<input type='checkbox' id='togBtn' onChange={(e) => onChange(e.target.checked)} defaultChecked={true} />
				<div class='toggle round'>
					<span class='on'>Dual</span>
					<span class='off'>Mono</span>
				</div>
			</label>
		</>
	);
};

export default ToggleButton;
