const getUsers = (users) => {
    return users.map(item =>{
        return {
            id:item[0],
            name:item[1]
        }
    });
}

export default {
    getUsers
}