import React, { useCallback, useEffect } from 'react'
import useCodeMirror from './use-codemirror'
import './editor.css'

interface Props {
  initialDoc: string,
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props
  const handleChange = useCallback(
    state => onChange(state.doc.toString()),
    [onChange]
  )
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView])

  //todo 修改editor内容
  const changeVal = () => {
    if (editorView) {
      const newContent = editorView.state.doc + '\r\n' + '# 123';
      editorView.dispatch(editorView.state.replaceSelection(newContent));
    }
  };

  // return <div className='editor-wrapper' ref={refContainer}></div>
  return <div>
    <button onClick={() => changeVal()}>点击添加</button>
    <div className="editor-wrapper" ref={refContainer}></div>
  </div>;


};

export default Editor;
