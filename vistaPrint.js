// Vista Print and Cimpress coupon round
class Product {
    constructor(name, price, type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
}

class Coupon {
    constructor(type, value, condition) {
        this.type = type;
        this.value = value;
        this.condition = condition;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
        this.coupons = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    addCoupon(coupon) {
        this.coupons.push(coupon);
    }

    applyCoupons() {
        let total = 0;

        // Apply each coupon
        this.coupons.forEach(coupon => {
            switch(coupon.type) {
                case 'N%': // N% off for all items
                    this.products.forEach(product => {
                        product.price *= (1 - (coupon.value / 100));
                    });
                    break;
                case 'P%': // P% off on next item
                    for (let i = 0; i < this.products.length; i++) {
                        if (i + 1 < this.products.length) {
                            this.products[i + 1].price *= (1 - (coupon.value / 100));
                        }
                    }
                    break;
                case 'D%': // D% off on Nth item of Type T
                    let count = 0;
                    this.products.forEach(product => {
                        if (product.type === coupon.condition && count === coupon.value - 1) {
                            product.price *= (1 - (coupon.value / 100));
                        }
                        if (product.type === coupon.condition) {
                            count++;
                        }
                    });
                    break;
            }
        });

        // Calculate total after applying coupons
        this.products.forEach(product => {
            total += product.price;
        });

        return total;
    }
}

// Example usage
const cart = new ShoppingCart();

// Add products to the cart
cart.addProduct(new Product('BusinessCard', 12.99, 'card'));
cart.addProduct(new Product('BusinessCard', 12.99, 'card'));
cart.addProduct(new Product('BusinessCard', 12.99, 'card'));
cart.addProduct(new Product('Pants', 24.99, 'Clothing'));
cart.addProduct(new Product('Pants', 24.99, 'Clothing'));
cart.addProduct(new Product('Shoes', 34.99, 'Footwear'));

// Add coupons to the cart
cart.addCoupon(new Coupon('N%', 25)); // 10% off for all items
cart.addCoupon(new Coupon('P%', 10)); // 5% off on next item
cart.addCoupon(new Coupon('D%', 15, 'Footwear')); // 20% off on 3rd clothing item

// Apply coupons and calculate total
const totalPrice = cart.applyCoupons();
console.log('Total Price after applying coupons:', totalPrice);
