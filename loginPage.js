$catimg=document.querySelector(`.catimg > img`);
$catbtn=document.querySelector(`.catimg>button`);
let url=``;
async function cat() {
    url=await axios.get(`https://api.thecatapi.com/v1/images/search?size=full`);
    $catimg.src=url.data[0].url;
}
$catbtn.addEventListener(`click`,cat);

console.log($catimg);