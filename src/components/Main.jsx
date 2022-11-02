import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ExcelFile from './exceltojson/ExcelFile'
import ExcelDataFile from './jsontoexcel/ExcelDataFile'

function Main() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='navbar'>
          <Link to='/excelfile' >ExcelToJson</Link>
          <Link to='/exceldatafile'>JsonToExcel</Link>
        </div>

        <Routes>
          <Route path='/excelfile' element={<ExcelFile />} />
          <Route path='/exceldatafile' element={<ExcelDataFile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default Main;
