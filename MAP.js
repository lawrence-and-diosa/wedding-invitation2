MAP=function(){
// MAP

map=document.createElement('IFRAME');
map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123504.20202208657!2d121.06219010000001!3d14.68393575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ba0942ef7375%3A0x4a9a32d9fe083d40!2sQuezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1705334885476!5m2!1sen!2sph";
document.body.appendChild(map);
map.style.zIndex=9999;
sz=0;mapSz=window.innerHeight;if(isPortrait){mapSz = window.innerWidth;}
map.width=map.height=sz;
map.style.top=((window.innerHeight/2)-(sz/2))+'px';
map.style.left=((window.innerWidth/2)-(sz/2))+'px';
map.style='position:absolute;scrolling:no;border:0;allowfullscreen:;loading:"lazy";referrerpolicy:no-referrer-when-downgrade;';

numMap=2;if(!isPortrait){numMap=2;}
setInterval(function(){
if(num==numMap&&sz<mapSz){sz+=100;}
else if(num!=numMap&&sz>=0){sz-=100;};
if(sz>=0&&sz<mapSz){
map.width=map.height=sz;
map.style.top=((window.innerHeight/2)-(sz/2)+((sz/2)*.65))+'px';
map.style.left=((window.innerWidth/2)-(sz/2))+'px';

map.style.top=((window.innerHeight/2)-(sz/2)+((sz/2)*.65))+'px';
map.style.left=((window.innerWidth/2)-(sz))+'px';

}

},120);
}