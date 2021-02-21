import React from 'react'
import{FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Search  = ({search}) => {  
    return (
    <div>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>search(e.target.value)} />
    </div>
    )
}
export default Search ;
