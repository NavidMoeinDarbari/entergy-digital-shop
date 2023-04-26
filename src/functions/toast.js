import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type , message) => {
   if(type === 'success') toast.success(message)
   else if(type === 'unsuccess') toast.error(message,{position:'top-right'}) 
}