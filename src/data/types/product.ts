import type data from '../../app/api/products/data.json'

export type Product = (typeof data.products)[0]
