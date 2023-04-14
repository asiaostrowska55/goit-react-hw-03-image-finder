import axios from 'axios';

const API_KEY = '33257268-27ad9fcecc17d6e2546f4b9dc';
export const PER_PAGE = 12;
let page = 1;

export const fetchGalleryImage = async search => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: search,
      image_type: 'photo',
      orientation: 'horizonatal',
      safesearch: true,
      per_pag: PER_PAGE,
      page,
    },
  });
  return response.data;
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
