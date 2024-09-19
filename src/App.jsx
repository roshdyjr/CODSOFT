import Todo from "./components/Todo"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="bg-gray-600 py-6 min-h-screen grid">
      <Todo />
      <ToastContainer />
    </div>
  )
}

export default App
