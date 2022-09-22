import React, { useEffect, useState } from 'react'
import './Covid.css'

function Covid() {
    const [data, setData] = useState([ ]);

    const getCovidData = async() =>{
        try{
          const res =await fetch('https://data.covid19india.org/data.json');
          //console.log(res); //just for checking in console
          const actualData = await res.json();
        //   console.log(actualData); 
          console.log(actualData.statewise[0]);  //  statewise data and only 1 
        setData(actualData.statewise[0]);
       
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

  return (
    <>
    <section>
    <h1><span className="dot"></span>Live</h1>
    <h2>COVID-19 Tracker</h2>

    <ul className="flex-container">
        <li className="flex-item"> 
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name">OUR<span>COUNTRY</span></p>
                    <p className="card_total card_same">INDIA</p>
                </div>
            </div>
        </li>
        
        <li className="flex-item"> 
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name">TOTAL<span>RECOVERD</span></p>
                    <p className="card_total card_same">{data.recovered}</p>
                </div>
            </div>
        </li>
        
        <li className="flex-item"> 
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name">TOTAL<span>CONFIRMED</span></p>
                    <p className="card_total card_same">{data.confirmed}</p>
                </div>
            </div>
        </li>
        
        
        <li className="flex-item"> 
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name">TOTAL<span>DEATHS</span></p>
                    <p className="card_total card_same">{data.deaths}</p>
                </div>
            </div>
        </li>
        <li className="flex-item"> 
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name">TOTAL<span>ACTIVE</span></p>
                    <p className="card_total card_same">{data.active}</p>
                </div>
            </div>
        </li>
        <li className="flex-item"> 
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name">LAST<span>UPDATE</span></p>
                    <p className="card_total card_same">{data.lastupdatedtime}</p>
                </div>
            </div>
        </li>
    </ul>
    </section>
    </>
  )
}

export default Covid