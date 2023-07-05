const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const gallery = document.querySelector('.gallery');

// const markup = images.reduce(
//   (acc, { url, alt }) =>
//     acc + `<li><img src=${url} alt="${alt}" width="300"/></li>`,
//   ''
// );

// gallery.insertAdjacentHTML('beforeend', markup);

const galleryEl = document.querySelector('.gallery-js');
const makeGalleryInList = (images) => {
  const { url, alt } = images;
  return `
    <li class='item_gallery'>
      <img class='img_gallery' src=${url} alt=${alt}  width='400'>
    </li>
    `;
};
const resultGallery = images.map(makeGalleryInList).join('');
galleryEl.insertAdjacentHTML('beforeend', resultGallery);
