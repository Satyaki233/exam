import React from 'react'
import {Link,Redirect} from 'react-router-dom'

const GiveTest = () => {
    return (
        <div>
            <div className='alert alert-dark'>
             Please select a test
            </div>


           <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Chapter</th>
      <th scope="col">questions</th>
      <th scope="col">time</th>
      <th scope='col'>try</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><Link to='/Test'><button className='btn btn-danger'>select</button></Link></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button className='btn btn-danger'>select</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button className='btn btn-danger'>select</button></td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default GiveTest
