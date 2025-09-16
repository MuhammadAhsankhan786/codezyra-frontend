import Fotter from '../component/Fotter'






const Contact = () => {
  return (
  <>
    <div className="h-[80vh] w-full font-poppins relative bg-[url('calculator-bg.jpg')] bg-cover bg-no-repeat bg-center px-20 py-1 flex justify-between items-center">
      <img src="hand.png" className='h-full ' alt="" />


      <div>
        <form className='flex justify-center flex-col gap-y-3 '>
          <div>
            <h1 className='text-2xl font-bold text-[#FF511A]' >Your Freedom</h1>
          <h1 className='text-4xl font-bold text-[#FFf]' >Get a Financial Plan</h1>
          </div>

         <div className='flex gap-x-4 text-white'>
           <input type="text" placeholder=' First Name' className='py-2 px-3 bg-gray-700 text-white outline-none rounded-md'/>
           <input type="text" placeholder='Last Name ' className='py-2 px-3 bg-gray-700 text-white outline-none rounded-md' />
         </div>

         <div className='flex gap-x-4 text-white'>
          <input type="email" placeholder='Email' className='py-2 px-3 bg-gray-700 text-white outline-none rounded-md' />
         <input type="number" placeholder='Phone No' className='py-2 px-3 bg-gray-700 text-white outline-none rounded-md' />
         </div>

         
        <div>
          
        </div>

        <button className='bg-[#FF511A] text-white py-2 px-3 rounded-md'>Submit Now </button>

        </form>
      </div>
    </div>
   
  </>
  )
}

export default Contact
