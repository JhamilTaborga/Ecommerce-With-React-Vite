import Layout from '../../components/Layout'

function MyAccount() {
    return (
      <Layout>
        <h1 className='font-medium text-xl mb-4'>My account</h1>
        <section className='min-w-80 px-6 py-4 flex flex-col items-start justify-center border border-gray-400 rounded-2xl'>
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
        </section>
      </Layout>
    )
  }
  
  export default MyAccount