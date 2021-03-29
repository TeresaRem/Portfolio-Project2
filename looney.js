$(document).ready(function() {
    // $.get("https://looney-toons-api.herokuapp.com/api/characters",function(data) {
    //     console.log(data);

    $("#get-data").click(function(){

        $.get("https://looney-toons-api.herokuapp.com/api/characters", function (looneyChars) {
            console.log(looneyChars);   
            console.log(looneyChars.data);
            var results = looneyChars.data;
            
            for (var i = 0; i < results.length; i++) {
        //   console.log(results[i]);
                
            //console.log(results[i].name);
                var name = results[i].name;
                var birthday= results[i].birthDay;
                var spouse = results[i].spouse;
                var voice = results[i].voice;
                var img = results[i].img;
                var htmlStr = "";
                
                htmlStr +=`<div class='card bg-danger text-dark pb-10%' >
                <div class='card-body text-center ' > 
                <img class='card-img-top' style="width:10%" alt='img' src="${results[i].img}">
                <h5>Name: ${name}</h5>
                <h5>Birthday: ${birthday}</h5>
                <h5>Spouse: ${spouse}</h5>
                <h5>Voice: ${voice}</h5>
                <button class="vanish">Hide me</button></button></div>`;     
                
            $("#looney-list").append(htmlStr );
            }
            
        
        });
        
        $(document).on('click','.vanish', function() {
            $(this).closest ('div').hide();
        })
        $(document).on('click','#hidden', function() {
            $(".vanish").closest('div').show();
        })
        
        })
})