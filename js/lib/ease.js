/*
     *
     * TERMS OF USE - EASING EQUATIONS
     * 
     * Open source under the BSD License. 
     * 
     * Copyright © 2001 Robert Penner
     * All rights reserved.
     * 
     * Redistribution and use in source and binary forms, with or without modification, 
     * are permitted provided that the following conditions are met:
     * 
     * Redistributions of source code must retain the above copyright notice, this list of 
     * conditions and the following disclaimer.
     * Redistributions in binary form must reproduce the above copyright notice, this list 
     * of conditions and the following disclaimer in the documentation and/or other materials 
     * provided with the distribution.
     * 
     * Neither the name of the author nor the names of contributors may be used to endorse 
     * or promote products derived from this software without specific prior written permission.
     * 
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
     * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
     *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
     *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
     *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
     * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
     *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
     * OF THE POSSIBILITY OF SUCH DAMAGE. 
     *
 */

//Functions by Rober Penner
//http://flashblog.robertpenner.com/
//I just wrapped it for easy access in my libraries
//Edit: c is now destination value, not change of value

var ease = ( function( window, undefined ){

    /*
        t = current time
        b = beginning value
        c = end value
        d = duration
    */
    var penner = {

        linear : function( t, b, c, d ){

            c -= b;
            return c * ( t / d ) + b;
        },
        quadIn : function( t, b, c, d ){

            c -= b;
            t /= d;
            return c * Math.pow( t, 2 ) + b;
        },
        quadOut : function( t, b, c, d ){

            c -= b;
            t /= d;
            return -c * t * ( t - 2 ) + b;
        },
        quad : function( t, b, c, d ){

            c -= b;
            t /= ( d / 2 );
            if( t < 1 ){ return c / 2 * Math.pow( t, 2 ) + b; }
            t--;
            return ( -c / 2 ) * ( t * ( t - 2 ) - 1 ) + b;
        },
        cubicIn : function( t, b, c, d ){

            c -= b;
            t /= d;
            return c * Math.pow( t, 3 ) + b;
        },
        // cubic easing out - decelerating to zero velocity
        cubicOut : function( t, b, c, d ){

            c -= b;
            t /= d;
            t--;
            return c * ( Math.pow( t, 3 ) + 1 ) + b;
        },
        // cubic easing in/out - acceleration until halfway, then deceleration
        cubic : function( t, b, c, d ){

            c -= b;
            t /= ( d / 2 );
            if( t < 1 ){ return c / 2 * Math.pow( t, 3 ) + b; }

            t -= 2;
            return ( c / 2 ) * ( Math.pow( t, 3 ) + 2 ) + b;
        },
        // quartic easing in - accelerating from zero velocity
        quartIn : function( t, b, c, d ){

            c -= b;
            t /= d;
            return c * Math.pow( t, 4 ) + b;
        },
        // quartic easing out - decelerating to zero velocity
        quartOut : function( t, b, c, d ){

            c -= b;
            t /= d;
            t--;
            return -c * ( Math.pow( t, 4 ) - 1 ) + b;
        },
        // quartic easing in/out - acceleration until halfway, then deceleration
        quart : function( t, b, c, d ){

            c -= b;
            t /= ( d / 2 );
            if( t < 1 ){ return c / 2 * Math.pow( t, 4 ) + b; }
            t -= 2;
            return ( -c / 2 ) * ( Math.pow( t, 4 ) - 2 ) + b;
        },
        // quintic easing in - accelerating from zero velocity
        quintIn : function( t, b, c, d ){

            c -= b;
            t /= d;
            return c * Math.pow( t, 5 ) + b;
        },
        // quintic easing out - decelerating to zero velocity
        quintOut : function( t, b, c, d ){

            c -= b;
            t /= d;
            t--;
            return c * ( Math.pow( t, 5 ) + 1 ) + b;
        },
        // quintic easing in/out - acceleration until halfway, then deceleration
        quint : function( t, b, c, d ){

            c -= b;
            t /= ( d / 2 );
            if( t < 1 ){ return ( c / 2 ) * Math.pow( t, 5 ) + b; }
            t -= 2;
            return c / 2 * ( Math.pow( t, 5 ) + 2 ) + b;
        },
        // sinusoidal easing in - accelerating from zero velocity
        sineIn : function( t, b, c, d ){

            c -= b;
            return -c * Math.cos( t / d * ( Math.PI / 2 ) ) + c + b;
        },
        // sinusoidal easing out - decelerating to zero velocity
        sineOut : function( t, b, c, d ){

            c -= b;
            return c * Math.sin( t / d * ( Math.PI / 2 ) ) + b;
        },
        // sinusoidal easing in/out - accelerating until halfway, then decelerating
        sine : function( t, b, c, d ){

            c -= b;
            return -c / 2 * ( Math.cos( Math.PI * ( t / d ) ) - 1 ) + b;
        },
        // exponential easing in - accelerating from zero velocity
        expoIn: function( t, b, c, d ){

            c -= b;
            return ( t === 0 ) ? b : c * Math.pow( 2, 10 * ( t / d - 1 ) ) + b;
        },
        // exponential easing out - decellerating to zero velocity
        expoOut: function( t, b, c, d ){

            c -= b;
            return ( t === d ) ? b + c : c * ( -Math.pow( 2, -10 * t / d ) + 1 ) + b;
        },
        // exponential easing in and out
        expo: function( t, b, c, d ){

            c -= b;
            if( t === 0 ){ return b; }
            if( t === d ){ return b + c; }
            if( ( t /= d / 2 ) < 1 ){ return c / 2 * Math.pow( 2, 10 * ( t - 1 ) ) + b; }
            return c / 2 * ( -Math.pow( 2, -10 * --t ) + 2 ) + b;
        },
        // circular easing in - accelerating from zero velocity
        circIn : function( t, b, c, d ){

            c -= b;
            t /= d;
            return -c * ( Math.sqrt( 1 - Math.pow( t, 2 ) ) - 1 ) + b;
        },
        // circular easing out - decelerating to zero velocity
        circOut : function( t, b, c, d ){

            c -= b;
            t /= d;
            t--;
            return c * Math.sqrt( 1 - Math.pow( t, 2 ) ) + b;
        },
        // circular easing in/out - acceleration until halfway, then deceleration
        circ : function( t, b, c, d ){

            c -= b;
            t /= ( d / 2 );
            if( t < 1 ){ return -c / 2 * ( Math.sqrt( 1 - Math.pow( t, 2 ) ) - 1 ) + b; }
            t -= 2;
            return c / 2 * ( Math.sqrt( 1 - Math.pow( t, 2 ) ) + 1 ) + b;
        }
    };

    return function( func, t, b, c, d ){

        return penner[ func ]( t, b, c, d );
    };

})( window, undefined );


