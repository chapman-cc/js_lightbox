$(document).ready(function() {
    // ========================================
    // ---------- Variables ----------

    const $imgCaptions = [{
            imgFile: '01',
            imgAlt: 'Hay Bales',
            imgCaption: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
        },

        {
            imgFile: '02',
            imgAlt: 'Lake',
            imgCaption: 'The lake was so calm today.We had a great view of the snow on the mountains from here.'
        },

        {
            imgFile: '03',
            imgAlt: 'Canyon',
            imgCaption: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.'
        },

        {
            imgFile: '04',
            imgAlt: 'Iceberg',
            imgCaption: 'It was amazing to see an iceberg up close, it was so cold but didn’ t snow today.'
        },

        {
            imgFile: '05',
            imgAlt: 'Desert',
            imgCaption: 'The red cliffs were beautiful.It was really hot in the desert but we did a lot of walking through the canyons.'
        },

        {
            imgFile: '06',
            imgAlt: 'Fall',
            imgCaption: 'Fall is coming, I love when the leaves on the trees start to change color.'
        },

        {
            imgFile: '07',
            imgAlt: 'Plantation',
            imgCaption: 'I drove past this plantation yesterday, everything is so green!'
        },

        {
            imgFile: '08',
            imgAlt: 'Dunes',
            imgCaption: 'My summer vacation to the Oregon Coast.I love the sandy dunes!'
        },

        {
            imgFile: '09',
            imgAlt: 'Countryside Lane',
            imgCaption: 'We enjoyed a quiet stroll down this countryside lane.'
        },

        {
            imgFile: '10',
            imgAlt: 'Sunset',
            imgCaption: 'Sunset at the coast!The sky turned a lovely shade of orange.'
        },

        {
            imgFile: '11',
            imgAlt: 'Cave',
            imgCaption: 'I did a tour of a cave today and the view of the landscape below was breathtaking.'
        },

        {
            imgFile: '12',
            imgAlt: 'Bluebells',
            imgCaption: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in .'
        }
    ];

    // ========================================
    // ---------- Codes ----------

    //create each loop for making img tag
    $.each($imgCaptions, function(index, value) {
        // create <a> tag, add href path
        let $a = $("<a>");
        $a.attr("href", `photos/${value.imgFile}.jpg`)
        //Create <img> tag, add source path, add alt value
        let $img = $("<img>");
        $img.attr("src", `photos/thumbnails/${value.imgFile}.jpg`)
        $img.attr("alt", value.imgAlt);
        $img.attr("class", "img__photo");
        // append <img> to <a>, then append to div.img
        $a.append($img);
        $(".img").append($a);
    })







    // ========================================
});
