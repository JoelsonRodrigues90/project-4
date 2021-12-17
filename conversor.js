document.getElementById('convert').onclick= tempconvert;
document.getElementById('reset').onclick = clearForm;

function tempconvert(){
    var faheinheit = document.getElementById("faheinheit").value;
    var celsius = document.getElementById("celsius").value;
    var kelvin = document.getElementById("kelvin").value;

    if(celsius){
        kelvin = (parseFloat(celsius)) + 273.15;
    }else if(kelvin){
        celsius = (parseFloat(kelvin-273.15));
    }
    if(faheinheit){
        kelvin = (parseFloat(faheinheit-32)*5/9+273.15);
    }else if(kelvin){
        faheinheit = (parseFloat(kelvin-273.15)* 9/5+32);
    }
    if(faheinheit){
        celsius =(parseFloat(faheinheit-32)* 5/9);
    }else if(celsius){
        faheinheit = (parseFloat(celsius)*9/5)+32;
    }
  
    document.getElementById("faheinheit").value=parseFloat(faheinheit).toFixed(2);
    document.getElementById("celsius").value=parseFloat(celsius).toFixed(2);
    document.getElementById("kelvin").value=parseFloat(kelvin).toFixed(2);
    
}
function clearForm(){
    document.getElementById("faheinheit").value = "";
    document.getElementById("celsius").value = "";
    document.getElementById("kelvin").value = "";

}


document.getElementById('convert-med').onclick= medconvert;
document.getElementById('reset-med').onclick = clearMedForm;

function medconvert(){
    var milimetros = document.getElementById("milimetros").value;
    var centimetros = document.getElementById("centimetros").value;
    var metros = document.getElementById("metros").value;
    var kilometros = document.getElementById("kilometros").value;


    if(milimetros){
        centimetros = (parseFloat(milimetros)/10);
    }else if(centimetros){
        milimetros = (parseFloat(centimetros)*10);
    }
    if(metros){
        kilometros = (parseFloat(metros)/1000);
    }else if(kilometros){
        metros = (parseFloat(kilometros)*100);
    }
    if(kilometros){
        centimetros = (parseFloat(kilometros))*100000;
    }else if(kilometros){
        milimetros = (parseFloat(kilometros)*1e+6);
    }if(milimetros){
        metros = (parseFloat(milimetros)/1000);
    }else if(metros){
        milimetros = (parseFloat(metros)*1000);
    }

    document.getElementById("milimetros").value=parseFloat(milimetros).toFixed(3);
    document.getElementById("centimetros").value=parseFloat(centimetros).toFixed(3);
    document.getElementById("metros").value=parseFloat(metros).toFixed(3);
    document.getElementById("kilometros").value=parseFloat(kilometros).toFixed(3);


}
function clearMedForm(){
    document.getElementById("milimetros").value = "";
    document.getElementById("centimetros").value = "";
    document.getElementById("metros").value = "";
    document.getElementById("kilometros").value = "";

}

document.getElementById('convert-hora').onclick= tempoconvert;
document.getElementById('reset-hora').onclick = clearTempoForm;

function tempoconvert(){

    var segundos = document.getElementById("segundos").value;
    var minutos = document.getElementById("minutos").value;
    var horas = document.getElementById("horas").value;

    if(segundos){
        minutos = (parseFloat(segundos)/60);
    }else if(minutos){
        segundos = (parseFloat(minutos)*60);
    }
    if(horas){
        minutos = (parseFloat(horas)*60);
    }else if(minutos){
        horas = (parseFloat(minutos)/60);
    }
    if(horas){
        segundos = (parseFloat(horas)*3600);
    }

    document.getElementById("segundos").value=parseFloat(segundos).toFixed(3);
    document.getElementById("minutos").value=parseFloat(minutos).toFixed(3);
    document.getElementById("horas").value=parseFloat(horas).toFixed(3);

}
function clearTempoForm(){
    document.getElementById("segundos").value = "";
    document.getElementById("minutos").value = "";
    document.getElementById("horas").value = "";


}

document.getElementById('convert-massa').onclick= massaconvert;
document.getElementById('reset-massa').onclick = clearMassaForm;

function massaconvert(){

    var grama = document.getElementById("grama").value;
    var kilograma = document.getElementById("kilograma").value;
    var tonelada = document.getElementById("tonelada").value;

    if(grama){
        kilograma = (parseFloat(grama)/1000);
    }else if(kilograma){
        grama = (parseFloat(kilograma)*1000);
    }
    if(kilograma){
        tonelada = (parseFloat(kilograma)/1000);
    }else if(tonelada){
        kilograma = (parseFloat(tonelada)*1000);
    }
    if(tonelada){
        grama = (parseFloat(tonelada)*1e+6);
    }

    document.getElementById("grama").value=parseFloat(grama).toFixed(1);
    document.getElementById("kilograma").value=parseFloat(kilograma).toFixed(2);
    document.getElementById("tonelada").value=parseFloat(tonelada).toFixed(2);

}
function clearMassaForm(){
    document.getElementById("grama").value = "";
    document.getElementById("kilograma").value = "";
    document.getElementById("tonelada").value = "";


}