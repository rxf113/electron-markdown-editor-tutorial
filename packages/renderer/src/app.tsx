import React, {useState, useCallback} from 'react';
import Editor from './editor';
import Preview from './preview';
import './app.css';

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!\n');

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc);
    console.log("use call back");
  }, []);


  //todo 修改内容
  const changeVal = () => {
   // setDoc(doc + '\r\n' + '## 二级标题');
    const newDoc = doc + '\r\n' + '## 二级标题';
    handleDocChange(newDoc)
  };


  return (
    <div className="app">
      <button onClick={() => changeVal()}></button>
      <Editor onChange={handleDocChange} initialDoc={doc}/>
      <Preview doc={doc}/>
    </div>
  );
};

export default App;
