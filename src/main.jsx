import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Router/router.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
<div className='overflow-hidden  container mx-auto '>
<RouterProvider router={router} />
</div>
  </React.StrictMode>,
)
