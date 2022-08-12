// $("li").hide();

// $("h1").hide();

$(document).ready(() => {
    $(() =>{
        $(".hide-btn").click(()=>{
            console.log("Ocultando...");
        })
        $(".show-btn").click(()=>{
            $("h1").show();
        })
        $("li").click(()=>{
            $("h1").css({color: "red"});
        })
        $(".new-element").click(()=>{
            $("ul").append("<li>New Element</li>");
        })
    })
})


