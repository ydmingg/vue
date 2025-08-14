//严格模式：为组件的未来版本(例如，使用 Hook 的版本)进行错误边界检查。
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <App />
  </StrictMode>,
)
