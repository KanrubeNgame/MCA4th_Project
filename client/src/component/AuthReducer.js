export default function AuthReducer(state=[null,0],action){
    switch(action.type){
        case "login":
            localStorage.setItem("email",action.data.email)
            localStorage.setItem("role",action.data.role)
            localStorage.setItem("token",action.data.token)
            return[action.data.email,action.data.role,action.data.token]
        case "logout":
            localStorage.removeItem("email")
            localStorage.removeItem("role")
            localStorage.removeItem("token")
            return[null, 0]
        default:
            return state
    }
}