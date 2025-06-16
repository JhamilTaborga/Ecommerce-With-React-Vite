import { useContext, useState, useRef } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../components/Layout'

function MyAccount() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  const form = useRef(null)

  const editAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    
    // Update account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
  }

  const renderUserInfo = () => {
    return (
      <div className='flex flex-col w-72 md:w-80 border border-gray-400 justify-center px-6 py-8 rounded-2xl'>
        <p>
          <span className='font-light text-sm'>Name: </span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button 
          className='font-semibold text-white bg-slate-500 border border-black rounded-full mt-6 py-3'
          onClick={() => setView('edit-user-info')}
        >
          Edit
        </button>
      </div>
    )
  }

  const renderEditUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col border border-gray-400 px-6 py-8 rounded-2xl my-4 gap-4 w-72 md:w-80'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='font-light text-sm'>Your name:</label>
          <input 
            type='text'
            id='name'
            name='name'
            defaultValue={parsedAccount.name}
            placeholder='Peter'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placerholder:text-black/60 focus:outline-none py-2 px-4' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='font-light text-sm'>Your email:</label>
          <input 
            type='text'
            id='email'
            name='email'
            defaultValue={parsedAccount.email}
            placeholder='hi@example.com'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placerholder:text-black/60 focus:outline-none py-2 px-4' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='font-light text-sm'>Your password:</label>
          <input 
            type='password'
            id='password'
            name='password'
            defaultValue={parsedAccount.password}
            placeholder='********'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placerholder:text-black/60 focus:outline-none py-2 px-4' />
        </div>
        <button
          className='bg-slate-500 text-white border border-black font-semibold w-full mt-3 rounded-full py-3'
          onClick={() => {setView('user-info'), editAccount()}}
        >Edit</button>
      </form>
    )
  }
  
  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()

    return (
      <Layout>
        <h1 className='font-medium text-xl mb-3'>My account</h1>
        {renderView()}
        {/* <section className='min-w-80 px-6 py-4 flex flex-col items-start justify-center border border-gray-400 rounded-2xl'>
          <h3 className='font-medium text-lg '>Name</h3>
          <p className='h-10 p-2 pl-4 mb-2 w-full text-slate-600 text-sm bg-slate-100 rounded-lg'>Jhamil Taborga</p>

          <h3 className='font-medium text-lg '>Email address</h3>
          <p className='h-10 p-2 pl-4 mb-2 w-full text-slate-600 text-sm bg-slate-100 rounded-lg'>jhamil@gmail.com</p>

          <h3 className='font-medium text-lg '>User name</h3>
          <p className='h-10 p-2 pl-4 mb-2 w-full text-slate-600 text-sm bg-slate-100 rounded-lg'>@JhaimCode</p>

          <h3 className='font-medium text-lg '>Password</h3>
          <p className='h-10 p-2 pl-4 mb-2 w-full text-slate-600 text-sm bg-slate-100 rounded-lg'>**********</p>

          <h3 className='font-medium text-lg '>Phone number</h3>
          <p className='h-10 p-2 pl-4 mb-2 w-full text-slate-600 text-sm bg-slate-100 rounded-lg'>+591 76238534</p>

          <button className='w-full h-10 mt-6 font-semibold text-white bg-slate-500 rounded-full'>Sign Out</button>
        </section> */}
      </Layout>
    )
  }
  
  export default MyAccount