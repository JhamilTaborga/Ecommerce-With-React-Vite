import { useContext, useState, useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../components/Layout'

function SignIn() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(false)

    // Redirect
    return <Navigate replace to={'/'} />
  }

  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    // Create account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
    // Sign In
    handleSignIn()
  }

  const renderLogin = () => {
    return (
      <>
        <h1 className='font-medium text-xl mb-4'>Log In</h1>
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
            defaultValue={parsedAccount?.email}
            className='w-full h-10 pl-4 bg-gray-200 rounded-md'
          />
          <input 
            type='password' 
            name='password' 
            placeholder='********'
            defaultValue={parsedAccount?.password}
            className='w-full h-10 pl-4 bg-gray-200 rounded-md'
          />
          
          <p className='w-full text-end text-xs font-medium'>Forgot Password?</p>
          <Link
            className='w-full'
            to='/'>
            <button 
              className='w-full h-10 text-white font-semibold bg-slate-500 rounded-full'
              onClick={() => handleSignIn()}
              disabled={!hasUserAnAccount}
              >Log In</button>
          </Link>

          <p className='w-full text-sm font-light text-center'>
            Don't have account? 
            <button
              className='ml-2 p-1 border border-black disabled:text-balck/40 disabled:border-balck/40 rounded-lg' 
              onClick={() => setView('create-user-info')}
              disabled={hasUserAnAccount}>
              Sign Up
            </button>
          </p>
        </form>
      </>
    )
  } 

  const renderCreateUserInfo = () => {
    return (
      <>
        <h1 className='font-medium text-xl mb-4'>Sign Up</h1>
        <p>Create your new account</p>
        <form ref={form} className='min-w-80 px-6 py-8 mt-4 flex flex-col items-start justify-center gap-y-5 border border-gray-400 rounded-2xl'>
          <div>
            <label htmlFor='name' className='font-light text-sm'>Your name:</label>
            <input 
              type='text'
              id='name' 
              name='name'
              defaultValue={parsedAccount?.name}
              placeholder='Peter' 
              className='w-full h-10 pl-4 bg-gray-200 rounded-md'
            />
          </div>
          <div>
            <label htmlFor='email' className='font-light text-sm'>Your email:</label>
            <input 
              type='email' 
              id='email'
              name='email' 
              defaultValue={parsedAccount?.email}
              placeholder='user@example.com'  
              className='w-full h-10 pl-4 bg-gray-200 rounded-md'
            />
          </div>
          <div>
            <label htmlFor='password' className='font-light text-sm'>Your password:</label>
            <input 
              type='password' 
              id='password'
              name='password' 
              defaultValue={parsedAccount?.password}
              placeholder='*********'  
              className='w-full h-10 pl-4 bg-gray-200 rounded-md'
            />
          </div>
          
          <Link to={'/'}>
            <button 
              className='p-3 text-white font-semibold bg-slate-500 rounded-lg'
              onClick={() => createAnAccount()}>
              Create
            </button>
          </Link>
        </form>
      </>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin()

  return (
    <Layout>
      {renderView()}
    </Layout>
  )
}
  
  export default SignIn