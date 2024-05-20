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

  apply(products, startIndex = 0) {
    for (let i = startIndex; i < products.length; i++) {
      if (!products[i].discounted) {
        console.log(products[i])
        // Check if the product is already discounted
        products[i].price *= 1 - this.percentage / 100;
        products[i].discounted = true; // Mark as discounted
        return i + 1; // Return next start index
      }
    }
    return products.length; // Return end index if no product found
  }
}

class CouponNextType extends Coupon {
  constructor(percentage, type, nth) {
    super();
    this.percentage = percentage;
    this.type = type;
    this.nth = nth;
  }

  apply(products) {
    let count = 0;
    for (let i = 0; i < products.length; i++) {
      if (products[i].type === this.type && !products[i].discounted) {
        // Check type and if not discounted
        count++;
        if (count === this.nth) {
          products[i].price *= 1 - this.percentage / 100;
          products[i].discounted = true; // Mark as discounted
          break;
        }
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

    // Initialize discounted flag for products
    products.forEach((product) => (product.discounted = false));

    let nextStartIndex = 0;
    coupons.forEach((coupon) => {
      if (coupon instanceof CouponNext) {
        nextStartIndex = coupon.apply(products, nextStartIndex);
      } else {
        coupon.apply(products);
      }
    });

    const total = products.reduce((sum, product) => sum + product.price, 0);
    return total.toFixed(2);
  }
}

// Define Product Types
const ProductType = {
  BusinessCard: "BusinessCard",
  TShirt: "TShirt",
  BackPack: "BackPack",
};

// Example usage
const cart = new Cart();

cart.addItem(new Product(12.99, ProductType.BusinessCard));
cart.addItem(new Product(12.99, ProductType.BusinessCard));
cart.addItem(new Product(12.99, ProductType.BusinessCard));
cart.addItem(new CouponAll(25)); // 25% off all products
cart.addItem(new Product(24.99, ProductType.TShirt));
cart.addItem(new CouponNext(10)); // 10% off next item
cart.addItem(new CouponNext(10)); // 10% off next item
cart.addItem(new CouponNext(10)); // 10% off next item
cart.addItem(new CouponNextType(15, ProductType.BackPack,1)); // 15% off next BackPack
cart.addItem(new CouponNext(15)); // 5% off next item
cart.addItem(new Product(24.99, ProductType.TShirt));
cart.addItem(new Product(34.99, ProductType.BackPack));

console.log("Total Price: $", cart.totalPrice());
