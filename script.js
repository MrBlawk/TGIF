import * as THREE from '/node_modules/three/build/three.module.js';



        function init(){
            let scene, camera, aLight, renderer, cube;

            const canvasCube = document.querySelector('#cMain');

            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000);
            camera.position.z = 1.5;
            aLight = new THREE.AmbientLight(0xffffff, 1);
            scene.add(aLight);

            renderer = new THREE.WebGLRenderer({canvasCube, antialias: true});
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);



            function makeCubes(){
                cube = new THREE.Mesh(
                    new THREE.BoxGeometry(1,1,1,1),
                    new THREE.MeshStandardMaterial(
                        {color: 0x484848, wireframe: true}
                    ));
                    cube.castShadow = true;
                    cube.receiveShadow = true;
                    cube.position.set(0,0,0);
                    scene.add(cube);
                    
            }

            makeCubes();
            
            function render(time){
                time *= 0.0001;
                cube.rotation.x += 0.0001;
                cube.rotation.y += 0.005;
                cube.rotation.z += 0.001;

                renderer.render(scene,camera);

                requestAnimationFrame(render);
            }
            requestAnimationFrame(render)
        }

        init();