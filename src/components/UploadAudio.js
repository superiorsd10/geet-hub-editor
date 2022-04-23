import React, { useState, useEffect, useRef, useContext } from 'react';
import { FileContext } from '../contexts/fileContext';
import logo from '../assets/images/logo.png';

const UploadAudio = ({ history }) => {
	const inputFile = useRef(null);
	const { fileURL, setFileURL } = useContext(FileContext);
	const [file, setFile] = useState(null);

	useEffect(() => {
		if (file) {
			setFileURL(file);
			history.push('/edit');
		}
	}, [file, setFileURL, history]);

	const handleButtonClick = () => {
		inputFile.current.click();
	};

	const handleFileUpload = (e) => {
		// console.log(file);
		setFile(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<div className='upload-audio'>
			<image src={logo} alt='logo' />
			<i
				style={{ color: '#274472' }}
				className='material-icons audio-icon'>
					
				library_music
			</i>
			<h1>Upload your audio file here</h1>
			<button className='upload-btn' onClick={handleButtonClick}>
				Upload
			</button>
			<input
				type='file'
				id='file'
				ref={inputFile}
				style={{ display: 'none' }}
				accept='audio/*'
				onChange={handleFileUpload}
			/>
		</div>
	);
};

export default UploadAudio;
