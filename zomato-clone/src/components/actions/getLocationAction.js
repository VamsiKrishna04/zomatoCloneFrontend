export const getLocation=(position)=>dispatch=>
{
  console.log('these arae the postiion',position)
  fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${position.latitude}&lon=${position.longitude}&apikey=e959162dcd6f277645d33bdb151d281d`)
    .then(res=>res.json())
    .then((res)=>dispatch({
        type:'GET_LOCATION',
        payload:res.location.city_name
    })).catch(()=>console.log("aaaaaaqscsff"))
  
}