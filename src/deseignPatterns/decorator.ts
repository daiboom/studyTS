function Sale(price) {
  this.price = price;
  this.decorators_list = [];
}

Sale.prototype.decorate = function (decorator) {
  this.decorators_list.push(decorator);
};

Sale.prototype.getPrice = function () {
  let price = this.price;
  let i = 0;
  let max = this.decorators_list.length;
  let name = null;

  for (i = 0; i < max; i++) {
    name = this.decorators_list[i];
    price = Sale.decorators[name].getPrice(price);
  }

  return price;
};

Sale.decorators = {};

Sale.decorators.fedtax = {
  getPrice: function (price) {
    return price + (price * 5) / 100;
  },
};

Sale.decorators.quebec = {
  getPrice: function (price) {
    return price + (price * 7.5) / 100;
  },
};

Sale.decorators.money = {
  getPrice: function (price) {
    return price.toFixed(2);
  },
};

Sale.decorators.cdn = {
  getPrice: function (price) {
    return "$" + price;
  },
};

function hello() {
  return {
    getPrice: function (price) {
      return "world" + price;
    },
  };
}

const world = {
  getPrice: function (price) {
    return "hello" + price;
  },
};

Sale.decorators = {
  ...Sale.decorators,
  hello: hello(),
  world,
};

console.log(Sale.decorators);

let sale = new Sale(100);
sale.decorate("fedtax");
sale.decorate("quebec");
sale.decorate("money");
sale.decorate("cdn");
sale.decorate("hello");
sale.decorate("world");

console.log(sale.getPrice());
console.log(sale);
