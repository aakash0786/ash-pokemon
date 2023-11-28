var crsr = document.querySelector("#h-text");
var blur = document.querySelector("#filter-gallery");

<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
<script type="text/javascript">
    $('.portfolio-item').isotope({
        // options
        itemSelector:'.item',
        layoutMode:'fitRows'
});
            $('.portfolio-menu ul li').click(function(){
            $('.portfolio-menu ul li').removeClass('active');
            $(this).addClass('active');
            
                var selector =$(this).attr('data-filter');
            $('.portfolio-item').isotope({
                filter:selector
            });
            return false;

            });


</script>