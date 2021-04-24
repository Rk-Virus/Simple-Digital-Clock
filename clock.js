
setInterval(() => {
    let d = new Date();
    
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    
    var timeText = document.getElementsByClassName('card-title')[0];
    timeText.innerHTML = ` ${hours}:${mins}:${secs}`;
    
}, 1000);