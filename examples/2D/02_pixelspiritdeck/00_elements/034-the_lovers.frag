// Number: VI
// Title: The Lovers
// Author: Patricio Gonzalez Vivo

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

#include "../lib/fill.glsl"
#include "../lib/stroke.glsl"
#include "../lib/polySDF.glsl"
//GLOBAL_START
#include "../lib/heartSDF.glsl"
//GLOBAL_END

void main() {
    vec3 color = vec3(0.);
    vec2 st = gl_FragCoord.xy/u_resolution;
    st = (st-.5)*1.1912+.5;
    if (u_resolution.y > u_resolution.x ) {
        st.y *= u_resolution.y/u_resolution.x;
        st.y -= (u_resolution.y*.5-u_resolution.x*.5)/u_resolution.x;
    } else {
        st.x *= u_resolution.x/u_resolution.y;
        st.x -= (u_resolution.x*.5-u_resolution.y*.5)/u_resolution.y;
    }
    //START
    color += fill(heartSDF(st),.5);
    color -= stroke(polySDF(st,3),.15,.05);
    //END
    gl_FragColor = vec4(color,1.);
}