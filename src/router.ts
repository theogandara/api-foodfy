import { Router } from 'express';

import { listCategories } from './useCases/categories/listCategories';
import { listProducts } from './useCases/products/listProducts';
import { listOrders } from './useCases/orders/listOrders';
import { createCategory } from './useCases/categories/createCategory';
import { createProducts } from './useCases/products/createProducts';
import { createOrders } from './useCases/orders/createOrders';
import { getProductsByCategory } from './useCases/products/getProductsByCategory';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { deleteCategory } from './useCases/categories/deleteCategory';
import { cancelOrder } from './useCases/orders/cancelOrder';

export const router = Router();

// ----- CATEGORY
router.get('/categories', listCategories);
router.post('/categories', createCategory);
//not ok
router.delete('/categories/:categoryId', deleteCategory);

// ----- PRODUCTS
router.get('/products', listProducts);
//not ok
router.post('/products', createProducts);
router.get('/products/:orderId/products', getProductsByCategory);

// ----- ORDERS
router.get('/orders', listOrders);
//not ok
router.post('/orders', createOrders);
router.patch('/orders/:orderId', changeOrderStatus);
router.delete('/orders/:orderId', cancelOrder);
