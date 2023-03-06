// DONOT SHOW API KEY ON YOUR js file 
const API_KEY=`ac8510977ef413df85ca6cf66bb43c8f`;

const loadTemperature =city=>{
   const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
   fetch (url)
   .then(res => res.json())
   .then(data =>displayTemperature(data) )
  }

const displayTemperature=data=>{
  // const temperature =document.getElementById('temperatur');
  // temperature.innerText=data.main.temp;
  setinnerTextByID('temperatur',data.main.temp);
  setinnerTextByID('condition',data.weather[0].main)
  console.log(data.weather[0].main)
}

const setinnerTextByID =(id, text)=>{
  const temperature =document.getElementById(id);
  temperature.innerText=text;
}

document.getElementById('btn-search').addEventListener('click',function(){
  const searchField =document.getElementById('search-field');
  const city =searchField.value;
// set city

document.getElementById('city').innerText=city;
  loadTemperature(city);
})

loadTemperature('dhaka');