


TABLE=function(scenev,leavesCountV,mainMaterial2,  sz){


//table
gm=new THREE.PlaneGeometry(3*2,3*2);
//if(isPortrait){gm.rotateZ(-Math.PI/2);}
gm.translate(0,0,-.5);
txd=new THREE.ImageUtils.loadTexture('res/table.png');
txd.wrapS=txd.wrapT=THREE.RepeatTexture;
txd.repeat.set(1,1);
mt=new mainMaterial2({map:txd,side:2});
msh=new THREE.Mesh(gm,mt);
scenev.add(msh);
msh.receiveShadow=true;












//leave
lvs=[];
for(var i=0;i<leavesCountV;i++){
gm=new THREE.PlaneGeometry(sz,sz);
txd=new THREE.ImageUtils.loadTexture('res/l'+(Math.floor(Math.random()*10)+1)+'.png');
mt=new mainMaterial2({map:txd,alphaTest:.5});
lvs[i]=new THREE.Mesh(gm,mt);
scenev.add(lvs[i]);
xv=(Math.random()-.5)*5
yv=(Math.random()-.5)*10
zv=((Math.random()-.5)*1*.5)-.25
lvs[i].position.set(xv,yv,zv);
lvs[i].vang=Math.random()*.01;
}
setInterval(function(){
for(var i=0;i<lvs.length;i++){
lvs[i].position.y-=.005;
lvs[i].rotation.z-=lvs[i].vang;
if(lvs[i].position.y<-5){lvs[i].position.y=5;}
}
})







}