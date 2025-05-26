import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../components/Layout'

function SignIn() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')

  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const renderLogin = () => {
    return (
      <form className='min-w-80 px-6 py-8 mt-4 flex flex-col items-start justify-center gap-y-5 border border-gray-400 rounded-2xl'>
        
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Password: </span>
          <span>{parsedAccount?.password}</span>
        </p>

        <input 
          type='email'
          name='email'
          placeholder='user@mail.com'
          value={parsedAccount?.email}
          className='w-full h-10 pl-4 bg-gray-200 rounded-md'
        />
        <input 
          type='password' 
          name='password' 
          placeholder='********'
          value={parsedAccount?.password}
          className='w-full h-10 pl-4 bg-gray-200 rounded-md'
        />
        
        <p className='w-full text-end text-xs font-medium'>Forgot Password?</p>
        
        <button 
          className='w-full h-10 text-white font-semibold bg-slate-500 rounded-full'
          disabled={!hasUserAnAccount}
          >Log In</button>

        <p className='w-full text-sm font-light text-center'>
          Don't have account? 
          <Link
            to={'../sign-up'} 
            className='font-semibold'>
              <button
                className='ml-2 p-1 border border-black disabled:text-balck/40 disabled:border-balck/40 rounded-lg' 
                onClick={() => setView('create-user-info')}
                disabled={hasUserAnAccount}>
                Sign Up
              </button>
          </Link>
        </p>
      </form>
    )
  } 

  const renderCreateUserInfo = () => {
    return (
      <>
        <h1 className='font-medium text-xl mb-4'>Sign Up</h1>
        <p>Create your new account</p>
        <form className='min-w-80 px-6 py-8 mt-4 flex flex-col items-start justify-center gap-y-5 border border-gray-400 rounded-2xl'>
          <input 
            type='text' 
            name='fullName' 
            placeholder='Full name' 
            className='w-full h-10 pl-4 bg-gray-200 rounded-md'
          />

          <input 
            type='email' 
            name='email' 
            placeholder='user@mail.com'  
            className='w-full h-10 pl-4 bg-gray-200 rounded-md'
          />
          
          <input 
            type='password' 
            name='password' 
            placeholder='Password'  
            className='w-full h-10 pl-4 bg-gray-200 rounded-md'
          />
          
          <button 
            className='w-full h-10 text-white font-semibold bg-slate-500 rounded-full'>
            Sign Up</button>
        </form>
      </>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin()

  return (
    <Layout>
      <h1 className='font-medium text-xl mb-4'>Log In</h1>
      {renderView()}
    </Layout>
  )
}
  
  export default SignIn