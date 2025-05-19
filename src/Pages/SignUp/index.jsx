import Layout from '../../components/Layout';

function SignUp() {
  return (
    <Layout>
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
        
        <button className='w-full h-10 text-white font-semibold bg-slate-500 rounded-full'>Sign Up</button>
      </form>
    </Layout>
  )
}

export default SignUp;