$(function(){
    var actualizarHora = function(){
      var fecha = new Date(),
          hora = fecha.getHours(),
          minutos = fecha.getMinutes(),
          segundos = fecha.getSeconds(),
          diaSemana = fecha.getDay(),
          dia = fecha.getDate(),
          mes = fecha.getMonth(),
          anio = fecha.getFullYear(),
          ampm;
      
      var $pHoras = $("#horas"),
          $pSegundos = $("#segundos"),
          $pMinutos = $("#minutos"),
          $pAMPM = $("#ampm"),
          $pDiaSemana = $("#diaSemana"),
          $pDia = $("#dia"),
          $pMes = $("#mes"),
          $pAnio = $("#anio");
          
      var semana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
      var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
      
      $pDiaSemana.text(semana[diaSemana]);
      $pDia.text(dia);
      $pMes.text(meses[mes]);
      $pAnio.text(anio);
      
      if(hora >= 12){
        hora = hora - 12;
        ampm = "PM";
      } else {
        ampm = "AM";
      }
      if(hora == 0) hora = 12;
      
      $pHoras.text(hora < 10 ? "0" + hora : hora);
      $pMinutos.text(minutos < 10 ? "0" + minutos : minutos);
      $pSegundos.text(segundos < 10 ? "0" + segundos : segundos);
      $pAMPM.text(ampm);
    };
    
    actualizarHora();
    setInterval(actualizarHora, 1000);
});