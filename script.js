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


const button=document.querySelector('button')
button.addEventListener('click', function(e){
    let x= e.offsetX;
    let y=  e.offsetY;
    console.log(e.offsetX)
    console.log(e.offsetY)
    let ripples=document.createElement('span');
    ripples.style.left=x+'px';
    ripples.style.top=y+'px';
    this.appendChild(ripples);

    setTimeout(()=>{
        ripples.remove()
    },1000);
})



function short(){
    document.getElementById('hidden').innerHTML=''
    var url=document.getElementById('urlinput').value
    url='http://tinyurl.com/api-create.php?url='+url
    data=document.createElement('object')
    data.type="text/html"
    data.data=url
    data.classList.add('site')
    console.log(data)
    document.getElementById('hidden').appendChild(data)
}