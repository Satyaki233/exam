import React,{useState} from 'react'
import { Redirect } from 'react-router-dom'

const MakeTest = () => {

    const [state,setState] = useState({
        file:null,
        name:'',
        sheet:''

    })

    const [paper,setPaper]=useState([])
    const [load,setLoad] = useState(false)

    const onSubmit =(e)=>{
        e.preventDefault();
        const data= new FormData();
        data.append('file2',state.file,state.file.name)
        data.append('name',state.name)
        data.append('sheet',state.sheet)
        localStorage.setItem('name',state.name)
        // console.log(data)
        fetch(`http://localhost:3001/try`,{
            method: 'POST',     
         body:data     
        })
        .then(res=>res.json(res))
        .then(data=>{
         console.log(data)
         setLoad(load=>true)
        })
        .catch(err=>{console.log(err)})
    }

    
    
     const table =()=>{
       if(load){
         return(
          <div className='container'>
                   {
                     paper.map(pic=>
                      <div>
                        {pic.Question}
                      </div>
                      )
                   }
          </div>
         )
       }
     }

    console.log(state)
    if(!load){
      return (
        <div>
            MakeTest
          <div className='card mx-auto' style={{width:'70vw',padding:'10px'}}>
          <form className='container' >
                <div className='form-group'>
                <label className='alert alert-success'>Upload XLS file</label>
                <input
                 className='form-control' 
                 
                 type='file'
                 
                 onChange={(e)=>
                   setState({...state,file:e.target.files[0]})
                 }
                 />
                </div>
                <div className='from-group'>
                 <label>name of Chapter</label>
                 <input type='text'
                  className=' form-control'
                  value={state.name}
                  onChange={(e)=>{setState({...state,name:e.target.value})}}
                  />
                </div>
                <div className='from-group'>
                 <label>name of Sheet</label>
                 <input type='text'
                  className=' form-control'
                  value={state.sheet}
                  onChange={(e)=>{setState({...state,sheet:e.target.value})}}
                  />
                </div>
                <div className='form-group'>
                 <button className='btn btn-warning'
                 onClick={onSubmit}
                 > 
                   Submit
                 </button>
                </div>
            </form>
            </div>

         
           
            </div>
      )
    }else{
      return <Redirect to='/Paper'/>
        
    }   

           
         
    
}

export default MakeTest
