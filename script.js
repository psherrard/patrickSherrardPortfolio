
portfolio = {}
//On hover menu moves right and project expands out

//.onhover() turn on class
// Maybe be more specific??

//Have three different projectInfos for each project
//hover over this toggle projectOne get projectInfo1 shown

//Maybe use time out feature for when css animation is done?

portfolio.projectHover = () => {
    $(".projectOneInfo").hide(); 
    $(".projectTwoInfo").hide();
    $(".projectThreeInfo").hide();

    $(".projectOne").hover(function () {

        $(".projectOneInfo").show();
        portfolio.mouseleaveOne();
    })
    $(".projectTwo").hover(function () {

        $(".projectTwoInfo").show();
        portfolio.mouseleaveTwo();
    })
    $(".projectThree").hover(function () {

        $(".projectThreeInfo").show();
        portfolio.mouseleaveThree();
    })
}

portfolio.mouseleaveOne = () => {
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

