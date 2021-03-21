import React, { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

function App() {
	const [markdown, setMarkdown] = useState('# sup');

	const changeHandler = (e) => {
		setMarkdown(e.target.value);
	};

	return (
		<div className='app'>
			<textarea value={markdown} onChange={changeHandler} />

			<ReactMarkdown className='preview' children={markdown} />
		</div>
	);
}

export default App;
