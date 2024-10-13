'use client';
import { type editor } from 'monaco-editor';
import { useState, useRef, useEffect, useCallback, useMemo, Ref } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import { Button } from '@/components/ui/button';
import { throttle } from '@/utils/throttle';

export default function JavaScriptPlayground() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const editorRef: {
    current: editor.IStandaloneCodeEditor | null;
  } = useRef(null);

  useEffect(() => {
    // Load code from local storage on component mount
    const savedCode = localStorage.getItem('javascriptPlaygroundCode');
    if (savedCode) {
      setCode(savedCode);
    } else {
      setCode(
        '// Write your JavaScript code here\n// Press Cmd+Enter (or Ctrl+Enter) to run\nconsole.log("Hello, World!");'
      );
    }
  }, []);

  const executeCode = useCallback(() => {
    if (!editorRef.current) return;

    const consoleLog = console.log;
    const consoleError = console.error;
    const consoleWarn = console.warn;
    let outputBuffer = [];

    console.log = (...args) => {
      outputBuffer.push(args.join(' '));
      consoleLog(...args);
    };
    console.error = (...args) => {
      outputBuffer.push(`Error: ${args.join(' ')}`);
      consoleError(...args);
    };
    console.warn = (...args) => {
      outputBuffer.push(`Warning: ${args.join(' ')}`);
      consoleWarn(...args);
    };

    try {
      eval(editorRef.current.getValue());
    } catch (error: any) {
      outputBuffer.push(`Runtime Error: ${error.message}`);
    }

    console.log = consoleLog;
    console.error = consoleError;
    console.warn = consoleWarn;

    setOutput(outputBuffer.join('\n'));
  }, []);

  const executeCodeThrottle = useMemo(
    () => throttle(executeCode, 500),
    [executeCode]
  );

  useEffect(() => {
    // Save code to local storage whenever it changes
    if (code) {
      localStorage.setItem('javascriptPlaygroundCode', code);
      if (editorRef.current) {
        executeCodeThrottle();
      }
    }
  }, [code, executeCodeThrottle]);

  const handleEditorDidMount = (
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) => {
    editorRef.current = editor;

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      executeCode();
    });
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      executeCode();
    });
  };

  const handleEditorChange = (
    value: string | undefined,
    ev: editor.IModelContentChangedEvent
  ) => {
    setCode(value || '');
  };

  function copyValue() {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard');
  }

  return (
    <div className="flex p-2 h-full w-full gap-4 flex-col sm:flex-row">
      <div className="flex flex-1 flex-col   sm:h-full sm:w-7/12">
        <div className="flex mb-4 gap-4">
          <h1 className="h3">JavaScript Playground</h1>
          <Button className="ml-auto" onClick={copyValue}>
            Copy Code
          </Button>
          <Button onClick={executeCode} className="mb-4">
            Run Code
          </Button>
        </div>
        <div className="h-full relative w-full  overflow-scroll">
          <Editor
            height="100%"
            width="100%"
            defaultLanguage="javascript"
            value={code}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            theme="light" //"vs-dark"
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
      </div>

      <div className="relative h-40 sm:h-full bg-muted sm:w-5/12">
        <div className="bg-black text-white p-4 mb-4 rounded-md h-full overflow-auto font-mono">
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}
