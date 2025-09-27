import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import './App.css'
import Body from './components/Body'
import InterviewerPage from './components/InterviewerPage'
import CandidatePage from './components/CandidatePage'

function App() {

  return (
    <div>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />}>
            <Route index element={<Navigate to="/candidate" replace />} />
            <Route path='/interviewer' element={<InterviewerPage />} />
            <Route path='/candidate' element={<CandidatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
