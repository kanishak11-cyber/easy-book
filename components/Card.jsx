import Link from 'next/link'
import React from 'react'

function Card() {
  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center space-y-5  px-24">
        <div className="rounded-xl bg-white shadow-2xl">
          <div className="flex">
            <img
              src="https://images.unsplash.com/photo-1610720657521-c38abf6dbb7d?"
              alt="boy with camera"
              className="ml-1 h-80 w-80 rounded-xl object-scale-down"
            />
            <div className="h-100 bg-red w-80 p-8">
              <h3 className="mb-5 text-2xl font-bold">Build a Card</h3>
              <p>
                This card has a header, body, and footer. This is where the
                content of the card goes.
              </p>
              <form action="/"></form>

              <div className="flex items-center justify-center">
                <div
                  className="datepicker form-floating relative mb-3 xl:w-96"
                  data-mdb-toggle-button="false"
                >
                  <input
                    type="date"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    placeholder="Select a date"
                    data-mdb-toggle="datepicker"
                  />
                  <label for="floatingInput" className="text-gray-700">
                    Select a date
                  </label>
                  <input
                    type="number"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    placeholder="Select a date"
                    data-mdb-toggle="datepicker"
                  />
                  <label for="floatingInput" className="text-gray-700">
                    NO. of tickets
                  </label>
                </div>
                <Link href="/ticket/TicketCard">
                  <button
                   
                    className=""
                  >
                    Pay
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Card
