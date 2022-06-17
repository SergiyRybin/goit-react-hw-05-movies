import PropTypes from 'prop-types';

function fetchDataImage() {
 return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=946fd192c485f6dbf39faf2135c337c0
    `
  )
    .then(r => {
      if (r.ok) {
        return r.json();
      }
      return Promise.reject(new Error(`Error: ${r.status} ${r.statusText}`));
    })
    
}

fetchDataImage.propTypes = {
  name: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default fetchDataImage;
