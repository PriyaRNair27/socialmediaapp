import React from 'react'
import Header from '../Header'

const Addpost = () => {
  return (
    <div>
        <Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
           <label for="" className="for">TITLE</label>
           <input  placeholder="enter title" type="text" className="form-control"/>    
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <label for="" className="for">MESSAGE</label>
                <textarea placeholder="enter messages" name="" id="" cols="30" rows="10" className="form-control"></textarea>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <button className="btn btn-success">SUBMIT</button>
            </div>
        </div>
    </div>
</div>
</div>


    </div>
  )
}

export default Addpost