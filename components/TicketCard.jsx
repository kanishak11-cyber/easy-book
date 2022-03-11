import React from 'react'
import '../styles/Ticket.module.css'

function TicketCard() {
  return (
    <div className=" back">
      <div className="card">
        <div className="w- absolute">easy book</div>
        <img src="https://chart.apis.google.com/chart?cht=qr&chs=500x500&chl=Hello&choe=UTF-8" />

        <div className="number">
          <h1>3</h1>
          <h6>tickets</h6>
        </div>
        <div className="date">Friday, 11 March, 2022 Booking ID - TZAZB8C</div>
      </div>
    </div>
  )
}

export default TicketCard
