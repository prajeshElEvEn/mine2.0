
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomeNav from './components/HomeNav';
import RegisterPage from './pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import AddProject from './pages/AddProject';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <>
      <HomeNav />
      <Routes>
        <Route path="/mine2.0" element={<HomePage />} />
        <Route path="/mine2.0/works" element={<WorksPage user={user} />} />
        <Route path="/mine2.0/about" element={<AboutPage />} />
        <Route path="/mine2.0/contact" element={<ContactPage />} />
        <Route path="/mine2.0/register" element={<RegisterPage />} />
        <Route path="/mine2.0/add" element={<AddProject />} />
      </Routes>
      <ScrollToTop />
      <ToastContainer />
    </>
  );
}

export default App;
