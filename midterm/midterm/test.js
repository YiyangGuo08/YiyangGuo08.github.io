// 随机生成内容的数组
var originalContents = [
    "Raindrops tapped gently on the windowpane, a soothing lullaby.",
    "Crystal-clear water shimmered under the noonday sun.",
    "Waves danced gracefully along the shoreline at sunset.",
    "The sound of water lapping against the boat lulled him into a peaceful slumber.",
    "Steam rose from the hot springs, mingling with the cool morning air.",
    "Dewdrops glistened on the blades of grass as the morning sun rose.",

    "Tea was more than just a drink; it was a comforting ritual, a moment to pause and reflect.",
    "Tiny bubbles formed at the surface of the tea as it reached the perfect temperature.",
    "Tea provided a moment of solace in a chaotic world, a gentle reminder to slow down and enjoy the simple pleasures.",
    "The tea room exuded an air of elegance, with plush furnishings and delicate china adorning every surface.",
    
    "On a hot summer day, nothing beats a glass of ice-cold lemonade.",
    "The kids laughed and played in the backyard, their hands sticky from sipping lemonade.",
    "The pitcher of lemonade sparkled in the sunlight, beckoning all to quench their thirst.",
    "Lemonade, with its bright yellow hue, seemed to embody the essence of sunshine.",
    "The lemonade was served in mason jars, adding a rustic charm to the outdoor gathering.",

    "The summer sun beat down, warming the earth with its golden rays.",
    "Summer evenings were best spent watching the sunset paint the sky in hues of orange and pink.",
    "The sound of cicadas filled the air, signaling the height of summer.",
    "Fireflies danced in the twilight, their luminescence adding magic to summer nights.",
    "A gentle breeze rustled the leaves, offering respite from the heat of the summer night.",
    "The moon cast a soft, silver light over the landscape on that tranquil summer night.",
    "As the city slept, the magic of the summer night enveloped everything in its embrace.",
    "Summer rains bring a welcome relief from the heat and nourish thirsty gardens.",
    "Lazy afternoons are spent napping in hammocks or reading under shady trees during the summer heat.",

    "Lemon-lime soda quenches thirst and refreshes during the scorching summer months.",
    "Enjoying a soda float with creamy vanilla ice cream is a classic summer treat.",
    "Poolside lounging and sipping soda go hand in hand during the summer season.",
    "There's nothing like the sound of soda fizzing over ice cubes on a summer day.",
    "The tangy taste of citrus soda is reminiscent of summer citrus fruits.",
    "The children giggled with delight as they watched the soda fizzing and bubbling when poured into their cups.",
    "Enjoying a citrus soda while lounging by the pool is the epitome of summertime relaxation.",
    "The vibrant flavors of citrus soda evoke memories of lazy summer days spent beneath the sun.",
    "The effervescence of citrus soda tickles the taste buds, leaving a lingering sense of summer bliss.",
];

var randomContents = [];

// window.onload = function() {
//     // 如果随机内容数组为空，则重新生成一个包含原始内容的新数组
//     if (randomContents.length === 0) {
//         randomContents = originalContents.slice(); // 复制原始内容数组
//     }

//     var randomIndex = Math.floor(Math.random() * randomContents.length);
//     document.getElementById("text1").innerText = randomContents[randomIndex];
//     randomContents.splice(randomIndex, 1); // 从数组中移除已经使用的内容
// };

var originalImages = [
    "summer/img1.gif",
    "summer/img2.gif",
    "summer/img3.gif",
    "summer/img4.gif",
    "summer/img5.gif",
    "summer/img6.gif",
    "summer/img7.gif",
    "summer/img8.gif",
    "summer/img9.gif",
    "summer/img10.gif",
];

var randomImages = [];

window.onload = function() {
     // 如果随机内容数组为空，则重新生成一个包含原始内容的新数组
     if (randomContents.length === 0) {
        randomContents = originalContents.slice(); // 复制原始内容数组
    }

    var randomIndex = Math.floor(Math.random() * randomContents.length);
    document.getElementById("text1").innerText = randomContents[randomIndex];
    randomContents.splice(randomIndex, 1); // 从数组中移除已经使用的内容


    // 如果随机图片数组为空，则重新生成一个包含原始图片路径的新数组
    if (randomImages.length === 0) {
        randomImages = originalImages.slice(); // 复制原始图片路径数组
    }

    var randomIndex = Math.floor(Math.random() * randomImages.length);
    var imgElement = document.getElementById("randomImage");
    imgElement.src = randomImages[randomIndex];
    imgElement.alt = "Random Image";
    randomImages.splice(randomIndex, 1); // 从数组中移除已经使用的图片路径
};