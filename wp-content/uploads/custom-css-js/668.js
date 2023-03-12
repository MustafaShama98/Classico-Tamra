<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* Default comment here */ 

jQuery(document).ready(function ($) {

    //To check if element is visible
    function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }
    
    //To play-pause self-hosted videos in elementor only when it's visible
    $(window).scroll(function () {
        $(".elementor-video").each(function (i, obj) {
            if (checkVisible(obj)) {
                obj.play();
            } else
                obj.pause();
        });
    });
});</script>
<!-- end Simple Custom CSS and JS -->
