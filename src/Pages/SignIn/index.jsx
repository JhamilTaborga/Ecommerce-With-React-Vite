import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

function SignIn() {
  return (
    <Layout>
      <h1 className='font-medium text-xl mb-4'>Log In</h1>
      <form className='min-w-80 px-6 py-8 mt-4 flex flex-col items-start justify-center gap-y-5 border border-gray-400 rounded-2xl'>
        <input 
          type='email'
          name='email'
          placeholder='user@mail.com'
          className='w-full h-10 pl-4 bg-gray-200 rounded-md'
        />
        <input 
          type='password' 
          name='password' 
          placeholder='********'  
          className='w-full h-10 pl-4 bg-gray-200 rounded-md'
        />
        
        <p className='w-full text-end text-xs font-medium'>Forgot Password?</p>
        
        <button className='w-full h-10 text-white font-semibold bg-slate-500 rounded-full'>Log In</button>

        <p className='w-full text-sm font-light text-center'>Don't have account? <Link to={'../sign-up'} className='font-semibold'>Sign Up</Link></p>
      </form>
    </Layout>
  )
}
  
  export default SignIn