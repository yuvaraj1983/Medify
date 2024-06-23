import { Box, Select, MenuItem, Button, InputAdornment } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchHospital = () => {
    const [states, setState] = useState([]);
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({state: "", city: ""})
    const navigate = useNavigate();

    const handleChange = (e) => {
           const {name, value} = e.target;
           setFormData((prevValue) => ({...prevValue, [name]: value }))
    //     const { name, value } = e.target;
    // setFormData((prev) => ({ ...prev, [name]: value }));

    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(formData.state && formData.city) {
        navigate(`/search?state=${formData.state}&city=${formData.city}`);
      }
     
    }

    useEffect(() => {
        console.log("state useeffect")
        const fetchStates = async () => {
            try {
                const url = 'https://meddata-backend.onrender.com/states';

                const response = await  axios.get(url);
                setState(response.data)
            } catch(error) {
                console.log(error);
            }
           
        }
       fetchStates();
    },[])

    useEffect(() => {
        console.log("city useeffect")
            const fetchCities = async() => {
                setCities([]);
                setFormData((prev) => ({ ...prev, city: "" }));
                try {
                    const url = `https://meddata-backend.onrender.com/cities/${formData.state}`;
                    console.log('url',url)
                    const response = await axios.get(url);
                    setCities(response.data);
                }  catch(error) {
                    console.log(error);
                }
               
            }
            if(formData.state !== "") {
                fetchCities();
            }
          
    },[formData.state])
  return (
    <Box component='form' onSubmit={handleSubmit} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}} gap={4}>
        <Select
    displayEmpty
    id="state"
    name="state"
    value={formData.state}
        onChange={handleChange}
  

    startAdornment={
       <InputAdornment position='start'>
        <SearchIcon />
       </InputAdornment>
    }
         sx={{width:'100%'}}
  >
    <MenuItem disabled value=""  selected>State</MenuItem>
    {
        states.map((state) => (
            <MenuItem  key={state} value={state}>{state}</MenuItem>
        ))
    }
  </Select>


 <Select
    displayEmpty
    id="city"
    name="city"
    value={formData.city}
    onChange={handleChange}
    sx={{width:'100%'}}
    
  >
  <MenuItem disabled value="" selected>City</MenuItem>
    {
        cities.map((city) => (
            <MenuItem  key={city} value={city}>{city}</MenuItem>
        ))
    }
  </Select> 
{/* 
<Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select> */}

  <Button type='submit' variant='contained' 
  sx={{flexShrink:0}}    
  size='large' startIcon={<SearchIcon />} >
    Search
  </Button>
    </Box>
  )
}

export default SearchHospital