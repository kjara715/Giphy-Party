

async function getGif(search){
   const res= await axios.get("http://api.giphy.com/v1/gifs/search", {
       params: {
           q: search,
           api_key: 'cuudyrGsLgyvxROsi42514uzOkdBWbkJ'
       }
      });
//    console.log(res)
    
    const gifIDs=[];
    const gif=$("<img>");

    
  for(let thisGif of res.data.data){
      gifIDs.push(thisGif.id) //extract all of the image urls from the objects
    }

    console.log(gifIDs)

  const index = Math.floor(Math.random() * gifIDs.length); //pick just one index from the array
  console.log(index)
  console.log(gifIDs[index])
  gif.attr('src',`https://i.giphy.com/media/${gifIDs[index]}/giphy.gif`); //gets one image source
  $('body').append(gif);
  
}


$('#getGif').on('click', async function(e){
    e.preventDefault();
    console.log('')
    await getGif($('#search').val());
    $('#search').val=''
});

$('#clear').on('click', function(e){
    e.preventDefault();
    $('#search').val='';
    $('img').remove()
})

//0xITQiJ2hVWh33XOSo8pxk4tgQQ7282g