// import 'fslightbox';
// fsLightboxInstances['first-lightbox'].open(0);
// fsLightboxInstances['second-lightbox'].props.onOpen = () => console.log('Lightbox open!');

import Swal from 'sweetalert2';
import {suma,saludo} from './operaciones.js';
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Denisse lo ha logrado :D',
    showConfirmButton: false,
    timer: 1500
  })
document.write(`<h3>${saludo}.<br/> La suma es ${suma(5,7)}</h3>`);

// import _ from 'lodash';
// function component() {
//     const element = document.createElement('div');
//      // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
//   }
//   document.body.appendChild(component());