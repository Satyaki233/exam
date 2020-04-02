import React,{useEffect,useState} from 'react'
// import { Link } from 'react-router-dom'

const Paper = () => {
    
    const [test,settest]=useState([])
    const [load,setLoad]=useState(false)
    console.log(localStorage.getItem('name'))
    useEffect(() => {
        fetch(`https://blueberry-crumble-01022.herokuapp.com/ok`,{
            method: 'POST',
            headers:{'Content-Type':'application/json'} ,        
            body: JSON.stringify({ name:localStorage.getItem('name') })
        })
        .then(res=>res.json(res))
        .then(data=>{
         
         settest(test=>data)
         setLoad(load=>true)
        })
        .catch(err=>{console.log(err)})
    }, [])

    console.log(test)

    const sheet =()=>{
        if(load){
            return(
                <div className='container'>
                    {/* <Link to='/'>
                        <button className='btn btn-primary'>
                        Go back
                        </button>
                    
                    </Link> */}

                    <div className='alert alert-success'>
The Questions that you submit is
                    </div>
                          <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Question</th>
      <th scope="col">A</th>
      <th scope="col">B</th>
      <th scope="col">C</th>
      <th scope="col">D</th>
      <th scope="col">Right answer</th>

    </tr>
  </thead>

    
      {
          test.map(items=>
            <tbody>
    <tr>
                <th scope="row">{items.id}</th>
                <td>{items.question}</td>
                <td>{items.a}</td>
                <td>{items.b}</td>
                <td>{items.c}</td>
                <td>{items.d}</td>
                <td>{items.r}</td>
           </tr>
           </tbody>
            )
      }
      
    
</table>
                </div>
            )
        }
    }
   
     console.log(load)
    return (
        <div>
             {
                 sheet()
             }
        </div>
    )
}

export default Paper
