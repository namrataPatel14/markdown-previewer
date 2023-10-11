
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MarkdownGuide from './components/MarkdownGuide';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';

function App() {
  const [ showGuide, setShowGuide ] = useState<boolean>(false)
  const [markdown, setMarkdown] = useState<string>(`# Hello World`);

  const handleChange = () =>{
    setShowGuide(!showGuide)
    console.log(showGuide);
  }
  const handleOnMarkChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };
  return (
    <>
      <Header onToggleGuide={handleChange}/>
      {showGuide && <MarkdownGuide />}
      <div>
        <MarkdownInput value={markdown} onChange={handleOnMarkChange} />
        <MarkdownOutput markdown={markdown} />
      </div>
    </>
  )
}

export default App
