$(document).ready(function() {
    $('#apart').mapster({
        mapKey: 'number',
        listKey: 'number',
        fillColor: '333333',
        fillOpacity: 0.1,
        strokeWidth: 4,
        stroke: true,
        staticState: true,
        mouseoutDelay: 200,
        render_highlight: {
            fillColor: '333333',
            fillOpacity: 0.5,
            stroke: true,
            fade: true
        },
        areas: [
        {
            key: '00',
            strokeColor: "32ed2f"
        },
        {
            key: '01',
            strokeColor: "eda02f"  
        },
        {
            key: '02',
            strokeColor: "ed2f2f"          
        },
        {
            key: '03',
            strokeColor: "ed2f2f"        
        },
        {
            key: '04',
            strokeColor: "ed2f2f"         
        },
        {
            key: '05',
            strokeColor: "32ed2f"           
        },
        {
            key: '06',
            strokeColor: "ed2f2f"         
        },
        {
            key: '07',
            strokeColor: "eda02f"         
        },
        {
            key: '08',
            strokeColor: "32ed2f"          
        },
        {
            key: '09',
            strokeColor: "32ed2f"            
        }
    ],
    });
});

var time = 300;     
var resizeDelay = 100;   
var savedWidth = $('#apart').width();
var savedHeigth = $('#apart').height(); 
var savedWindowWidth = $(window).width();
var savedWindowHeight = $(window).height();
function resize(newWinWidth, newWinHeight) {          
    var newImgWidth = 0;
    var newImgHeight = 0;
    newImgWidth = (newWinWidth * savedWidth) / savedWindowWidth;  
    if($(window).height< savedWindowHeight){
        newImgHeight = (newWinHeight * savedHeigth) / savedWindowHeight;
    }
    if (savedWindowWidth === $(window).width()) {
        $('#apart').mapster('resize', savedWidth, savedHeigth, time);
    } else {
        $('#apart').mapster('resize', newImgWidth, newImgHeight, time);
    }
};
function onWindowResize() {
    var curWidth = $(window).width(),
    curHeight = $(window).height(),
    checking = false;
    if (checking) {
        return;
    }
    checking = true;
    window.setTimeout(function () {
        var newWidth = $(window).width(),
        newHeight = $(window).height();
        if (newWidth === curWidth && newHeight === curHeight) {
            resize(newWidth, newHeight);
        }
        checking = false;
    }, resizeDelay);
}

$(window).bind('resize', onWindowResize);
