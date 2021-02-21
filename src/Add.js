import React,{useState} from 'react'
import {Button } from 'react-bootstrap'


const Add = ({addMovie}) => {
    const [input,setInput]=useState(
      { title:"",
        description:"",
        posterUrl:"" ,
        rate:1,
        year:""
      }
    );
    const handleChange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
    }
  
    return (
      <>
      <div className="container "  style={{paddingTop:"100px" }}>
          <div className="add">
            <label  style={{width:"100px"}}>Title:</label>
            <input type='text' name="title" onChange={handleChange}  /><br />
            <label  style={{width:"100px"}}>Genre:</label>
            <input type='text' name="description" onChange={handleChange}  /><br />
            <label  style={{width:"100px"}}>Image:</label>
            <input type='text' name="posterUrl" onChange={handleChange} /><br />
            <label  style={{width:"100px"}}>Rating:</label>
            <input type='text' name="rate" onChange={handleChange}  /><br />
            <label  style={{width:"100px"}}>Year:</label>
            <input type='text' name="year" onChange={handleChange} /><br />
            <Button style={{float:"right"}}variant="outline-light" onClick={
              ()=>{
                addMovie(input);
                setInput({
                  title:"",
                  description:"",
                  posterUrl:"" ,
                  rate:1,
                  year:""
                })
              }
            }>
              Add movie
            </Button>
          </div>
          </div>
      </>
    )
}

export default Add