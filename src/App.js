// import AppStore from './components/AppStore'

// import './App.css'

// const App = () => <AppStore />

// export default App

import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}
