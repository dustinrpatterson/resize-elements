//Dustin's code to resize tiles to match largest tile STARTS here

//Variables for the all solutions page
var desktopSolutionTileCopy = $(".hidden-sm .c-product-solution-tile__copy p");
var mobileSolutionTileCopy = $(".hidden-md .c-product-solution-tile__copy p");
//Variables for the home page
var platformTileHeadline = $('.c-body-tile__headline');
var platformTileCopy = $('.c-body-tile p');

//Function that resizes elements to make them the same height
var matchHeight = function (element) {
    element.css('height', 'auto')
    var tallest = 0;
    element.each(function () {
        if ($(this).outerHeight() > tallest) {
            tallest = $(this).outerHeight();
        }
    })
    //if statement is required for hidden elements
    if (tallest > 0) {
        element.outerHeight(tallest);
    };
};
//calling the function to resize element on resize
$(window).resize(function () {
    matchHeight(desktopSolutionTileCopy)
    matchHeight(mobileSolutionTileCopy)
    matchHeight(platformTileHeadline)
    matchHeight(platformTileCopy)
});
//Calling the function on accordion click because they don't resize when they are hidden
$(".c-product-solution-tile-blade_button").click(function () {
    //Timeout needed to account for animation
    setTimeout(function () {
        mobileSolutionTileCopy.css('height', 'auto');
        matchHeight(mobileSolutionTileCopy)
    }, 100);
});

//Dustin's code to resize tiles to match largest tile ENDS here