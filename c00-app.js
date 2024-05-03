/*
 * author: Nadeem Elahi
 * nadeem.elahi@gmail.com
 * nad@3deem.com
 * license: gpl v3
 */
"use strict"; 

var gl = ngl.get_gl();
ngl.configureDraw();

// 3 x 3D(x,y,z) geometry vertices 
// 3 x 3D(red,green,blue) colour channels 
var startIdx = 0;
var dimVec = 4;
var dimClr = 3;

var verts =  new Float32Array( [ 
	-0.5 , -0.5 , -0.5 ,1  ,  // 0
	 0.5 , -0.5 , -0.5 ,1  ,  // 1
	 0.5 ,  0.5 , -0.5 ,1  ,  // 2

	-0.5 , -0.5 , -0.5 ,1  ,  // 3  
	 0.5 ,  0.5 , -0.5 ,1  ,  // 4 
	-0.5 ,  0.5 , -0.5 ,1  ,  // 5

 	-0.5 , -0.5 ,  0.5 ,1  ,  // 6  
	 0.5 ,  0.5 ,  0.5 ,1  ,  // 7
	 0.5 , -0.5 ,  0.5 ,1  ,  // 8 

	-0.5 , -0.5 ,  0.5 ,1  ,  // 9  
	-0.5 ,  0.5 ,  0.5 ,1  ,  // 10
	 0.5 ,  0.5 ,  0.5 ,1  ,  // 11 

	 0.5 , -0.5 , -0.5 ,1  ,  // 1
	 0.5 ,  0.5 ,  0.5 ,1  ,  // 7
	 0.5 ,  0.5 , -0.5 ,1  ,  // 2

	 0.5 , -0.5 , -0.5 ,1  ,  // 1
	 0.5 , -0.5 ,  0.5 ,1  ,  // 8 
	 0.5 ,  0.5 ,  0.5 ,1  ,  // 7

	-0.5 , -0.5 , -0.5 ,1  ,  // 3  
	-0.5 ,  0.5 ,  0.5 ,1  ,  // 10
	-0.5 ,  0.5 , -0.5 ,1  ,  // 5

	-0.5 , -0.5 , -0.5 ,1  ,  // 3  
	-0.5 , -0.5 ,  0.5 ,1  ,  // 9  
	-0.5 ,  0.5 ,  0.5 ,1  ,  // 10

	-0.5 ,  0.5 , -0.5 ,1  ,  // 5
	 0.5 ,  0.5 ,  0.5 ,1  ,  // 11 
	-0.5 ,  0.5 ,  0.5 ,1  ,  // 10

	-0.5 ,  0.5 , -0.5 ,1  ,  // 5
	 0.5 ,  0.5 , -0.5 ,1  ,  // 4 
	 0.5 ,  0.5 ,  0.5 ,1  ,  // 11 

	-0.5 , -0.5 , -0.5 ,1  ,  // 0
 	-0.5 , -0.5 ,  0.5 ,1  ,  // 6  
	 0.5 , -0.5 , -0.5 ,1  ,  // 1

	 0.5 , -0.5 , -0.5 ,1  ,  // 1
 	-0.5 , -0.5 ,  0.5 ,1  ,  // 6  
	 0.5 , -0.5 ,  0.5 ,1  ,  // 8 

] );

var cnt = verts.length / 4;

var colours =  new Float32Array( [ 
		1,0,0  ,  
		1,0,0  ,  
		1,0,0  ,  
		1,0,0  ,  
		1,0,0  ,  
		1,0,0  ,  

		0,1,0  ,  
		0,1,0  ,  
		0,1,0  ,  
		0,1,0  ,  
		0,1,0  ,  
		0,1,0  ,  
	
		0,0,1  ,  
		0,0,1  ,  
		0,0,1  ,  
		0,0,1  ,  
		0,0,1  ,  
		0,0,1  ,  

		0,1,1  ,  
		0,1,1  ,  
		0,1,1  ,  
		0,1,1  ,  
		0,1,1  ,  
		0,1,1  ,  

		1,0,1  ,  
		1,0,1  ,  
		1,0,1  ,  
		1,0,1  ,  
		1,0,1  ,  
		1,0,1  ,  

		1,1,0  ,  
		1,1,0  ,  
		1,1,0  ,  
		1,1,0  ,  
		1,1,0  ,  
		1,1,0  ,  

] );

var xdeg = 15;
var mat4x4rotx = nmg.genRotateAboutXmatrix( xdeg ) ;

var ydeg = 1;
var mat4x4roty = nmg.genRotateAboutYmatrix( ydeg ) ;

nmm.multiply1x4times4x4 ( verts , mat4x4rotx ) ;
nmm.multiply1x4times4x4 ( verts , mat4x4roty ) ;

//console.log("---");
//nmm.print4Dvector ( verts ) ;

ngl.loadAttribute ( "vert" , verts , dimVec );
ngl.loadAttribute ( "colour" , colours , dimClr );

function drawframe(){

	mat4x4rot = nmg.genRotateAboutYmatrix( ydeg ) ;
	nmm.multiply1x4times4x4 ( verts , mat4x4roty ) ;

	ngl.loadAttribute ( "vert" , verts , dimVec );


	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLES, startIdx, cnt);

	setTimeout( drawframe , 60 );

}
drawframe();

