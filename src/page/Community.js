import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import CBody from '../body/CBody'

export default function Community({match}) {
  return (
    <div>
        <Header />
        <CBody index={match.params.index}/>
        <Footer />
    </div>
  )
}
