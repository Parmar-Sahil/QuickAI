
import { Routes, Route } from 'react-router-dom'
import BlogTitles from './pages/BlogTitles'
import Community from './pages/Community'
import Dashboard from './pages/Dashboard'
import GenerateImage from './pages/GenerateImage'
import Home from './pages/Home'
import Layout from './pages/Layout'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'
import WriteArticle from './pages/WriteArticle'
import {Toaster} from 'react-hot-toast'

function App() {
  
  

  return (
    <>
    <Toaster />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ai' element={<Layout></Layout>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='write-article' element={<WriteArticle></WriteArticle>}></Route>
          <Route path='blog-titles' element={<BlogTitles></BlogTitles>}></Route>
          <Route path='generate-image' element={<GenerateImage></GenerateImage>}></Route>
          <Route path='remove-background' element={<RemoveBackground></RemoveBackground>}></Route>
          <Route path='remove-object' element={<RemoveObject></RemoveObject>}></Route>
          <Route path='review-resume' element={<ReviewResume></ReviewResume>}></Route>
          <Route path='community' element={<Community></Community>}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
