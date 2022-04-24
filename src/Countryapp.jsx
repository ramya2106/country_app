import React, { useEffect, useState } from 'react'

const Countryapp = () => {
    const [someState, setSomeState] = useState({
        countryName: ""
    });
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [apiCountry, setapiCountry] = useState([]);
    const handleChange = (event) => {
        setSomeState({
            ...someState,
            [event.target.name]:event.target.value
        });
    }

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

    useEffect(() => {
        fetch("https://restcountries.com/v2/all").then(response => response.json()).then(response => setapiCountry(response))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Apicalled");
        console.log(someState);
        setSearch(someState.countryName);
    }

    
    const checkEmptyInput = Object.values(data)
    console.log(checkEmptyInput)
  return (
    <div className='wrapper'>
        <div className="header">
        <h3>Search for the country</h3>
        </div>
        <form onSubmit={handleSubmit}>
            <select id="countryId" name="countryName" value={someState.countryName} onChange={handleChange}>
            <option>select</option>
            { apiCountry.map(item =>(
                    <option key={item.name}>{item.name}</option>
                    )) }
            </select>
            <button type="submit">Search</button>
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

export default Countryapp