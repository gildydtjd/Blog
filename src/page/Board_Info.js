import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import queryString from 'query-string';

const Board_Info = ({match, location}) => {
  const index= queryString.parse(location.search).index;
  console.log(index);
  console.log(match.params);
    return (
      <div>
        <Header />
        <Footer />
        <>{match.params.index}</>
      </div>
    )
  }
  export default Board_Info;
