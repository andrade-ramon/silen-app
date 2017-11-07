$(function(){
    //equivalente ao load de nossa página
    $("#modal01").modal({backdrop:false});
    
    $("#modal01").modal("show");
    
    setTimeout(function(){
        $("#modal01").modal("hide");
    }, 3000);
});