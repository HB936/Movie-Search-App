import React from 'react'
import './Search.css'
export default function Search(props) {
  
  return (
    <>
        <div className="card">
            <input onKeyUp={(e)=>{props.searchHandler(e.target.value)}} style={{backgroundColor: "#09122C"}} placeholder='SEARCH HERE...' type="text" className="form-control text-light yeah" />
        </div>
    </>
  )
}
