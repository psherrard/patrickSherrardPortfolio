
portfolio = {}
//On hover menu moves right and project expands out

//.onhover() turn on class
// Maybe be more specific??

//Have three different projectInfos for each project
//hover over this toggle projectOne get projectInfo1 shown

portfolio.projectHover = () => {
    $(".projectInfo").hide(); 
    $(".projects").hover(function () {
        $(this).toggleClass("projectFocus");
        console.log('hovered');
        $(".projectInfo").show();
    })
}

portfolio.init = () => {
    portfolio.projectHover();
};

$(function () {
    portfolio.init();
});

