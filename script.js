var endpoint = "https://www.jsonstore.io/8ba4fd855086288421f770482e372ccb5a05d906269a34da5884f39eed0418a1";

var container=document.querySelector(".container")

for(let i=0;i<250;i++){
    circle=document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor='#'+ Math.floor(Math.random()*16777215).toString(16);
    container.appendChild(circle);
}

function animateCircles(){
    anime({
        targets:'.circle',
        translateX: function(){
            return anime.random(-1000,1000)
        },
        translateY: function(){
            return anime.random(-800,800)
        },
        scale: function(){
            return anime.random(0.75, 5)
        },
        easing:'easeInOutSine',
        duration:7500,
        complete:animateCircles
    })
}

animateCircles()

function getrandom(){
    var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);    
    return random_string
}

function geturl(){     
    var url = document.getElementById("urlinput").value;     
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");     
    if(!protocol_ok){
        newurl = "http://"+url;
        return newurl;
    }else{
        return url;
    }
}
function genhash(){
    if (window.location.hash == ""){
        window.location.hash = getrandom();
    }
}

function send_request(url) {
    this.url = url; 
    $.ajax({'url': endpoint+"/"+ window.location.hash.substr(1),'type': 'POST','data': JSON.stringify(this.url), 'dataType':'json','contentType':'application/json; charset=utf-8'})
}

function shortURL(){
    var longurl = geturl();
    genhash();
    send_request(longurl);
    var hashh = window.location.hash.substr(1)
    if (window.location.hash != "") {
        $.getJSON(endpoint + "/" + hashh, function (data) {data = data["result"];
        if (data != null) {
            window.location.href = data;
        }
    })
    }
}

const button=document.querySelector('button')
button.addEventListener('click', function(e){
    let x= e.clientX-e.offsetLeft;
    let y=e.clientY-e.offsetTop;
    let ripples=document.createElement('span');
    ripples.style.left=x+'px';
    ripples.style.top=y+'px';
    this.appendChild(ripples);

    setTimeout(()=>{
        ripples.remove()
    },1000);
})