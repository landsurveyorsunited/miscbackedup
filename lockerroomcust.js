Inline script

x$('.tabContainerSection-pane.section-channel ').addClass('otherpanes');
x$('.tabContainerSection-pane.section-channel:first').removeClass('otherpanes');
x$(".tabContainerSection-pane.section-channel.otherpanes .matrix-itemFluid.matrix-itemFrame.feedListPage-item").click(function(){
x$(".tabContainerSection-pane.section-channel:first").show();
x$('.tabContainerSection-pane.section-channel:first .matrix.row').hide();
x$('.tabContainerSection-pane.section-channel:first .module-footer').hide();
x$(".tabContainerSection-pane.section-channel").parents().find('li.tabContainerSection-tab:nth-child(1)').addClass('navtabOne');
x$("li.tabContainerSection-tab:nth-child(1).navtabOne").click(function(){
x$(".tabContainerSection-pane.section-channel:first .matrix.row ").show();
x$('.tabContainerSection-pane.section-channel:first .module-footer').show();
});
});

Inline script

x$('<div/>',{ class : 'photoDisplayClose'}).prependTo('body').hide();
x$('<a class="photoDisplayCloser">X</a>').appendTo('.photoDisplayClose');

Inline script

// closes the photo display
x$('a.photoDisplayCloser').click(function(){
x$('.photoDisplayOne, .photoDisplayClose').hide();
x$(document.body).css({'overflow':'visible' })
});

Inline script

x$(document).ready(function(){
x$('<a href="javascript: history.go(-1)" class="activityPhotoDisplayback">Go Back</a>').prependTo('.photoListPage').hide();
});

Inline script

x$(document).ready(function(){
x$("<div></div>").attr('id','loading').prependTo('.central-content').hide();
x$('<div/>',{ class : 'photoDisplayOne'}).prependTo('.central-content').hide();
x$('<div/>',{ class : 'photoDisplayOneContent'}).appendTo('.photoDisplayOne');
x$("<iframe></iframe>",{ class : 'activityPhotoOne'}).appendTo(".photoDisplayOneContent");
});

Inline script

x$(document).ready(function(){
     x$('body').on('click','a.activityFeed-image, .feedEvent-createPhotoRollup .activityFeed-content a.media-img, .feedEvent-createPhotoLike .activityFeed-content a.media-img, .feedEvent-createPhotoComment .activityFeed-content a.media-img', function(e){
        e.preventDefault();
x$("#loading").show();  
        x$(".photoDisplayOneContent iframe:nth-child(1)").attr("src", x$(this).attr("href"));
x$(document.body).css({ 'cursor': 'wait' });
x$(".photoDisplayOneContent iframe").load(function (){
x$('.photoDisplayOneContent iframe').contents().find("head").append(x$("<style type='text/css'>  .content-name{font-size:22px;} .content-header{display:none;} .photoDetailPage-moreEntries{display:none;} .site-headerFrame{display:none} .site-footerFrame{display:none} .ningbar{display:none} .banner-frame{display:none} .site-bodyFrame{padding-left:0px} .site-body{padding:0px} .photoDisplayClose{display:none} .content-body{padding:10px} .activityPhotoDisplayback{display:block!important} .entry-headline a:hover{cursor:default} a.avatar-frame.media-img:hover{cursor:default} .comments-metadata a:hover{cursor:default} .entry-tags a{cursor:default} .adjacentEntryLink{display:none}  .column-narrow{display:none}</style>"));
x$('.photoDisplayOne').show();
x$(document.body).css({ 'cursor': 'default','overflow':'hidden' });
x$("#loading").hide();
x$('.photoDisplayClose').show();
});
});
});

Inline script

x$(document).ready(function(){
x$( " .blogListPage .entry-tags > a" ).clone().appendTo(".tagsList");
x$('.tagsList').closest('.section-html').addClass('tagslistbox');
});

Inline script

//SCROLL UP THE PHOTO TO HEADLINE
    x$('html, body').animate({
        scrollTop: x$("div.photoDetailPage .entry-headline").offset().top
    }, 800);

Inline script

x$(document).ready(function(){
x$("<div></div>").attr('id','overlayLight').prependTo('.central-content').hide();
});

Inline script

x$("<div></div>").attr('class','slideshowControls').prependTo('.photoListPage .module-header ');
x$("<div></div>").attr('class','slideshowControls').appendTo('.photoListPage .matrix.row');
x$(".slideshowControls").append('<a class="slideshowstart" title="Start Slideshow">Start Slideshow</a><a class="Stopslideshow" title="Pause Slideshow">Pause</a><a class="ReStartslideshow" title="Play Slideshow">Play</a><a class="fullslideshow" title="Full Screen Slideshow">Full Screen</a><a class="exitslideshow" title="Exit Slideshow">Exit</a>');
x$(".slideshowControls a").css('cursor','pointer');
x$('a.exitslideshow').click(function(){
x$('.photoListPage').removeClass('photoshower2');
x$('.site-bodyFrame,this').removeClass('photoview');
x$('.matrix-itemFluid.photoListPage-entry').removeClass('fullscreenslides');
x$("#overlay").slideUp(200);
x$('.photoListPage-entry').show();
x$('.SP_Photo_Title').hide();
});

