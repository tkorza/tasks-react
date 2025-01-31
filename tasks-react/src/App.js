import './App.css';
import { Route, Routes } from 'react-router-dom';
import JSX1 from './tasks/04.jsx/1'
import JSX2 from './tasks/04.jsx/2'
import JSX3 from './tasks/04.jsx/3'
import JSX4 from './tasks/04.jsx/4'
import JSX5 from './tasks/04.jsx/5'
import JSX6 from './tasks/04.jsx/6';
import JSX2_1 from './tasks/05.event/1';
import JSX2_2 from './tasks/05.event/2';
import JSX2_3 from './tasks/05.event/3';
import JSX2_4 from './tasks/05.event/4';
import JSX2_5 from './tasks/05.event/5';
import JSX2_6 from './tasks/05.event/6';
import JSX2_7 from './tasks/05.event/7';
import JSX2_8 from './tasks/05.event/8';
import JSX3_1 from './tasks/05.event/event/1';
import JSX3_2 from './tasks/05.event/event/2';
import JSX3_3 from './tasks/05.event/event/3';
import JSX3_4 from './tasks/05.event/event/4';
import Task1 from './tasks/06.useState/1';
import Task2 from './tasks/06.useState/2';
import Task3 from './tasks/06.useState/3';
import Task4 from './tasks/06.useState/4';
import Task5 from './tasks/06.useState/5';
import Task6 from './tasks/06.useState/6';
import Task7 from './tasks/06.useState/7';
import Task8 from './tasks/06.useState/8';
import Task9 from './tasks/06.useState/9';
import Task10 from './tasks/06.useState/10';
import JSX3_5 from './tasks/05.event/event/5';
import JSX3_6 from './tasks/05.event/event/6';
import Axios from './tasks/axios';



function App() {
  return (
    <Routes>
      <Route path='/jsx/1' element={<JSX1></JSX1>}></Route>
      <Route path='/jsx/2' element={<JSX2></JSX2>}></Route>
      <Route path='/jsx/3' element={<JSX3></JSX3>}></Route>
      <Route path='/jsx/4' element={<JSX4></JSX4>}></Route>
      <Route path='/jsx/5' element={<JSX5></JSX5>}></Route>
      <Route path='/jsx/6' element={<JSX6></JSX6>}></Route>

      <Route path='/event/1' element={<JSX2_1></JSX2_1>}></Route>
      <Route path='/event/2' element={<JSX2_2></JSX2_2>}></Route>
      <Route path='/event/3' element={<JSX2_3></JSX2_3>}></Route>
      <Route path='/event/4' element={<JSX2_4></JSX2_4>}></Route>
      <Route path='/event/5' element={<JSX2_5></JSX2_5>}></Route>
      <Route path='/event/6' element={<JSX2_6></JSX2_6>}></Route>
      <Route path='/event/7' element={<JSX2_7></JSX2_7>}></Route>
      <Route path='/event/8' element={<JSX2_8></JSX2_8>}></Route>

      <Route path='/event/2-1' element={<JSX3_1></JSX3_1>}></Route>
      <Route path='/event/2-2' element={<JSX3_2></JSX3_2>}></Route>
      <Route path='/event/2-3' element={<JSX3_3></JSX3_3>}></Route>
      <Route path='/event/2-4' element={<JSX3_4></JSX3_4>}></Route>
      <Route path='/event/2-5' element={<JSX3_5></JSX3_5>}></Route>
      <Route path='/event/2-6' element={<JSX3_6></JSX3_6>}></Route>


      <Route path='/useState/1' element={<Task1></Task1>}></Route>
      <Route path='/useState/2' element={<Task2></Task2>}></Route>
      <Route path='/useState/3' element={<Task3></Task3>}></Route>
      <Route path='/useState/4' element={<Task4></Task4>}></Route>
      <Route path='/useState/5' element={<Task5></Task5>}></Route>
      <Route path='/useState/6' element={<Task6></Task6>}></Route>
      <Route path='/useState/7' element={<Task7></Task7>}></Route>
      <Route path='/useState/8' element={<Task8></Task8>}></Route>
      <Route path='/useState/9' element={<Task9></Task9>}></Route>
      <Route path='/useState/10' element={<Task10></Task10>}></Route>

      <Route path='/axios' element={<Axios></Axios>}></Route>

    </Routes>);
}

export default App;
