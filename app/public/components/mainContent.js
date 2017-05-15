/* global angular controller */

(function () {
  console.log('main');
  'use strict';
  angular.module('app', [])
    .component('mainContent', {
      controller: ['$scope', '$http', function ($scope, $http) {
        const vm = this;
        vm.$onInit = function () {
          vm.pipe = '../images/pipe.png'
          vm.starry = '../images/starry.png'
          vm.fishes = '../images/fishes.png'
          vm.stampede = '../images/Stampede.png'
        }
        vm.starfish = function () {
          vm.pipe = '../images/pipstar.png'
          vm.starry = '../images/nostarry.png'
        }
        vm.morestar = function () {
          vm.pipe = '../images/pipe.png'
          vm.starry = '../images/starry.png'
        }
        vm.tetris = function () {
          /* global $ window */

          vm.flyingGif = ['../images/tetris/greenLOne.gif', '../images/tetris/greenLTwo.gif', '../images/tetris/greenLThree.gif', '../images/tetris/greenLFour.gif', '../images/tetris/greenLFive.gif', '../images/tetris/greenLSix.gif',
          '../images/tetris/purpleZOne.gif', '../images/tetris/purpleZTwo.gif', '../images/tetris/purpleZThree.gif', '../images/tetris/purpleZFour.gif', '../images/tetris/purpleZFive.gif', '../images/tetris/purpleZSix.gif',
          '../images/tetris/blueLOne.gif', '../images/tetris/blueLTwo.gif', '../images/tetris/blueLThree.gif', '../images/tetris/blueLFour.gif', '../images/tetris/blueLFive.gif', '../images/tetris/blueLSix.gif',
          '../images/tetris/redB.png', '../images/tetris/redB.png', '../images/tetris/redB.png', '../images/tetris/redB.png', '../images/tetris/redB.png', '../images/tetris/redB.png',
          '../images/tetris/purpleTOne.gif', '../images/tetris/purpleTTwo.gif', '../images/tetris/purpleTThree.gif', '../images/tetris/purpleTFour.gif', '../images/tetris/purpleTFive.gif', '../images/tetris/purpleTSix.gif']


          vm.width = -300;
          vm.screenWidth = $(window).width();
          vm.marginTop;
          vm.duration;
          vm.imgNum;
          vm.timeBetweenImages;
          function generateRandomMargin(milliseconds) {
            vm.num = Math.floor(Math.random() * milliseconds);
            return vm.num;
          }
          function generateRandomDuration(millisecStatic, millisecDynamic) {
            vm.num = (Math.floor(Math.random() * millisecDynamic)) + millisecStatic;
            return vm.num;
          }
          function chooseRandomGif(numOfGifs) {
            vm.num = (Math.floor(Math.random() * numOfGifs));
            return vm.num;
          }
          function timeBetween(range, i) {
            vm.num = Math.floor(Math.random() * range) * i*6;
            return vm.num;
          }
          function setImgDivAttributes(imgDiv) {
            imgDiv.attr('src', `images/${vm.flyingGif[vm.imgNum]}`);
            imgDiv.attr('width', '11%');
            imgDiv.attr('height', 'auto');
            imgDiv.attr('left', '-40');
            imgDiv.attr('z-index', '100')
            imgDiv.appendTo('.flyYouFools');
          }
          function defineRandomVariables(i) {
            vm.marginTop = generateRandomMargin(vm.screenWidth);
            vm.duration = generateRandomDuration(10000, 0);
            vm.imgNum = chooseRandomGif(vm.flyingGif.length);
            vm.timeBetweenImages = timeBetween(70, i);
          }
          vm.howManyImages = 30;
          function putImagesIn(i) {
            return () => {
              defineRandomVariables(i);

              vm.imgDiv = $(`<img id=flyingAnimal class=flying${i}>`);
              setImgDivAttributes(vm.imgDiv);
              // (jQuery.fx.interval = 250);
              $(`.flying${i}`).css({
                'margin-left': `${vm.marginTop}px`,
              });
              vm.imgDiv.css('top', (-300)).animate({
                top: vm.screenWidth,
              }, vm.duration, 'linear').fadeOut();
            };
          }

          function loopThroughImages() {
            for (let i = 0; i < vm.howManyImages; i += 1) {
              defineRandomVariables(i);
              setTimeout(putImagesIn(i), vm.timeBetweenImages);
            }
          }

          vm.tetris = function () {
            loopThroughImages();
            $('.flyYouFools').empty();
          };
        }
      }],
      templateUrl: './components/mainContent.html',
    });
}());
