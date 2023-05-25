import axios from "axios";

export function apiToken(key){
   axios.defaults.headers.common['Authorization'] = {key};
}

export function getMovies(set) {
  const promise = axios.get(
    "https://mock-api.driven.com.br/api/v8/cineflex/movies"
  );
  promise.then((res) => {
    set(res.data);
  });
  promise.catch((res) => {
    console.log(res);
  });
}

export function getSessions(idMovie, set) {
  const promise = axios.get(
    `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`
  );
  promise.then((res) => {
    set(res.data);
  });
  promise.catch((res) => {
    console.log(res);
  });
}

export function getSeats(idSession, set) {
  const promise = axios.get(
    `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`
  );
  promise.then((res) => {
    set(res.data);
  });
  promise.catch((res) => {
    console.log(res);
  });
}
