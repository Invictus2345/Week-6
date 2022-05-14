var x = document.querySelector('.Cookie_Container')

function hide(){
    x.remove()
}

var temp = document.querySelectorAll('.red')

function changefahrenheit(element){
    // temp.innerText= 32
    for(var i = 0; i < temp.length; i++) {
        var tem = temp[i]
        var p = temp[i].innerHTML
        parseInt(p)
        temp[i].innerHTML = (p * 2)
        console.log(temp)
    }
}