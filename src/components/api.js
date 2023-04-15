import axios from 'axios';

const API_KEY = '33257268-27ad9fcecc17d6e2546f4b9dc';
export const PER_PAGE = 12;
let page = 1;

export const fetchGalleryImage = async search => {
  const response = await axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: search,
        image_type: 'photo',
        orientation: 'horizonatal',
        safesearch: true,
        per_pag: PER_PAGE,
        page,
      },
    })
    .then(response => {
      const { totalHits, hits } = response.data;
      const photos = { totalHits, hits };
      return photos;
    });
  return response;
};
// export const fetchGalleryImage = async search => {
//   const response = await axios.get('https://pixabay.com/api/', {
//     params: {
//       key: API_KEY,
//       q: search,
//       image_type: 'photo',
//       orientation: 'horizonatal',
//       safesearch: true,
//       per_pag: PER_PAGE,
//       page,
//     },
//   });
//   return response.data;
// };
