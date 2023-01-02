// 추후 링크 수정 필요
const BASE_URL =
  'http://pre-project-32-front.s3-website.ap-northeast-2.amazonaws.com/';
const QUESTION_URL =
  'http://pre-project-32-front.s3-website.ap-northeast-2.amazonaws.com/question/';

export const fetchCreate = (url, data) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.REACT_APP_AUTHORIZATION,
      Refresh: process.env.REACT_APP_REFRESH,
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      window.location.href = BASE_URL;
    })
    .catch((error) => {
      console.error('Error', error);
    });
};

export const fetchDelete = (url, id) => {
  fetch(`${url}${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: process.env.REACT_APP_AUTHORIZATION,
      Refresh: process.env.REACT_APP_REFRESH,
    },
  })
    .then(() => {
      window.location.href = BASE_URL;
    })
    .catch((error) => {
      console.error('Error', error);
    });
};

export const fetchPatch = (url, id, data) => {
  fetch(`${url}${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: process.env.REACT_APP_AUTHORIZATION,
      Refresh: process.env.REACT_APP_REFRESH,
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      window.location.href = `${QUESTION_URL}${id}`;
    })
    .catch((error) => {
      console.error('Error', error);
    });
};
