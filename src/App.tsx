import React from 'react';

import webdelopment from './webdelopment.svg'

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <main>
        <h2> Аренда коммерческой </h2>
        <h2 className='card2'> недвижимости </h2>
        <p> Новосибирск </p>
        <LocationOnIcon  sx={{ color:'gray', position: "relative", left: -132, top:-22, fontSize: 20 }}/>
        <h4 className='bbb'> Посмотрите сами - сколько новосибирцев </h4>
        <h4 className='lll'> регулярно проводят время на подобных  </h4>
         <h4 className='ddd'> ресурсах и  </h4>
          </main>

          <div className='london'>
            <h2> Актуальные периоды (50): </h2>
            <ol className='love1'>
              <li> 4 квартал 2022  </li>
              <br/>
              <li > 4 квартал 2022 </li>
              <br/>
              <li>4 квартал 2022 </li>
              <h5 className='aaa'> MSDS_CNT_NVSB_2021Q3_V1 </h5>
              <h5 className='fff'> MSDS_CNT_NVSB_2021Q3_V1 </h5>
              <h5 className='ggg'> MSDS_CNT_NVSB_2021Q3_V1 </h5>
              <h5 className='hhh'>28 000p</h5>
              <h5 className='jjj'>28 000p</h5>
              <h5 className='kkk'>28 000p</h5>
              <p className='zzz'> Слой</p>
              <img src={ webdelopment } className="logo" alt="logo" />
            </ol>
          </div>
      </div>
    </div>
  );
}

export default App;
