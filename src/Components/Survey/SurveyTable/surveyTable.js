import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faPlus,faFilter} from '@fortawesome/free-solid-svg-icons';

import './survey.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Card from '../Cards/card';


export default function SurveyTable() {
 const [count,setCount] = useState(0)
 
 

  return (
    <div>
    <Navbar />
    <Sidebar />
    <Card className="card1" />
    <Card className="card2" />
    <Card className="card3" />
    <Card className="card4" />
   

    <div className='SurveyTable'>
    <h1 className='Heading1'> Surveys ({count}) </h1>
    <input className='search' placeholder='       Search by Survay Name' type="text" />
    <FontAwesomeIcon icon={faSearch} className="fa-search"/>
    
    <button  type="button" className="create"  onClick={() => setCount(count + 1)}><FontAwesomeIcon icon={faPlus} className='plus' /></button>
    <div className='filter' ><FontAwesomeIcon icon={faFilter} className='ficon' /></div>
    </div>
    
    </div>

    );
}
