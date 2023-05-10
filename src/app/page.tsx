import { Inter } from 'next/font/google'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })

const page = () => {
  return <div className='h-screen flex flex-col' >
    <Navbar />
    <Dashboard />
  </div>
}

export default page
