
import { javascript,typescriptLanguage,  } from '@codemirror/lang-javascript';
import {html, htmlLanguage} from '@codemirror/lang-html'
import CodeMirror from '@uiw/react-codemirror';
import style from './App.css'
import {css} from '@codemirror/lang-css'
import { useState, useEffect} from 'react'
function App() {
const [js, setJS] = useState('/* Coloque Aqui o Javascript Feito Por Bruno  */')
const [HTML, setHtml] = useState('<!-- Coloque Aqui Seu HTML Feito Por Bruno -->')
const [CSS , setCSS] = useState('/* Coloque Seu CSS Aqui Feito Por Bruno */')
const [srcDoc, setSrcDoc] = useState('')
useEffect(()=>{
setTimeout(() => {
  setSrcDoc(`
    <html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    ${HTML}
  </body>
  <style>
    ${CSS}
    </style>
    <script>
    ${js}
    </script>
  </html>
    
    `)
}, 2500);
    
  }
  
)

  return (
    
      <div>
        <div className="painel">
    <iframe 
    srcDoc={srcDoc}
     frameborder="0"
    className='intepreter'
    
    sandbox='allow-scripts'
    />
    </div>
        <div className='JS'>
        <CodeMirror
        value={js}
        height="200px"
        width='400px'
        className='javascript BoxDeScript'
        
        theme={'dark'}
        extensions={[javascript({ jsx: true })]}
        onChange={setJS}
    
    />
    </div>

    

    <div className="HTML">
      <CodeMirror 
      value={HTML}
      height='200px'
      width='400px'
      className='html BoxDeScript'
      theme={'dark'}
      onChange={setHtml}
      extensions={[html({autoCloseTags: true, matchClosingTags:true,})]}
      />
    </div>
    <div className={style.css}>
    <CodeMirror
    value={CSS}
    height='220px'
    width='400px'
    className='css BoxDeScript'
    theme={"dark"}
    onChange={setCSS}
    extensions={[css({cssCompletion : true})]}
    />
    </div>
    
      </div>
  )
}

export default App;
