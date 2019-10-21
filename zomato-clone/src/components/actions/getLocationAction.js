export const getLocation=(position)=>dispatch=>
{
  fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${position.latitude}&lon=${position.longitude}&apikey=e959162dcd6f277645d33bdb151d281d`)
    .then(res=>res.json())
    .then((res)=>dispatch({
        type:'GET_LOCATION',
        payload:{city_name:res.location.city_name,city_id:res.location.city_id}
    })).catch(()=>console.log("aaaaaaqscsff"))
  
}
export const getLocationFromRoute=(cityname)=>dispatch=>
{console.log(cityname)
  fetch(`https://developers.zomato.com/api/v2.1/cities?q=${cityname}&apikey=e959162dcd6f277645d33bdb151d281d`)
    .then(res=>res.json())
    .then((res)=>fetch(`https://developers.zomato.com/api/v2.1/collections?city_id=${res.location_suggestions[0].id}&apikey=e959162dcd6f277645d33bdb151d281d`)
    .then((res)=>res.json())
    .then((res)=>dispatch({
      type:'GET_COLLECTIONS',
      payload:{collections:res}
    }))
    )
    .catch((res)=>console.log(res))
  
}