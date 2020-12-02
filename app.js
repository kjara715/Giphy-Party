

async function getGif(search){
   const res= await axios.get("http://api.giphy.com/v1/gifs/search", {
       params: {
           q: search,
           api_key: 'cuudyrGsLgyvxROsi42514uzOkdBWbkJ'
       }
      });
//    console.log(res)
    
    const gifURLs=[];
    const gif=$("<img>");
    
  for(let thisGif of res.data.data){
      gifURLs.push(thisGif.url) //extract all of the image urls from the objects
    }

    console.log(gifURLs)

  const index = Math.floor(Math.random() * gifURLs.length);
  console.log(index)
  console.log(gifURLs[index])
  gif.attr('src',gifURLs[index]); //gets one image source
  $('body').append(gif);
  
}


$('#getGif').on('click', function(e){
    e.preventDefault();
    console.log('')
    getGif($('#search').val());
    $('#search').val=''
});

$('#clear').on('click', function(e){
    e.preventDefault();
    $('#search').val='';
    $('img').remove()
})

//0xITQiJ2hVWh33XOSo8pxk4tgQQ7282g