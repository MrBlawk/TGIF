import { lerp } from './node_modules/three/src/math/MathUtils.js'
import * as THREE from './node_modules/three/build/three.module.js';



function init(){
    let scene, camera, aLight, sLight, renderer, planet, particles;

    const canvasPlanet = document.querySelector('#cPlanet');

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000);
    camera.position.z = 2;
    aLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(aLight);
    sLight = new THREE.SpotLight(0xffffff, 1);
    sLight.position.set(1,3,3);
    scene.add(sLight);


    renderer = new THREE.WebGLRenderer({canvasPlanet, antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const texture = new THREE.TextureLoader().load('textures/earth.jfif');




    planet = new THREE.Mesh(
    new THREE.SphereGeometry(),
    new THREE.MeshPhongMaterial({map: texture})

    );

    planet.castShadow = true;
    planet.receiveShadow = true;
    planet.position.set(0,0,0);
    scene.add(planet);

    

    for(let i = 0; i < 500; i++)
    {
        setTimeout(() => {
            planet.position.lerp(new THREE.Vector3(0,0,0.4), 0.005);
        }, 4000);


        setTimeout(() => {
            planet.position.lerp(new THREE.Vector3(0,0,-0,1), 0.05)
        }, 4000);
    }



            
    function render(time){
        let zoom = 0.005;
        let edge = true;

        time *= 0.1;
        planet.rotation.x += 0.0001;
        planet.rotation.y += 0.0005;
        //planet.rotation.z += 0.001;

        renderer.render(scene,camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render)
}

init();