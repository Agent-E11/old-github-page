$(document).ready(function(){
    $("#para").click(function(event){
        event.preventDefault();
        $("#para").hide();
        setTimeout(function(){
            $("#para").show();
        }, 1000);
    });
});
