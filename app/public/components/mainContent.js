/* global angular controller */


(function () {
  'use strict';
  angular.module('app', [])
    .component('mainContent', {
      controller: ['$scope', '$http', function ($scope, $http) {
        const vm = this;

        vm.$onInit = function () {
          vm.pipe = '../images/pipe.png';
          vm.apple = '../images/apple.png'
          vm.starry = '../images/starry.png';
          vm.fishes = '../images/fishes.png';
          vm.stampede = '../images/Stampede.png';
          vm.purpleT = '../images/purpleT.png';
          vm.purpleStar = '../images/purpleStar.png';
          vm.cave = '../images/cave/caveZero.png';
          vm.pinkCrystal = '../images/crystal/crystalOne.png';
          vm.blueCrystal = '../images/crystal/crystalTwo.png';
          vm.redCrystal = '../images/crystal/crystalThree.png';
          vm.greenCrystal = '../images/crystal/crystalFour.png';
          vm.yellowCrystal = '../images/crystal/crystalFive.png';
          vm.lightBlueCrystal = '../images/crystal/crystalSix.png';
          vm.purpleCrystal = '../images/crystal/crystalSeven.png';
          vm.pCave = ['../images/cave/caveOne.png', '../images/cave/caveTwo.png', '../images/cave/caveThree.png', '../images/cave/caveFour.png',
            '../images/cave/caveFive.png', '../images/cave/caveSix.png', '../images/cave/caveSeven.png', '../images/cave/caveEight.png',
          '../images/cave/caveNine.gif']
          vm.crystals = ['../images/crystal/crystalOne.png', '../images/crystal/crystalTwo.png', '../images/crystal/crystalThree.png',
            '../images/crystal/crystalFour.png', '../images/crystal/crystalFive.png', '../images/crystal/crystalSix.png',
            '../images/crystal/crystalSeven.png'];
          vm.mixNum = [0, 1, 2, 3, 4, 5, 6]
        }
        vm.starfish = function () {
          vm.pipe = '../images/pipstar.png'
          vm.starry = '../images/nostarry.png'
        }
        vm.randomCave = function () {
          vm.ranNum = Math.floor((Math.random() * 9) + 0);
          vm.cave = vm.pCave[vm.ranNum]
        }
        vm.randomCrystal = function () {
          for(var j, x, i = vm.mixNum.length; i; j = parseInt(Math.random() * i), x = vm.mixNum[--i], vm.mixNum[i] = vm.mixNum[j], vm.mixNum[j] = x);
            vm.pinkCrystal = vm.crystals[vm.mixNum[0]];
            vm.blueCrystal = vm.crystals[vm.mixNum[1]];
            vm.redCrystal = vm.crystals[vm.mixNum[2]];
            vm.greenCrystal =  vm.crystals[vm.mixNum[3]];
            vm.yellowCrystal =  vm.crystals[vm.mixNum[4]];
            vm.lightBlueCrystal = vm.crystals[vm.mixNum[5]];
            vm.purpleCrystal = vm.crystals[vm.mixNum[6]];
        }

        vm.regCrystals = function () {
          vm.pinkCrystal = '../images/crystal/crystalOne.png';
          vm.blueCrystal = '../images/crystal/crystalTwo.png';
          vm.redCrystal = '../images/crystal/crystalThree.png';
          vm.greenCrystal = '../images/crystal/crystalFour.png';
          vm.yellowCrystal = '../images/crystal/crystalFive.png';
          vm.lightBlueCrystal = '../images/crystal/crystalSix.png';
          vm.purpleCrystal = '../images/crystal/crystalSeven.png';
        }
        vm.morestar = function () {
          vm.pipe = '../images/pipe.png'
          vm.starry = '../images/starry.png'
        }
        vm.party = function () {
          vm.starry = '../images/nostarry.png'
          vm.purpleStar = '../images/party.gif'
          vm.fishes = '../images/noFish.png'
        }
        vm.noParty = function () {
          vm.starry = '../images/starry.png'
          vm.purpleStar = '../images/purpleStar.png'
          vm.fishes = '../images/fishes.png';
        }
        vm.tetris = function () {
          /* global $ window */

          vm.flyingGif = ['../images/tetris/greenLOne.gif', '../images/tetris/greenLTwo.gif', '../images/tetris/greenLThree.gif', '../images/tetris/greenLFour.gif', '../images/tetris/greenLFive.gif', '../images/tetris/greenLSix.gif',
          '../images/tetris/purpleZOne.gif', '../images/tetris/purpleZTwo.gif', '../images/tetris/purpleZThree.gif', '../images/tetris/purpleZFour.gif', '../images/tetris/purpleZFive.gif', '../images/tetris/purpleZSix.gif',
          '../images/tetris/blueIOne.gif', '../images/tetris/blueITwo.gif', '../images/tetris/blueIThree.gif', '../images/tetris/blueIFour.gif', '../images/tetris/blueIFive.gif', '../images/tetris/blueISix.gif',
          '../images/tetris/redB.png', '../images/tetris/redB.png', '../images/tetris/redB.png', '../images/tetris/redB.png', '../images/tetris/redB.png', '../images/tetris/redB.png',
          '../images/tetris/purpleTOne.gif', '../images/tetris/purpleTTwo.gif', '../images/tetris/purpleTThree.gif', '../images/tetris/purpleTFour.gif', '../images/tetris/purpleTFive.gif', '../images/tetris/purpleTSix.gif',
          '../images/tetris/redLOne.gif', '../images/tetris/redLTwo.gif', '../images/tetris/redLThree.gif', '../images/tetris/redLFour.gif', '../images/tetris/redLFive.gif', '../images/tetris/redLSix.gif',
          '../images/tetris/yellowTTwo.gif', '../images/tetris/yellowTThree.gif', '../images/tetris/yellowTFour.gif', '../images/tetris/yellowTSix.gif',
          '../images/tetris/yellowIOne.gif', '../images/tetris/yellowITwo.gif', '../images/tetris/yellowIFour.gif', '../images/tetris/yellowIFive.gif']
          vm.width = -300;
          vm.screenWidth = $(window).width();
          vm.marginTop;
          vm.duration;
          vm.imgNum;
          vm.timeBetweenImages;
          vm.howManyImages = 30;
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
          $(function () {
              $('.map').maphilight();
          });
        }
      }],
      templateUrl: './components/mainContent.html',
    });
}());
