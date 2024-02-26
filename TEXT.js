TEXT=function(){
//texts
setTimeout(function(){
v=document.createElement('div');
document.body.appendChild(v);
v.innerHTML='<font color=gray>'+
'<h3><b>Wedding Invitation Compatibility Test</b>'+
'<br><h6>powered by three.js'+
'<br>@lowrangeedit'+
'</font>';
v.zIndex=1;
v.style='position:absolute;';
v.style.left=(window.innerWidth*.0125)+'px',
v.style.top=(window.innerHeight*.0125)+'px',
//dev
v=document.createElement('div');
document.body.appendChild(v);
v.innerHTML='<h3/><br><h6/><br><br><font color=gray><b><h6>tap to override material</b></h6></font>';
v.zIndex=9999;
v.style='position:absolute;';
v.style.left=(window.innerWidth*.0125)+'px',
v.style.top=(window.innerHeight*.0125)+'px',
v.onclick=function(){
scene.overrideMaterial=
new THREE.MeshNormalMaterial({side:THREE.DoubleSide,wireframe:true});
renderer.setClearColor(0x000000);
setTimeout(function(){
scene.overrideMaterial=false;
renderer.setClearColor(0x000000);
},1000*5);
}
});



}