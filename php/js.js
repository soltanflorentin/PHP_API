$(document).ready(function(){
    $("#but1").click(function(){
        $.ajax({url: "php1/index.php",data: {country: $("select").val()}, success: function(result){
            $("#result").html(result["data"][0]['capital']);
}});
});
    $("#but2").click(function(){
        $.ajax({url: "php1/index.php",data: {country: $("select").val()}, success: function(result){
            $("#result").html("flo2");
}});
});
    $("#but3").click(function(){
        $.ajax({url: "php1/index.php",data: {country: $("select").val()}, success: function(result){
            $("#result").html("flo3");
}});
});
});