import {APIClient} from './client';

export const makeLoginRequest = data => {
  return APIClient()
    .post(`endpoint`, data)
    .then(res => res.data);
};
