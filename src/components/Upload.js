import React,{useState} from 'react'




const Upload = () => {
    const [file , setFile] = useState({
        excel:null
    })
  
    console.log(file)
  

    return (
        <div>
            <form  encType='multipart/form-data'>
                <div className='form-group'>
                  <input type='file'
                   className='form-control'
                   name='file'
                   onChange={(e)=>{setFile({...file,excel:e.target.files[0]})}} />

                </div>
            </form>
        </div>
    )
}

export default Upload
