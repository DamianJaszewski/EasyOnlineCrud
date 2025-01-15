import { apiRequest } from "./apiRequest"

export const userService = {

    login: (user) => apiRequest("/login", {
        method: "POST",
        body: user,
        params : { useCookies: true }
    }),
};