import {toast} from 'react-toastify';
import Button from '../../components/common/Button';
export default function Home() {
  const handleClick = () => {
    toast.success('This is a success toast');
  }
  return (
    <div className="min-h-screen flex items-center flex-col justify-center">
        <h1 className="text-4xl font-bold text-center">Home</h1>
        <p className="text-center">Welcome to the Home page</p>
        <Button className="mt-4" onClick={handleClick}>Show Toastify</Button>
    </div>
  )
}
