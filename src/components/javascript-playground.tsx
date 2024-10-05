"use client"

import { useState, useRef, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import { Button } from "@/components/ui/button"

export default function JavaScriptPlayground() {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const editorRef = useRef(null)

  useEffect(() => {
    // Load code from local storage on component mount
    const savedCode = localStorage.getItem('javascriptPlaygroundCode')
    if (savedCode) {
      setCode(savedCode)
    } else {
      setCode('// Write your JavaScript code here\n// Press Cmd+Enter (or Ctrl+Enter) to run\nconsole.log("Hello, World!");')
    }
  }, [])

  useEffect(() => {
    // Save code to local storage whenever it changes
    if (code) {
      localStorage.setItem('javascriptPlaygroundCode', code)
    }
  }, [code])

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor

    editor.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
      () => {
        executeCode()
      }
    )
  }

  const executeCode = () => {
    if (!editorRef.current) return

    const consoleLog = console.log
    const consoleError = console.error
    const consoleWarn = console.warn
    let outputBuffer = []

    console.log = (...args) => {
      outputBuffer.push(args.join(' '))
      consoleLog(...args)
    }
    console.error = (...args) => {
      outputBuffer.push(`Error: ${args.join(' ')}`)
      consoleError(...args)
    }
    console.warn = (...args) => {
      outputBuffer.push(`Warning: ${args.join(' ')}`)
      consoleWarn(...args)
    }

    try {
      eval(editorRef.current.getValue())
    } catch (error) {
      outputBuffer.push(`Runtime Error: ${error.message}`)
    }

    console.log = consoleLog
    console.error = consoleError
    console.warn = consoleWarn

    setOutput(outputBuffer.join('\n'))
  }
  function copyValue() {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard");
  }
  return (
    <div className="flex flex-col h-full   ">
      <div className='flex flex-row' >
        <h1 className='h3' >Javascript Playground</h1>
        <Button className='ml-auto' onClick={copyValue}>Copy Code</Button>
      </div>
      <p className='body my-5'>Write and run JavaScript code in the browser.</p>

      <div className="flex-1 min-h-0 relative w-full">
        <Editor
          height="100%"
          width="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={setCode}
          onMount={handleEditorDidMount}
          theme='light'//"vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: true,
            scrollBeyondLastLine: false,
            readOnly: false,
          }}
        />
        <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
          Press Cmd+Enter (or Ctrl+Enter) to run
        </div>
      </div>

      <div className="p-4 bg-muted">
        <Button onClick={executeCode} className="mb-4">
          Run Code
        </Button>

        <div className="bg-black text-white p-4 rounded-md h-48 overflow-auto font-mono">
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  )
}