Inline script

x$('a.slideshowstart').click(function(){
x$('.site-bodyFrame,this').addClass('photoview');
x$("#overlay").show();
x$('.SP_Photo_Title').show();
x$('.photoListPage').addClass('photoshower2');
var myIndex = 0;
var timer;
carousel();
function carousel() {  
var i;
    var x = x$('.photoshower2 .matrix-itemFluid.photoListPage-entry');
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";
timer = setTimeout(carousel, 3000);
}
x$('.matrix-itemFluid.photoListPage-entry, a.exitslideshow, a.Stopslideshow').click(function(event){
    clearTimeout(timer);
x$('a.ReStartslideshow').click(function(event){
x$(this).resumeTimer = setTimeout(carousel, 3000).resume();
      });   
   });
});

Inline script

x$('a.ReStartslideshow').hide();
x$('a.Stopslideshow').click(function(){
x$(this).hide();
x$('a.ReStartslideshow').show().css('display','inline-block');
});

Inline script

x$('a.ReStartslideshow').click(function(){
x$(this).hide();
x$('a.Stopslideshow').show().css('display','inline-block');
});

Inline script

x$('a.fullslideshow').click(function(){
x$('.photoshower2 .matrix-itemFluid.photoListPage-entry').toggleClass('fullscreenslides');
});

Inline script

x$('a.fullslideshow').toggle(
function(){
x$(this).addClass('fullscreenmode');
x$(this).text('X');
x$('a.Stopslideshow').addClass('fullscreenmode').text('II');
x$('a.ReStartslideshow').addClass('fullscreenmode').text('V');
},
function(){
x$(this).removeClass('fullscreenmode');
x$(this).text('Full Screen');
x$('a.Stopslideshow').removeClass('fullscreenmode').text('Pause');
x$('a.ReStartslideshow').removeClass('fullscreenmode').text('Play');
});

Inline script

x$(document).ready(function() {
x$('a.slideshowstart').click(function(){
x$('DIV.matrix-media-4-3').each(function() {
  var GCmatrix = x$(this).css('background-image');
  x$(this).css('background-image', GCmatrix.replace(/\?width=\d+/, ''));
});
});
});

Inline script

x$('.feedListPagePlayer .nav').click(function(){
x$(".matrix-itemFrame").removeClass('videoActive');
  var _c = x$(this);
  var id = _c.data("itemId");
  var _e = _c.data("itemSource");
 x$(".matrix-itemFrame[data-item-id='" + id + "'][data-item-source='" + _e + "']").addClass('videoActive');
x$('.matrix-itemFluid.matrix-itemFrame.feedListPage-item.videoActive').first().focus();
   });

Inline script

x$(".matrix-itemFluid.matrix-itemFrame.feedListPage-item").click(function(){
x$(".matrix-itemFluid.matrix-itemFrame.feedListPage-item").removeClass('videoActive');
x$(this).addClass('videoActive');
});

Inline script

x$("<div></div>").attr('class','videolistControl').prependTo('.sourceContainer');
x$("<div></div>").attr('class','videolist').appendTo('.videolistControl');
x$( ".feedListPage .module-body" ).clone(true).appendTo('.videolist');
x$('.videolist').hide();

Inline script

x$(".videolistControl").click(function(){
x$('.videolist').slideToggle(300);
x$(this).toggleClass('close');
});

Inline script

x$('a.closer.pull-right.feedListPagePlayer-close').click(function(){
x$(".videolistControl").removeClass('close');
x$('.videolist').hide();
});

Inline script

x$(document).ready(function(){
x$("<div></div>").attr('id','overlayLight').prependTo('.central-content').hide();
});

Inline script

x$("<div></div>").attr('class','slideshowControls').prependTo('.photoListPage .module-header ');
x$("<div></div>").attr('class','slideshowControls').appendTo('.photoListPage .matrix.row');
x$(".slideshowControls").append('<a class="slideshowstart" title="Start Slideshow">Start Slideshow</a><a class="Stopslideshow" title="Pause Slideshow">Pause</a><a class="ReStartslideshow" title="Play Slideshow">Play</a><a class="fullslideshow" title="Full Screen Slideshow">Full Screen</a><a class="exitslideshow" title="Exit Slideshow">Exit</a>');
x$(".slideshowControls a").css('cursor','pointer');
x$('a.exitslideshow').click(function(){
x$('.photoListPage').removeClass('photoshower2');
x$('.site-headerFrame,this').removeClass('photoview');
x$('.site-bodyFrame,this').removeClass('photoview');
x$('.matrix-itemFluid.photoListPage-entry').removeClass('fullscreenslides');
x$("#overlayLight").slideUp(200);
x$('.photoListPage-entry').show();
x$('.SP_Photo_Title').hide();
});

