import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImagesByQuery } from '../js/pixabay-api';
import { 
    createGallery,
    clearGallery,
    showLoader,
    hideLoader, 
    gallery,
    showLoadMoreButton,
    hideLoadMoreButton
} from '../js/render-functions.js';

const iconPath = new URL('./img/icon-error.svg', import.meta.url).href;

const form = document.querySelector('.form');
const loadMore = document.querySelector('.js-load-more');

loadMore.addEventListener("click", onLoadMore);

let page = 1;

console.dir(form);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    enableKeyboard: true,
});

hideLoader();

form.addEventListener('submit', handleSearch);

function handleSearch (event) {
    event.preventDefault();

    const query = form.elements['search-text'].value.trim();

    if(!query) return;
    
    clearGallery();
    showLoader();

    getImagesByQuery(query, page = 1)
        .then(({ hits }) => {
            if(hits.length === 0) {
                iziToast.info({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    backgroundColor:' #ef4040',
                    maxWidth: '434',
                    messageColor:' #fafafb',
                    iconColor: ' #fafafb',
                    iconUrl: iconPath,
                });
            return;

            }
            gallery.innerHTML = createGallery(hits);
            lightbox.refresh();

            if(data.page < data.total_pages) {
                loadMore.classList.replace("load-more-hidden", "load-more");
            }
        })
        .catch(() => {
            iziToast.info({
                message: 'Something went wrong!',
                backgroundColor:' #ef4040',
                maxWidth: '434',
                messageColor:' #fafafb',
                iconColor: ' #fafafb',
                iconUrl: iconPath,
            });
        })
        .finally(() => {
            hideLoader();
        });
        form.reset();
};

async function onLoadMore() {
    page++;
    loadMore.disabled = true;

    try {
        const data = await serviceMovie(page);

        container.insertAdjacentHTML("beforeend", createMarkup(data.results));
        loadMore.disabled = false;

        if(data.page >= data.total_pages) {
            loadMore.classList.replace("load-more", "load-more-hidden");
        }
        return `We're sorry, but you've reached the end of search results.`;

    } catch(error) {
        alert(error.message);
    }
}