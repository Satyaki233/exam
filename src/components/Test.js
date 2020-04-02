import React,{useEffect,useState} from 'react'

const Test = () => {


    const [ques,setQues]=useState([])
    const [load,setLoad]=useState(false)
    const i = 0;
    const [number,setNumber]=useState(0)
    useEffect(() => {
       fetch(`http://localhost:3001`,{
           method:'GET',
           headers: {'Content-Type':'application/json'}
           
       })
       .then(res=>res.json(res))
       .then(data=>
        {
            setQues(ques=>data)
            setLoad(load=>true)
         
        })
       .catch(err=>console.log(err))
    }, [])
     
   console.log(number)
  console.log(ques)

  const Questions =()=>{
      if(load){
          return(
              <div>
                     <div>
                         <div className='row'>
                             <div className='col-md-3'>
                             <div  >
                                   <button className='btn btn-warning' onClick={()=>{
                                       setNumber(number=>number - 1)
                                   }}>
                                       -
                                   </button>
                                 </div>
                             </div>
                             <div className='col-md-6'>
          <h1>{number+1
          } --{ques[number].Question}</h1>
                             </div>
                             <div className='col-md-3'>
                                 <div  >
                                   <button className='btn btn-warning' onClick={()=>{
                                       setNumber(number=>number + 1)
                                   }}>
                                       +
                                   </button>
                                 </div>
                             </div>
                         </div>
                    
                     
                     <br/>
                     <div className='card' style={{height:'100%'}}>
                         <div className='row'>
                           <div className='card col-md-6' style={{marginBottom:'10px'}}>1.<div className='btn btn-secondary mx-auto' style={{width:'50%'}}> {ques[number].A}</div> </div>
                           <div className='card col-md-6' style={{marginBottom:'10px'}}>2.<div className='btn btn-secondary mx-auto'  style={{width:'50%'}}> {ques[number].B}</div></div>
                           <div className='card col-md-6' style={{marginBottom:'10px'}}>3. <div className='btn btn-secondary mx-auto'  style={{width:'50%'}}> {ques[number].C}</div> </div>

                           <div className=' card col-md-6' style={{marginBottom:'10px'}}>4.<div className='btn btn-secondary mx-auto'  style={{width:'50%'}}> {ques[number].D}</div> </div>
                  
                          </div> 
                          
                     </div>
                    </div>

              </div>
          )
      }
  }

    return (
        <div>
            test
             <div className='Container'>
                 {/* {
                     ques.map(items=>
                     <div>
                        <h1>{items.Question}</h1>
                     </div>
                     )
                 } */}
                   {
                       Questions()
                   }
             </div>
        </div>
    )
}

export default Test
