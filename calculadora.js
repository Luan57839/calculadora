const visor = document.getElementById('resultado');
function insert(num){

    visor.innerHTML+= num;



}


function clean(){

    visor.innerHTML = '0'

}

function back(){

    let resultado = visor.innerHTML;
    visor.innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){

    let resultado = visor.innerHTML;
    visor.innerHTML = eval(resultado)
    
    if(resultado != '' && resultado.length >2){
    
    document.getElementById('resultado').innerHTML= eval('resultado')
    }
    else{
    
        document.getElementById('resultado').textContent = 'ERROR !!!'
        const mytimeout = setTimeout (clean, 2000)  


    
    }


}
