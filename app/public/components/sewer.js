// /* global angular controller */
//
// (function () {
//   console.log('main');
//   'use strict';
//   angular.module('app', [])
//     .component('mainContent', {
//       controller: ['$scope', '$http', function ($scope, $http) {
//         const vm = this;
//         vm.$onInit = function () {
//           vm.pipe = '../images/pipe.png'
//           vm.starry = '../images/starry.png'
//           vm.fishes = '../images/fishes.png'
//           vm.stampede = '../images/Stampede.png'
//         }
//         vm.starfish = function () {
//           vm.pipe = '../images/pipstar.png'
//           vm.starry = '../images/nostarry.png'
//         }
//         vm.morestar = function () {
//           vm.pipe = '../images/pipe.png'
//           vm.starry = '../images/starry.png'
//         }
//         vm.tetris = function () {
//           /* global $ window */
//
//           vm.flyingGif = ['../images/tetris/redblock.png'];
//
//           vm.width = 500;
//           vm.screenWidth = $(window).width();
//           vm.marginTop;
//           vm.duration;
//           vm.imgNum;
//           vm.timeBetweenImages;
//           function generateRandomMargin(milliseconds) {
//             vm.num = Math.floor(Math.random() * milliseconds);
//             return vm.num;
//           }
//           function generateRandomDuration(millisecStatic, millisecDynamic) {
//             vm.num = (Math.floor(Math.random() * millisecDynamic)) + millisecStatic;
//             return vm.num;
//           }
//           function chooseRandomGif(numOfGifs) {
//             vm.num = (Math.floor(Math.random() * numOfGifs));
//             return vm.num;
//           }
//           function timeBetween(range, i) {
//             vm.num = Math.floor(Math.random() * range) * i;
//             return vm.num;
//           }
//           function setImgDivAttributes(imgDiv) {
//             imgDiv.attr('src', `images/${vm.flyingGif[vm.imgNum]}`);
//             imgDiv.attr('width', '90px');
//             imgDiv.attr('height', 'auto');
//             imgDiv.attr('left', '-100px');
//             imgDiv.appendTo('.flyYouFools');
//           }
//           function defineRandomVariables(i) {
//             vm.marginTop = generateRandomMargin(580);
//             vm.duration = generateRandomDuration(10000, 10000);
//             vm.imgNum = chooseRandomGif(vm.flyingGif.length);
//             vm.timeBetweenImages = timeBetween(70, i);
//           }
//           vm.howManyImages = 75;
//           function putImagesIn(i) {
//             return () => {
//               defineRandomVariables(i);
//
//               vm.imgDiv = $(`<img id=flyingAnimal class=flying${i}>`);
//               setImgDivAttributes(vm.imgDiv);
//
//               $(`.flying${i}`).css({
//                 'margin-top': `${vm.marginTop}px`,
//               });
//               vm.imgDiv.css('left', (-vm.width)).animate({
//                 left: vm.screenWidth + 3000,
//               }, vm.duration);
//             };
//           }
//
//           function loopThroughImages() {
//             for (let i = 0; i < vm.howManyImages; i += 1) {
//               defineRandomVariables(i);
//               setTimeout(putImagesIn(i), vm.timeBetweenImages);
//             }
//           }
//
//           vm.tetris = function () {
//             loopThroughImages();
//             $('.flyYouFools').empty();
//           };
//         }
//       }],
//       templateUrl: './components/mainContent.html',
//     });
// }());
