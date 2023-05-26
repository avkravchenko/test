import React, { useState } from 'react';
import jsonData from './myData';
import './scss/navigation.scss';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';


interface NavigationProps {
  jsonData: typeof jsonData;
}

const Navigation: React.FC<NavigationProps> = ({ jsonData }) => {

  return (
    <div className='tabs'>
        <ul className='tab-headers'>
          <Link to='/income'><li key={uuid()}>income</li></Link>
          <Link to='/outcome'><li key={uuid()}>outcome</li></Link>
          <Link to='/loan'><li key={uuid()}>loan</li></Link>
          <Link to='/investment'><li key={uuid()}>investment</li></Link>
        </ul>
    </div>
  );
};

export default Navigation;


        
