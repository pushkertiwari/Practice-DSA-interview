class Product {
  constructor(price, type) {
    this.price = price;
    this.type = type;
  }
}

class Coupon {
  constructor() {
    if (this.constructor === Coupon) {
      throw new Error(
        "Abstract class 'Coupon' cannot be instantiated directly."
      );
    }
  }

  apply(products) {
    throw new Error("Method 'apply()' must be implemented.");
  }
}

class CouponAll extends Coupon {
  constructor(percentage) {
    super();
    this.percentage = percentage;
  }

  apply(products) {
    products.forEach((product) => {
      product.price *= 1 - this.percentage / 100;
    });
  }
}

class CouponNext extends Coupon {
  constructor(percentage) {
    super();
    this.percentage = percentage;
  }

  apply(products) {
    for (let i = 0; i < products.length - 1; i++) {
      products[i + 1].price *= 1 - this.percentage / 100;
      console.log(products[i + 1], 'Next');
      break;
    }
  }
}

class CouponNextType extends Coupon {
  constructor(percentage, type) {
    super();
    this.percentage = percentage;
    this.type = type;
  }

  apply(products) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].type === this.type) {
        products[i].price *= 1 - this.percentage / 100;
        console.log(products[i], 'next type');
        break;
      }
    }
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  totalPrice() {
    const products = this.items.filter((item) => item instanceof Product);
    const coupons = this.items.filter((item) => item instanceof Coupon);

    coupons.forEach((coupon) => coupon.apply(products));

    const total = products.reduce((sum, product) => sum + product.price, 0);
    return total.toFixed(2);
  }
}

// Define Product Types
const ProductType = {
  BusinessCard: 'BusinessCard',
  TShirt: 'TShirt',
  BackPack: 'BackPack',
};

// Example usage
const cart = new Cart();

cart.addItem(new Product(12.99, ProductType.BusinessCard));
cart.addItem(new Product(12.99, ProductType.BusinessCard));
cart.addItem(new Product(12.99, ProductType.BusinessCard));
cart.addItem(new CouponAll(25)); // 25% off all products
cart.addItem(new Product(24.99, ProductType.TShirt));
cart.addItem(new CouponNext(10)); // 10% off next item
cart.addItem(new CouponNextType(15, ProductType.BackPack)); // 15% off next BackPack
cart.addItem(new Product(24.99, ProductType.TShirt));
cart.addItem(new Product(34.99, ProductType.BackPack));

console.log('Total Price: $', cart.totalPrice());
