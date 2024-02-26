
//light and bg
LGT=function(scenev,v,vv,doShadowV){
//light
pt=new THREE.AmbientLight(0xffffff,v);
scenev.add(pt);
pt=new THREE.PointLight(0xffffff,vv,10);
scenev.add(pt);
pt.position.set(0,5,5);
pt.castShadow=true;
pt.shadowBias=-.001;
renderer.shadowMapEnabled=doShadowV;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
/*
THREE.BasicShadowMap
THREE.PCFShadowMap (default)
THREE.PCFSoftShadowMap
THREE.VSMShadowMap*/
matv=THREE.MeshLambertMaterial;
}





matv=THREE.MeshBasicMaterial;
//LGT(scene,.5,2,true);
LGT(scene,.5,2,false);

//BUTTERFLIESONTOUCH();
//BUTTERFLIES(matv);
//VIDEOBG();
//TABLE(scene,24,matv);
TABLE(scene,24,matv, .25);
MUSIC();
TEXT();

if(window.innerWidth<window.innerHeight){
arr=[1,2,3,4,5,6,7];
arr2=[0,0,0,0,0,0,8];
BOOK(arr,arr2,-.4, matv);
camera.position.set(0,0,3);
camera.translateY(-.1);
camera.zoom=.8
}
else if(window.innerWidth>window.innerHeight){
arr= [1,2,4,6,8];
arr2=[0,3,5,7,0];
arr= [1,3,5,7];
arr2=[2,4,6,8];
BOOK(arr,arr2,0, matv);
camera.position.set(0,0,2);
camera.translateY(-.1);
camera.zoom=1.25
}





camera.updateProjectionMatrix();
controls.update();
controls.enabled=false;

window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
location.reload();
}

