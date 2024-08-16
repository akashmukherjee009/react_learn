import React from 'react'

const SubscriberList = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {props.user.map((data,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{data.name}</td>
              <td>{data.pincode}</td>
            </tr>
          ))}  
        </tbody>
             
          
        </table>
    </div>
  )
}

export default SubscriberList
