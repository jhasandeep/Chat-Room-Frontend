import {useState} from 'react'
import {useNavigate} from "react-router-dom"

const MainForm = () => {

    const navigate = useNavigate()

    const [error , setError] = useState("");

    const [data , setData] = useState({name: "", room: ""});

    const handleChange =(e) =>{

        console.log(e.target.name , e.target.value);

        setData({
            ...data, [e.target.name]: e.target.value
        })


        
        

    }


    const validation = () => {

        if(!data.name){


            setError("please write name"); 
            return false
        }

        if(!data.room){

            setError("please select room."); 

            return false 


        }

        setError("")

        return true
    }



    const handleSubmit = (e) =>{

        e.preventDefault()

        const isValid =  validation();

        if(isValid){
           navigate(`/chat/{data.room}`, {state: data})

        }


    }
  return (
    <div className='px-3 py-4 shadow bg-white text-dark border rounded row'>

        <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
                <h2 className='text-success mb-4'>Welcome to ChatRoom</h2>

            </div>
            <div className='form-group mb-4'>
                <input type="text"  className='form-control bg-light' name="name" onChange={handleChange}placeholder='Enter name '/>
            </div>

            <div className='form-group mb-4 '>
                <select className='form-select bg-light w-100' name="room" onChange={handleChange}>
                    <option value="">select Room</option>
                    <option value="gaming">Gaming</option>
                    <option value="coding">Coding</option>
                    <option value="socialMedia">Social Media</option>
                </select>
            </div>
            <button type='submit' className='btn btn-success w-100 mb-2'>submit</button>

            {error ? <small className='text-danger'>{error}</small> : ""}
        </form>
    </div>
  )
}

export default MainForm



