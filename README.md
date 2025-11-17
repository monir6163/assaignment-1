# Interview Questions - Blog Task

## 1. What are some differences between interfaces and types in TypeScript?

- **Interface** object shapes define করার জন্য ব্যবহার করা হয়|

  ```ts
  interface Person {
    name: string;
    age: number;
    adress?: string;
  }
  ```

- **Type Alias** দিয়ে object shapes define করা যায়, কিন্তু এটা union, intersection, primitive types ইত্যাদির জন্যও ব্যবহার করা যায়|

  ```ts
  type UserRole = "admin" | "user" | "guest";
  type Point = { x: number; y: number };
  ```

- **Declaration Merging**: Interface গুলো একাধিকবার declare করা যায় এবং এগুলো automatically merge হয়ে যায়| Type Alias গুলো একবারই declare করা যায়|

  ```ts
  interface Person {
    name: string;
  }
  interface Person {
    age: number;
  }
  // Merged to: { name: string; age: number; }
  ```

  - - **Extending**: Interface গুলো অন্য interface extend করতে পারে| Type Alias গুলো intersection types ব্যবহার করে extend করা যায়|

  ```ts
  interface Employee extends Person {
    employeeId: number;
  }
  type Admin = Person & { adminLevel: number };
  ```

- **Usage Context**: Interface গুলো object structer, class implementation এর জন্য বেশি উপযোগী| Type Alias গুলো primitives, unions, intersections, tuples, etc. করার জন্য বেশি উপযোগী|

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

Typescript, keyof কীওয়ার্ডটি একটি Object type সমস্ত key গুলোর একটি ইউনিয়ন টাইপ পেতে ব্যবহৃত হয়।

```ts
interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // "name" | "age"
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

## 3. Explain the difference between any, unknown, and never types in TypeScript.

### any

- TypeScript এ type checking বন্ধ করে দেয়।
- যেকোনো value assign করা যায়।
- ব্যবহার করা উচিত নয় কারণ এটি type safety হারিয়ে দেয়।

```ts
let value: any;
value = 42;
value = "Hello";
```

### unknown

- TypeScript এ type safety বজায় রাখে।
- যেকোনো value assign করা যায়, কিন্তু ব্যবহার করার আগে type check করতে হয়।

```ts
let value: unknown;
value = 42;
if (typeof value === "number") {
  let num: number = value; // Safe to assign
}
```

### never

- এমন একটি type যা কখনই কোনো value ধারণ করতে পারে না।
- সাধারণত functions যা কখনই return করে না (যেমন exceptions throw করা বা infinite loops) এর জন্য ব্যবহৃত হয়।

```ts
function error(message: string): never {
  throw new Error(message);
}
```

## 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

- Enum TypeScript এ একটি বিশেষ type যা constant values group করা যায়।

### Numeric Enums:

```ts
enum Status {
  Active,
  Inactive,
  Pending,
}
```

### String Enums:

```ts
enum Roles {
  Admin = "ADMIN",
  User = "USER",
}
```

## 5. Provide an example of using union and intersection types in TypeScript.

### Union Types:

```ts
type ID = number | string;
function printId(id: ID) {
  console.log("ID:", id);
}
```

### Intersection Types:

```ts
interface Person {
  name: string;
}
interface Employee {
  employeeId: number;
}
type personAndempolyee = Person & Employee;
const member: personAndempolyee = { name: "Alice", employeeId: 123 };
```
