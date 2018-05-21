// $('li').on('mouseover', function() {
//     $(this).find('span').fadeIn();
// })

// $('li').on('mouseout', function() {
//     $(this).find('span').fadeOut();
// })

//$('li').on('click', function() {
    // if ($(this).css('color') === "rgb(128, 128, 128)") {
    //     console.log('222');
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     })
    // } else {
    //     console.log("333");
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     })
    // }
//     $(this).toggleClass('completed');
// })

$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
})

// $('span').click(function() {
//     $(this).parent().fadeOut(500, function() {
//         $(this).remove();
//     });
//     event.stopPropagation();
// })
$('ul').on('click', 'span', function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
    if (event.which == 13) { 
        let text = $(this).val();
        $('ul').append("<li><span><i class='fas fa-trash'></i></span> " + text + "</li>")   
    }
}) 

$('.fa-plus').click(function() {
    $("input[type='text']").fadeToggle();
})