type InputValueType = string | number | boolean;
function formatValue(input: InputValueType): InputValueType {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    return !input;
  } else {
    return input;
  }
}
type LengthType = string | any[];
function getLength(value: LengthType): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};
function filterByRating(items: Item[]): Item[] {
  return items.filter(
    (item) => item.rating >= 0 && item.rating >= 4 && item.rating <= 5
  );
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] => {
  let uniqueArr: T[] = [];
  let arr: T[] = [...arr1, ...arr2];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let isExist = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === arr[j]) {
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      uniqueArr[uniqueArr.length] = arr[i];
    }
  }
  return uniqueArr;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
function calculateTotalPrice(products: Product[]): number {
  const total = products.reduce((totalPrice, product) => {
    const productsTotalPrice = product.price * product.quantity;
    const productsDiscount = product.discount
      ? (product.discount * productsTotalPrice) / 100
      : 0;
    return totalPrice + (productsTotalPrice - productsDiscount);
  }, 0);
  return total;
}
