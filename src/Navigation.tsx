import React, { useState } from 'react';
import jsonData from './myData';
import './scss/navigation.scss';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';


interface NavigationProps {
  jsonData: typeof jsonData;
  receiveType: (data: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ jsonData, receiveType }) => {

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    receiveType(event.currentTarget.textContent || '');
  };

  return (
    <div className='tabs'>
        <ul className='tab-headers'>
          <Link to='/income'><li onClick={handleClick} key={uuid()}>income</li></Link>
          <Link to='/outcome'><li onClick={handleClick} key={uuid()}>outcome</li></Link>
          <Link to='/loan'><li onClick={handleClick} key={uuid()}>loan</li></Link>
          <Link to='/investment'><li onClick={handleClick} key={uuid()}>investment</li></Link>
        </ul>
    </div>
  );
};

export default Navigation;


        
