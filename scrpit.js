const endDate="20 October 2023 12:00 PM"
document.getElementById('end-date').innerHTML=endDate
const input=document.querySelectorAll('input')

 

function clock(){
    const end=new Date(endDate)
    const now=new Date()
    const differ=(end-now)/1000;
    console.log(differ)
    if(differ<0) return;
    // it's find days
    let day=Math.floor(differ/3600/24);
    input[0].value=day
    let hour=(Math.floor(differ/3600)%24);
    console.log(hour)
    input[1].value=hour
    let mint=(Math.floor(differ/60)%60);
    input[2].value=mint
    let sec=Math.floor(differ)%60;
    input[3].value=sec

}
setInterval(clock,1000)