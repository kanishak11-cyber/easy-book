import React from 'react'

function Card() {
  return (
    <div>
        <div className="px-24 h-screen bg-blue-700 flex flex-col justify-center items-center space-y-5">
   <div className="bg-white rounded-xl shadow-2xl">
      <div className="flex">
         <img src="https://images.unsplash.com/photo-1610720657521-c38abf6dbb7d?" alt="boy with camera" className="ml-1 rounded-xl object-scale-down h-80 w-80"/>
         <div className="p-8 w-80 h-100 bg-red">
            <h3 className="font-bold text-2xl mb-5">Build a Card</h3>
            <p>This card has a header, body, and footer. This is where the content of the card goes.</p>
            <form action="/">

                
            
            </form>

            <div className="flex items-center justify-center">
  <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
    <input type="date"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" data-mdb-toggle="datepicker" />
    <label for="floatingInput" className="text-gray-700">Select a date</label>
    <input type="number"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" data-mdb-toggle="datepicker" />
        <label for="floatingInput" className="text-gray-700">NO. of tickets</label>
  </div>
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Pay</button>
</div>
          </div>
      </div>
      {/* <footer className="rounded-b-lg bg-gray-100 text-sm text-gray-500 px-8 py-3 text-right">
        Updated 3 days ago
      </footer> */}
   </div>
   </div>
    </div>
  )
}

export default Card