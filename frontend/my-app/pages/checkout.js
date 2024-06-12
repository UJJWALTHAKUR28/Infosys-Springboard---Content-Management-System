import React, { useEffect ,useState} from 'react'

const checkout1 = ({cart}) => {
  const[subtotal,SetSubtotal]=useState(0)
  const[form,setForm]=useState({name:"",email:"",phone:"",message:""})
  useEffect(() => {
   console.log(cart)
   let myTotal =0
for(let index=0;index<cart.length;index++){
  const element = cart[index];
  myTotal= myTotal+cart[index][1]
} SetSubtotal(myTotal)
  }, [])
  const handleChange=()=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <div><section className="text-black body-font relative">
    <div className="container px-5 py-24 mx-auto min-h-screen">
      <div className="flex flex-col  w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">CHECKOUT</h1>
     <h2 className='text-2xl font-medium'>CART</h2>
     <div className='cart'>{cart.length?`Your Cart details`:`Cart is empty `}</div>
     <ul className='list-decimal px-8'>
     {cart.map((item)=>{
      return <li>
        {item[0]} {item[2]} with a price of {item[1]}
        
      </li>
     })}
     <div className='font-bold text-2xl my-4'>
     SUBTOTAL:{subtotal}
     </div>
     
     </ul>
     
      </div>
      <div className=" ">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input onChange={handleChange}  value={form.name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2  w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input onChange={handleChange} value={form.email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2  w-1/2">
            <div className="relative">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
              <input onChange={handleChange} value={form.message}  type="phone" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">ADDRESS</label>
              <textarea onChange={handleChange} value={form.text} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">PAY NOW</button>
          </div>
  
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default checkout1