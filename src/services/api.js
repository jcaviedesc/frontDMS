import apisauce from 'apisauce'
///process.env.REACT_APP_API_URL
const token = localStorage.getItem('user');
const create = (baseURL = 'http://localhost:5000/api') => {
  // timeout: 2000
  const api = apisauce.create({
    baseURL,
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
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

  return {
    authentication,
    getAreas,
    getProfiles,
    registerUser,
    getAllAffairs
  };
};

export default {
  create
}