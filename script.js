
portfolio = {}
//On hover menu moves right and project expands out

//.onhover() turn on class
// Maybe be more specific??

//Have three different projectInfos for each project
//hover over this toggle projectOne get projectInfo1 shown

portfolio.projectHover = () => {
    $(".projectOneInfo").hide(); 
    $(".projectTwoInfo").hide();
    $(".projectThreeInfo").hide();

    $(".projectOne").hover(function () {
        $(this).toggleClass("projectFocus");
        $(".projectOneInfo").show();
        portfolio.mouseleaveOne();
    })
    $(".projectTwo").hover(function () {
        $(this).toggleClass("projectFocus");
        $(".projectTwoInfo").show();
        portfolio.mouseleaveTwo();
    })
    $(".projectThree").hover(function () {
        $(this).toggleClass("projectFocus");
        $(".projectThreeInfo").show();
        portfolio.mouseleaveThree();
    })
}

portfolio.mouseleaveOne = () =>{
    $('.projectOne').mouseleave(function(){
        $(".projectOneInfo").hide();
    })
}
portfolio.mouseleaveTwo = () => {
    $('.projectTwo').mouseleave(function () {
        $(".projectTwoInfo").hide();
    })
}
portfolio.mouseleaveThree = () => {
    $('.projectThree').mouseleave(function () {
        $(".projectThreeInfo").hide();
    })
}

portfolio.init = () => {
    portfolio.projectHover();
};

$(function () {
    portfolio.init();
});




// portfolio.projectHover = () => {
//     $(".projectInfo").hide();
//     $(".projects").hover(function () {
//         $(this).toggleClass("projectFocus");
//         console.log('hovered');
//         $(".projectInfo").show();
//     })
// }
