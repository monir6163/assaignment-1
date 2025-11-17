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
