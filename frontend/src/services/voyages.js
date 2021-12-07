import http from "../http-common";

class VoyageDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  get(id) {
    return http.get(`/id/${id}`);
  }

  find(query, by = "Pays", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  } 

  createReview(data) {
    return http.post("/newVoy", data);
  }

  updateReview(data) {
    return http.put("/newVoy", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/newVoy?id=${id}`);
  }

  getRaisons(id) {
    return http.get(`/raison`);
  }

}

export default new VoyageDataService();