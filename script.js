
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       // markers:true
       start:"top -25%",
       end:"top -70%",
       scrub:2
    }
})
function loadMore() {
    // Get the image gallery div
    const gallery = document.querySelector('.image-gallery');

    // Check if images are already loaded
    if (gallery.childElementCount === 0) {
        // Array of image URLs (you can replace these with your actual image URLs)
        const imageUrls = [
            'teachers_day_img1.jpg',
            'teachers_day_img2.jpg',
            'teachers_day_img3.jpg',
            'teachers_day_img4.jpg',
            'teachers_day_img5.jpg',
            'teachers_day_img6.jpg'
        ];

        // Create and append images to the gallery
        imageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Image';
            gallery.appendChild(img);
        });
    }

    // Make the gallery visible
    gallery.style.display = 'flex';
}

function loadMore1() {
    // Get the image gallery div
    const gallery = document.querySelector('.image-gallery1');

    // Check if images are already loaded
    if (gallery.childElementCount === 0) {
        // Array of image URLs (you can replace these with your actual image URLs)
        const imageUrls = [
            'D_1.jpg',
            'D_2.jpg',
            'D_3.jpg',
            'D_4.jpg',
            'D_5.jpg',
            'D_6.jpg'
        ];

        // Create and append images to the gallery
        imageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Image';
            gallery.appendChild(img);
        });
    }

    // Make the gallery visible
    gallery.style.display = 'flex';
}
function loadMore2() {
    // Get the image gallery div
    const gallery = document.querySelector('.image-gallery2');

    // Check if images are already loaded
    if (gallery.childElementCount === 0) {
        // Array of image URLs (you can replace these with your actual image URLs)
        const imageUrls = [
            'TP_1.jpg',
            'TP_2.jpg',
            'TP_3.jpg',
            'TP_4.jpg',
            'TP_1.jpg',
            'TP_3.jpg'
        ];

        // Create and append images to the gallery
        imageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Image';
            gallery.appendChild(img);
        });
    }

    // Make the gallery visible
    gallery.style.display = 'flex';
}

/*------------------------------  resources page scripting ----------------------------------*/ 
function toggleAccordion(element) {
    // Get the accordion content
    var content = element.nextElementSibling;

    // Toggle active class on the header
    element.classList.toggle('active');

    // Toggle the display of the content
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

/*------------------------------------first-year resources page scripting----------------*/ 
function toggleDropdown(button) {
    const content = button.nextElementSibling;
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}

