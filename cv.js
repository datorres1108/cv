//Funcion que calcula los años actuales de la experiencia laboral
function expeActual(fechaIng)
{
    const experiencia_actual = document.getElementById("expe_actual"); //Experiancia actual 
    if(!fechaIng || isNaN(new Date(fechaIng))) return;
    const hoy = new Date();
    const dateIng = new Date(fechaIng);
    if(hoy - dateIng < 0) return;
    let dias = hoy.getUTCDate() - dateIng.getUTCDate();
    let meses = hoy.getUTCMonth() - dateIng.getUTCMonth();
    let years = hoy.getUTCFullYear() - dateIng.getUTCFullYear();
    if(dias < 0)
    {
      meses--;
      dias = 30 + dias;
    }
    if(meses < 0)
    {
      years--;
      meses = 12 + meses;
    }
    
    console.log("TIEMPO EXP ACTUAL = "+ years + " Años, " + meses + " Meses,  " + dias + " Dias.");
    experiencia_actual.innerHTML =  "<b> <i class='fas fa-hourglass-half'></i> " + years + " Años, " + meses + " Meses,  " + dias +" Dias </b>";

}
//Funcion que calcula los años de otras experiencia
function otra_exte(fechaini,fechafin,key)
{
    if(!fechaini || isNaN(new Date(fechaini))) return;
    const hoy = new  Date(fechafin);
    const dateIni = new Date(fechaini);
    console.log(fechaini,fechafin,key)
   
    if(hoy - dateIni < 0) return;
    let dias = hoy.getUTCDate() - dateIni.getUTCDate();
    let meses = hoy.getUTCMonth() - dateIni.getUTCMonth();
    let years = hoy.getUTCFullYear() - dateIni.getUTCFullYear();
    if(dias < 0)
    {
      meses--;
      dias = 30 + dias;
    }
    if(meses < 0)
    {
      years--;
      meses = 12 + meses;
    }
    switch(key)
    {
        case 1:
            console.log("TIEMPO EXP ANT1 = "+ years + " Años, " + meses + " Meses,  " + dias + " Dias.");
            const experiencia_anterior1 = document.getElementById("expe_ante1"); //Experiancia anterior 1  
            experiencia_anterior1.innerHTML =  "<b> <i class='fas fa-hourglass-half'></i> " + years + " Años, " + meses + " Meses,  " + dias +" Dias </b>"; 
        break;
        
        case 2:
            console.log("TIEMPO EXP ANT2 = "+ years + " Años, " + meses + " Meses,  " + dias + " Dias.");
            const experiencia_anterior2 = document.getElementById("expe_ante2"); //Experiancia anterior 2  
            experiencia_anterior2.innerHTML =  "<b> <i class='fas fa-hourglass-half'></i> " + years + " Años, " + meses + " Meses,  " + dias +" Dias </b>"; 
        break;

        case 3:
            console.log("TIEMPO EXP ANT3 = "+ years + " Años, " + meses + " Meses,  " + dias + " Dias.");
            const experiencia_anterior3 = document.getElementById("expe_ante3"); //Experiancia anterior 3  
            experiencia_anterior3.innerHTML =  "<b> <i class='fas fa-hourglass-half'></i> " + years + " Años, " + meses + " Meses,  " + dias +" Dias </b>"; 
        break;

        case 4:
            console.log("TIEMPO EXP ANT4 = "+ years + " Años, " + meses + " Meses,  " + dias + " Dias.");
            const experiencia_anterior4 = document.getElementById("expe_ante4"); //Experiancia anterior 4  
            experiencia_anterior4.innerHTML =  "<b> <i class='fas fa-hourglass-half'></i> " + years + " Años, " + meses + " Meses,  " + dias +" Dias </b>"; 
        break;
    }
    
}

//Llamo las funciones
const actual = expeActual('2016-10-10');
const expe1 = otra_exte('2014-03-01','2015,04,01',1);
const expe2 = otra_exte('2012-06-01','2014,03,01',2);
const expe3 = otra_exte('2011-09-01','2011,12,01',3);
const expe4 = otra_exte('2011-01-01','2011,07,01',4);
