import React,{Component} from 'react';
import './Search.css';
//http://localhost:3000/restaurant/Details
//const lurl = "http://localhost:3000/restaurant/Details";

const lurl = "https://zomatoajulypi.herokuapp.com/location"
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends Component {

    constructor(){
        super()
        console.log(">>>>>Inside constructor>>>>>")
        this.state={
            location:'',
            restData:''
        }
    }
    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
        
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item._id}>
                    {item.restaurant_name} | {item.address}</option>
                )   
            })
        }
    }

    handleCity = (event) => {
        //console.log(event)
        let stateId = event.target.value;
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({restData:data}) })
    }


    render(){
        console.log(">>>>>Inside Render>>>>>")
        return(
            <div id="search">
                <div className="logo">
                    <span>D!</span>
                </div>
                <div className='heading'>
                    Find Best Place Near You
                </div>
                <div id="dropdown">
                    <select onChange={this.handleCity} >
                        <option>----Select Location----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="restSelect">
                        <option>----Select Restaurants----</option>
                        {this.renderRest(this.state.restData)}

                        
                    </select>
                </div>
            </div>
        )
    } 
    //API calling on page load  componentDidMount
    componentDidMount(){
        //console.log(">>>>>Inside DidMount>>>>>");
        fetch(lurl,{method:'GET'})
        //this method will return the promise
        .then((res) => res.json())
         //we will get the response 
        .then((data) => {
            console.log(data);
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err);
        })
    }       
}

export default Search;