import React,{useState} from 'react';
import './App.css';
import MoviesList from './MoviesList'
import  Search from './Search' 
import Rating  from './rating' 
import Add  from './Add' 

import{ Navbar , Nav ,  Form  ,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import{Link ,BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Description from './description';


function App () {

  //the movie list 
  const moviesList=[
    {
      title:"Wonder Woman",
      description:"Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down a path of destruction, after an ancient artifact that grants wishes goes missing.",
      posterUrl:"https://i.egycdn.com/pic/WmFwZndlY21ZVGp2Y3ZObW1hY21URVBtYm1UbXhQ.jpg",
      rate:3,
      year:2020,
      trailer : "https://www.youtube.com/watch?v=XW2E2Fnh52w&ab_channel=WarnerBros.Pictures"
    },
    {
      title:"Avengers Endgame",
      description:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      posterUrl:"https://i.egycdn.com/pic/WmFwZndlY21MY212bWptdm12bWpFY21ibUVtSGNtRW1FY3dQ.jpg",
      rate:5,
      year:2019,
      trailer:"https://www.youtube.com/watch?v=TcMBFSGVi1c&ab_channel=MarvelEntertainment" 
    
    },
    {
      title:"Iron Man 3",
      description:"When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
      posterUrl:"https://pic.egybest.net/i/WmFwZndlY212bW1tcGJtRUVjbXZtRW1USXhtam1wSQ.jpg",
      rate:4,
      year:2013,
      trailer : "https://www.youtube.com/watch?v=Ke1Y3P9D0Bc&ab_channel=MarvelUK"
    }

  ];

  //search with movie name  
  const [search,setSearch]=useState("");
  const searchFunc=(value)=>{
    setSearch(value);
  }  

  //search with movie rate
  const [rating,setRating]=useState(1);
  const ratingFunc=(rate)=>{
    setRating(rate);
  } 

  //add movie  
  const [movies,setMovies]=useState(moviesList) ;
  const addMovie=(newMovie)=>{
    setMovies([...movies,newMovie])
  }

  return (
  
  <div className="bigcontainer">
    <Router>
      <Switch>
      {/*The main page*/}
      <Route exact path="/">
        {/*header*/}
        <Navbar className="navbar navcolor padtop" >
            <Nav className=" mr-auto">
                <Nav.Link className="navclass" ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">WatchList</Link></Nav.Link>
            </Nav>      
            <Form className="navclass" inline>
                    {/*search with movie rate*/}      
                    <div className="padstar"> <Rating ratingFunc={ratingFunc} rating={rating}/></div>
                    {/*search with movie name*/} 
                    <Search search={searchFunc}/> 
                    <Button variant="outline-light"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link></Button>
                    <Button variant="outline-light"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add">+Add</Link></Button>
            </Form>
        </Navbar> 
        {/*show the movies*/} 
        <div className="container" style={{paddingTop:"100px"}}>
            <div>
              <MoviesList movies={movies.filter(movie=>
              movie.title.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()) && movie.rate>=rating  ) }/>
            </div>
        </div>
      </Route>
      {/*The movie add page*/}
      <Route path="/add">
        {/*header*/}
        <Navbar className="navbar navcolor padtop" >
            <Nav className=" mr-auto">
                <Nav.Link className="navclass" ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">WatchList</Link></Nav.Link>
            </Nav>      
            <Form className="navclass" inline>
                    <Button variant="outline-light"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link></Button>
                    <Button variant="outline-light"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add">+Add</Link></Button>
            </Form>
        </Navbar> 
        <div>
        {/*add a movie*/} 
          <Add addMovie={addMovie}/>
        </div>    
      </Route>
      {/*description page*/}
      <Route path="/:id">
        {/*header*/}
        <Navbar className="navbar navcolor padtop" >
            <Nav className=" mr-auto">
                <Nav.Link className="navclass" ><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">WatchList</Link></Nav.Link>
            </Nav>      
            <Form className="navclass" inline>
                    <Button variant="outline-light"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link></Button>
                    <Button variant="outline-light"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add">+Add</Link></Button>
            </Form>
        </Navbar> 
        {/*movie description*/}
       <Description movies={movies}></Description>
      </Route>

      </Switch>      
    </Router>  
    {/*body*/} 

  </div>
  )
}
export default App ;