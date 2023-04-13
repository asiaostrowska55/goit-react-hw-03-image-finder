import axios from 'axios';

const API_KEY = '33257268-27ad9fcecc17d6e2546f4b9dc';
let page = 1;
let per_page = 12;

export const fetchGalleryImage = async search => {
  const response = await axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: search,
        image_type: 'photo',
        orientation: 'horizonatal',
        safesearch: true,
        per_page,
        page,
      },
    })
    .then(response => {
      const data = response.data;
      return data;
    })
    .catch(error => {
      console.log('error!', error);
    });
  return response;
};

// let totalPages = Math.ceil(response.data.totalHits / per_page);

//       if (page > 1) {
//         const { height: cardHeight } =
//           gallery.firstElementChild.getBoundingClientRect();

//         window.scrollBy({
//           top: cardHeight * 2,
//           behavior: 'smooth',
//         });
//         console.log('test');
//       }

//       if (totalPages >= page) {
//         loadMoreBtn.classList.replace('btn-hidden', 'btn-visible');
//         loadMoreBtn.addEventListener('click', e => {
//           page += 1;
//           fetchGalleryImage(search);
//         });
//       } else if (page > totalPages && page !== 1) {
//         Notify.info("You've reached the end of search results");
//         loadMoreBtn.disabled = true;
//       }
