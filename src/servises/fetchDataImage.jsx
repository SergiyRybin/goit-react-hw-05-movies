export function fetchDataImage() {
  return fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=946fd192c485f6dbf39faf2135c337c0
    `
  )
    .then(r => {
      if (r.ok) {
        return r.json();
      }
      return Promise.reject(new Error(`Error: ${r.status} ${r.statusText}`));
    })
    .then(data => console.log(data));
}
