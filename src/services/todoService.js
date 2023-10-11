import http from "../http-common";

const getAll = () => {
  return http.get("/todos");
};

const get = (id) => {
  return http.get(`/todos/${id}`);
};

const create = (data) => {
  return http.post("/todos", data);
};

const update = (id, data) => {
  return http.put(`/todos/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/todos/${id}`);
};

const findByText = (text) => {
  return http.get(`/todos?text=${text}`);
};

const todosHTTP = {
  getAll,
  get,
  create,
  update,
  remove,
  findByText,
};

export default todosHTTP;

// {
//   "id": "bh7vjpVadssdaggqei631Tc",
//   "todoName": "By default, Tailwind includes grid-column utilities",
//   "text": "Transition code base to ES6",
//   "startDate": "Fri Sep 29 2023 04:03:39 GMT+0600 (Bangladesh Standard Time)",
//   "priority": "Priority 01",
//   "complated": false,
//   "isInExpandState": false,
//   "Tags": ["ES6", "Web Development"],
//   "subtasks": []
// },
