import { refs } from './refs';
import { fetchSearchQueryData } from './pixabay-api';
import { createGalleryMarkup } from './create-markup';

refs.searchForm.addEventListener('submit', handleSearchFormSubmit);
refs.loadMoreBtn.addEventListener('click', handleLoadMoreBtnClick);

let page = 1;
let searchQuery = '';

function handleSearchFormSubmit(event) {
  event.preventDefault();

  searchQuery = event.target.elements.searchQuery.value;

  fetchSearchQueryData(searchQuery, page)
    .then(({ data }) => {
      console.log(data);
      refs.galleryWrap.innerHTML = createGalleryMarkup(data.hits);
      refs.loadMoreBtn.classList.add('on-show');
      page += 1;
      console.log(page);
    })
    .catch(console.error);

  refs.searchForm.reset();
}

function handleLoadMoreBtnClick() {
  fetchSearchQueryData(searchQuery, page)
    .then(({ data }) => {
      console.log(data);
      const galleryMarkUp = createGalleryMarkup(data.hits);
      refs.galleryWrap.insertAdjacentHTML('beforeend', galleryMarkUp);
      page += 1;
      console.log(page);
    })
    .catch(console.error);
}
