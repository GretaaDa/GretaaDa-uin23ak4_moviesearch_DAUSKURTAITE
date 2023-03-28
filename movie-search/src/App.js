import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Main from './components/Main';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