Inline script

x$('a.slideshowstart').click(function(){
x$('.site-headerFrame,this').addClass('photoview');
x$('.site-bodyFrame,this').addClass('photoview');
x$("#overlayLight").show();
x$('.SP_Photo_Title').show();
x$('.photoListPage').addClass('photoshower2');
var myIndex = 0;
var timer;
carousel();
function carousel() {  
var i;
    var x = x$('.photoshower2 .matrix-itemFluid.photoListPage-entry');
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";
timer = setTimeout(carousel, 3000);
}
x$('.matrix-itemFluid.photoListPage-entry, a.exitslideshow, a.Stopslideshow').click(function(event){
    clearTimeout(timer);
x$('a.ReStartslideshow').click(function(event){
x$(this).resumeTimer = setTimeout(carousel, 3000).resume();
      });   
   });
});

Inline script

x$('a.ReStartslideshow').hide();
x$('a.Stopslideshow').click(function(){
x$(this).hide();
x$('a.ReStartslideshow').show().css('display','inline-block');
});

Inline script

x$('a.ReStartslideshow').click(function(){
x$(this).hide();
x$('a.Stopslideshow').show().css('display','inline-block');
});

Inline script

x$('a.fullslideshow').click(function(){
x$('.photoshower2 .matrix-itemFluid.photoListPage-entry').toggleClass('fullscreenslides');
});

Inline script

x$('a.fullslideshow').toggle(
function(){
x$(this).addClass('fullscreenmode');
x$(this).text('X');
x$('a.Stopslideshow').addClass('fullscreenmode').text('II');
x$('a.ReStartslideshow').addClass('fullscreenmode').text('V');
},
function(){
x$(this).removeClass('fullscreenmode');
x$(this).text('Full Screen');
x$('a.Stopslideshow').removeClass('fullscreenmode').text('Pause');
x$('a.ReStartslideshow').removeClass('fullscreenmode').text('Play');
});

Inline script

x$(document).ready(function() {
x$('a.slideshowstart').click(function(){
x$('DIV.matrix-media-4-3').each(function() {
  var GCmatrix = x$(this).css('background-image');
  x$(this).css('background-image', GCmatrix.replace(/\?width=\d+/, ''));
});
});
});


Inline script

if (ning.CurrentProfile === null){
x$(document).ready(function() {
var signInClose = '<div id="signInClose"><a href="#" class="signIn-closeButton">X</a></div>';
var signInContent = '<div id="signInContent"></div>';
x$(signInContent).prependTo("body");
x$(signInClose).prependTo("body");
x$('#signInContent').load('/main/authorization/signIn? .site-body.container-fixedFull.signInPage.signInFlow');
x$('#signInContent').css({'z-index':'700','position':'fixed','height':'100%','width':'100%','background':'rgba(0,0,0,0.35)','top':'0px'});
x$('#signInClose').css({'z-index':'800','position':'fixed','top':'0','width':'100%'});
x$('.signIn-closeButton').css({'font-size':'1.5em','border':'solid 4px','float':'right'});
x$('.signIn-closeButton').click(function(){
x$(this).slideUp('100');
x$('#signInContent').slideUp('200');
x$('#signInClose').slideUp('200');
});
}); }

Inline script

jQuery(document).ready(function(x$){

  var tickerSpeed = x$('.news-ticker').attr('data-speed');

  x$('.news-ticker ul li').hide();
  x$('.news-ticker ul li:first').show();

  var currentSlide = 0;
  var slideCount = (x$('.news-ticker li').length) - 1;

  var startTicker = setInterval(function(){

  x$('.news-ticker ul li').eq(currentSlide).fadeOut(500)

  if (currentSlide < slideCount) {
    currentSlide += 1;
  } else {
    currentSlide = 0;
  }

  x$('.news-ticker ul li').eq(currentSlide).fadeIn(500)

  }, tickerSpeed);

  x$('.close-ticker').on('click', function(){
    clearInterval(startTicker);
    x$('.news-ticker').fadeOut(500, function(){
      x$(this).remove();
    });
  });

});

Inline script

    document.addEventListener("DOMContentLoaded", function () {
        if (!dataLayer) {
            return;
        }
        var handler = function (event) {
            var element = event.currentTarget;
            if (element.hasAttribute('data-track-disable')) {
                return;
            }
            var options = JSON.parse(element.getAttribute('data-track'));
            dataLayer.push({
                'event'         : 'trackEvent',
                'eventType'     : 'googleAnalyticsNetwork',
                'eventCategory' : options && options.category || '',
                'eventAction'   : options && options.action || '',
                'eventLabel'    : options && options.label || '',
                'eventValue'    : options && options.value || ''
            });
        };
        var elements = document.querySelectorAll('[data-track]');
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', handler);
        }
    });

