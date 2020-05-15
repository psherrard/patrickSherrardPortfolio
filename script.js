
portfolio = {}
//On hover menu moves right and project expands out

//.onhover() turn on class
// Maybe be more specific??

//Have three different projectInfos for each project
//hover over this toggle projectOne get projectInfo1 shown

//Maybe use time out feature for when css animation is done?
//.slideDown()

// ADD CSS THAT THAT APPLIES PADDING-BOTTOM
//.css("propertyname","value");


//MAYBE use on click so it works on mobile????




portfolio.projectHover = () => {
    $(".projectOneInfo").hide(); 
    $(".projectTwoInfo").hide();
    $(".projectThreeInfo").hide();

    
    $(".projectOne").mouseenter(function () {
        $(".projectOneInfo").slideDown(300);
        $(".projectOne").css("padding-bottom", "250px");
        portfolio.mouseleaveOne();
    })
    
    $(".projectTwo").mouseenter(function () {
        $(".projectTwoInfo").slideDown(300);
        $(".projectTwo").css("padding-bottom", "250px");
        portfolio.mouseleaveTwo();
    })
    $(".projectThree").mouseenter(function () {
        $(".projectThreeInfo").slideDown(300);
        $(".projectThree").css("padding-bottom", "250px");
        portfolio.mouseleaveThree();
    })
}

portfolio.mouseleaveOne = () => {
    $('.projectOne').mouseleave(function(){
        $(".projectOne").css("padding-bottom", "0px");
        $(".projectOneInfo").hide();
    })
}
portfolio.mouseleaveTwo = () => {
    $('.projectTwo').mouseleave(function () {
        $(".projectTwo").css("padding-bottom", "0px");
        $(".projectTwoInfo").hide();
    })
}
portfolio.mouseleaveThree = () => {
    $('.projectThree').mouseleave(function () {
        $(".projectThree").css("padding-bottom", "0px");
        $(".projectThreeInfo").hide();
    })
}

portfolio.init = () => {
    portfolio.projectHover();
};

$(function () {
    portfolio.init();
});

