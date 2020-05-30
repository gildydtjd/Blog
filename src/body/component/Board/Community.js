import React from 'react'
import { Link } from 'react-router-dom';
import './community.css'

export default function Community() {
  const tableData = [
    {
      number: 1,
      title: '하이1',
      writter: '길용성',
      date: Date(),
      lookUp : 0,
      like: 0
    },
    {
      number: 2,
      title: '하이2',
      writter: '길용성',
      date: Date(),
      lookUp : 0,
      like: 0
    },
    {
      number: 3,
      title: '하이3',
      writter: '길용성',
      date: Date(),
      lookUp : 0,
      like: 0
    },
    {
      number: 4,
      title: '하이4',
      writter: '길용성',
      date: Date(),
      lookUp : 0,
      like: 0
    },
    {
      number: 5,
      title: '하이5',
      writter: '길용성',
      date: Date(),
      lookUp : 0,
      like: 0
    },
  ]
  console.log({tableData});

    return (
      <div>
        <table className="table_box">
          <tr className='title_tr'>
            <td className='title_td'>번호</td>
            <td className='title_td'>제목</td>
            <td className='title_td'>작성자</td>
            <td className='title_td'>작성일</td>
            <td className='title_td'>조회</td>
            <td className='title_td'>좋아요</td>
          </tr>

          {tableData.map(data =>{
            return(
            <tr>
              <td>{data.number}</td>
              <Link to={'/BoardInfo/'+ data.number}><td>{data.title}</td> </Link>
              <td>{data.writter}</td>
              <td>{data.date}</td>
              <td>{data.lookUp}</td>
              <td>{data.like}</td>
            </tr>
          )})}

        </table>
          <Link to='/Board'><button className='table_button'>글쓰기</button></Link>
      </div>
    )
  }
