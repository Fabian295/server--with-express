// let lat = document.querySelector('.lat');
// let long = document.querySelector('.long');

// console.log('check geo loc!')

// if('geolocation' in navigator) {
//   console.log('Geolocation is AVAILABLE!')
//   navigator.geolocation.getCurrentPosition((position) => {
//   console.log(position.coords.latitude, position.coords.longitude);
//   console.log(position)
//   lat.textContent = position.coords.latitude;
//   long.textContent = ' '  +  position.coords.longitude;
//   // ;

//   const posData = { lat, long };
//   const options = {
//     method:  'POST',
//     headers: {
//       'Content-Type': 'Application/json'
//     },
//     body: JSON.stringify(posData)
//   };
//   fetch('/api', options);
//   console.log('request options headers body: ', options.body);
// });

// } else {
//   /* geolocation IS NOT available */
//   console.log('Geolocation is NOT available!')
// }

// export default

// console.log('Geolocation is AVAILABLE!')
// navigator.geolocation.getCurrentPosition((position) => {
// console.log(position.coords.latitude, position.coords.longitude);
// console.log(position)
// });