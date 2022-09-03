import { environment } from "src/environments/environment"

export const baseUrl = environment.production ? 'https://localhost:4200/' : 'http://localhost:4200'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'
export const wishlistUrl = baseUrl + '/wishlist'
