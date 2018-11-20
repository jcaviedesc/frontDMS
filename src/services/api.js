import apisauce from 'apisauce'
///process.env.REACT_APP_API_URL
const token = localStorage.getItem('user');
const create = (baseURL = 'http://localhost:5000/api') => {
  // timeout: 2000
  const api = apisauce.create({
    baseURL,
    timeout: 15000,
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": '*',
      Accept: 'application/json'
    }
  });
  
  if (process.env.NODE_ENV === 'development' && console.tron) {
    api.addMonitor(console.tron.apisauce)
  }
  const setToken = authorization => (authorization ? { headers: { authorization: `Bearer ${authorization}` } } : {})

  const authentication = (email, password) =>
    api.post('/auth/signin', { usernameOrEmail: email, password })

  const getAreas = authorization => 
    api.get('/area',{},setToken(authorization))
  
  const getProfiles = authorization => 
    api.get('/profile',{},setToken(authorization))
  
  const registerUser = (user) => 
    api.post('/auth/signup',user,setToken(token))

  const getAllAffairs = () => api.get('/affair',{},setToken(token))

  const getUsers = () => api.get('/users',{},setToken(token))
  // title="camilo"&dateDoc="2018-11-08"&origin="casamonte"
  // &userTarget="4d28f159-9c78-4147-b9a3-68930fdd289e"&affair=4&userRecieve="2c676262-4521-45e9-a79b-9c3384b4d05b"
  // &comments="un comment"
 
  const createRadication= (info, file) => 
  api.post(`/document?title="${info.title}"&dateDoc="${info.dateDoc}"&origin="${info.origin}"
  &userTarget="${info.userTarget}"&affair="${info.affair}"&comments="${info.comments}"&userRecieve="${info.userRecieve}"`,file,setToken(token))

  return {
    authentication,
    getAreas,
    getProfiles,
    registerUser,
    getAllAffairs,
    getUsers,
    createRadication
  };
};

export default {
  create
}