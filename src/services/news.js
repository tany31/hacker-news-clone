import client from '@/http/client';

export default {
  fetchList(type) {
    return client.get(`${type}.json/`);
  },

  fetchItems(ids) {
    return Promise.all(ids.map(id => this.fetchItem(id)));
  },

  fetchItem(id) {
    return client.get(`/item/${id}.json`);
  },

  fetchUser(username) {
    return client.get(`/user/${username}.json`);
  },
};
