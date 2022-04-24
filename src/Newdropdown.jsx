import React, {useState,useEffect} from "react"

const Searchcountry = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");

let componentMounted = true;    
useEffect(() => {
    const fetchcountry = async () => {
        const response = await fetch(`https://restcountries.com/v2/name/${search}`);
    if(componentMounted){
        setData ( await response.json() );
    } 
    return () => {
        componentMounted = false;
    }
    }
    fetchcountry();
}, [search]);

const handlesubmit = (event)=>{
    event.preventDefault();
    setSearch(input)
}   
const checkEmptyInput = Object.values(data)

return (
    //console.log(data)
                    <div className="wrapper">
                        <div className="header">
                        <h3>Search for the country</h3>
                        </div>
                  
                        <form onSubmit={handlesubmit}>
                            <div >
                                <input type="search" placeholder="Please Enter City Name" name="search" value={input} onChange={(e)=>setInput(e.target.value)} required/>
                                <button type="submit">Search</button>
                                
                            </div>
                        </form>
                     <div className="tablebox">
                     <table>
                    
                                <tr>
                                    <th>Name</th>
                                    <th>Capital</th>
                                    <th>Region</th>
                                    <th>Population</th>
                                    <th>SubRegion</th>
                                </tr>
                           
                        { checkEmptyInput.map((item, index)=>{
                                            return(
                                                <tr>
                                                <td>{item.name}</td>
                                                <td>{item.capital}</td>
                                                <td>{item.region}</td>
                                                <td>{item.population}</td>
                                                <td>{item.subregion}</td>
                                                </tr>   
                                            )
                                        }) }
                            
                            </table>
                     </div>  
                    </div>
               
)

}

export default Searchcountry;