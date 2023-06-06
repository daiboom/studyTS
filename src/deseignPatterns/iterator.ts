let element;

const agg = (function () {
  let index = 0;
  let data = [1, 2, 3, 4, 5];
  let length = data.length;

  return {
    next: function () {
      let element;
      if (!this.hasNext()) {
        return null;
      }

      element = data[index];
      index = index + 2;

      return element;
    },
    hasNext: () => {
      return index < length;
    },

    rewind: () => {
      index = 0;
    },
    current: () => {
      return data[index];
    },
  };
})();

while (agg.hasNext()) {
  console.log(agg.next());
}

agg.rewind();
console.log(agg.current());
