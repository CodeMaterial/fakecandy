var s = new THREE.Scene();

var c = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

c.position.z = 5; //z is in and out!

var r = new THREE.WebGLRenderer({antialias: true});

r.setClearColor("#e5e5e5");

r.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(r.domElement);

window.addEventListener('resize', () => {
    r.setSize(window.innerWidth,window.innerHeight);
    c.aspect = window.innerWidth / window.innerHeight;
    c.updateProjectionMatrix();
});


//var sGeo = new THREE.SphereGeometry(1, 10,10);
var sGeo = new THREE.BoxGeometry(1, 1);
var sMat = new THREE.MeshLambertMaterial({color: 0xFFCC00});
var sObj = new THREE.Mesh(sGeo, sMat);

// sObj.position.set(2,2,-2)
// sObj.position.x etx
// sObj.rotation.set(45, 45, 45)
// sObj.scale.set(1,1,1)

s.add(sObj);

var light = new THREE.PointLight(0xFFFFFF, 1, 500);

light.position.set(10,0,25);
s.add(light)

//var controls = new THREE.OrbitControls( c, r.domElement );


var render = function () {
    requestAnimationFrame(render)
    r.render(s, c);
}

render();