import React, { useState } from 'react';
import './App.css';

function App() {
	const [markdown, setMarkdown] = useState('# sup');

	const changeHandler = (e) => {
		setMarkdown(e.target.value);
	};

	return (
		<div className='app'>
			<textarea value={markdown} onChange={changeHandler} />

			<div className='preview'>{markdown}</div>
		</div>
	);
}

export default App;
