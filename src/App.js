
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
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage user={user} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add" element={<AddProject />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
