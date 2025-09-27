$(document).ready(function() {
 var strVar = '<div style="position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;" id="aContainer">';
 $(document.body).append(strVar);
 $("#aContainer").click(function () {
 		if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
           	sdk.showBanner();
        }
            $('#aContainer').hide();
	});
});

window.setInterval(function(){
        $('#aContainer').show();
}, 60000);
