async function getGif(search){
   const res= await axios.get("api.giphy.com/v1/gifs/search", {
       params: {
           q: search,
           api_key: 'cuudyrGsLgyvxROsi42514uzOkdBWbkJ'
       }
      });
   console.log(res)
}
console.log("Let's get this party started!");

//0xITQiJ2hVWh33XOSo8pxk4tgQQ7282g