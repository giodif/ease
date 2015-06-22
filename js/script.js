//Examples file
$( function(){

    var isAnimating = false;

    var createAnimation = function( func, $el, begin, end, duration ){

        if( isAnimating ){ return false; }

        var animate = function( func, $el, begin, end, duration ){

            isAnimating = true;
        
            var start = 0,
                step  = function( timestamp ){

                    var progress;

                    if( !start ) start = timestamp;

                    progress = timestamp - start;

                    if( progress >= duration ){

                        progress = duration;
                        isAnimating = false;
                    }
                    else{
                        window.requestAnimationFrame( step );
                    }

                    $el.css({ left : ease( func, progress, begin, end, duration ) + "px" });
                };

            window.requestAnimationFrame( step );
        };

        animate( func, $el, begin, end, duration );
    };

    var cubes = $( ".ease" )
            .css({ left : 0 }),
            .on( "click", function( e ){

                var ease = $( this ).attr( "id" );

                createAnimation( ease, $( this ), 0, 300, 3000 );
            } );

    $( "#reset" ).on( "click", function( e ){

        cubes.css({ left : 0 });
        e.preventDefault();
    } );
} );
