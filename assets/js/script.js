// Github Link for the code : https://github.com/avezqureshi14/brickfolio-mohammad-avez  
// Deployed Link 🔴 : https://brickfolio-mohammad-avez.netlify.app/  

document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // Number of slides per view
        spaceBetween: 20, // Space between slides (in pixels)
        loop: true, // Enable loop mode
        pagination: {
            el: ".swiper-pagination", // Pagination container
            clickable: true, // Enable clickable pagination bullets
        },
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const propertyTypeSelect = document.getElementById('property-type');
    const commercialOptionsContainer = document.getElementById('commercial-options');

    // Function to show or hide commercial options based on selected value
    function toggleCommercialOptions() {
        const selectedValue = propertyTypeSelect.value;
        if (selectedValue === 'Commercial') {
            commercialOptionsContainer.style.display = 'block';
        } else {
            commercialOptionsContainer.style.display = 'none';
        }
    }

    // Initial call to toggle options based on default selection
    toggleCommercialOptions();

    // Event listener for dropdown change
    propertyTypeSelect.addEventListener('change', toggleCommercialOptions);
});
// Hide loader once page is fully loaded
const loaderContainer = document.querySelector('.loader-container');
loaderContainer.style.display = 'none';

document.addEventListener('DOMContentLoaded', () => {
    const counts = document.querySelectorAll('.count');
    const speed = 97; // Adjust the speed for incrementing the count

    counts.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const inc = target / speed;

        function updateCount() {
            count += inc;
            if (count < target) {
                counter.innerText = Math.floor(count);
                setTimeout(updateCount, 100); // Adjust the timeout interval
            } else {
                counter.innerText = target;
            }
        }

        updateCount();
    });
});
