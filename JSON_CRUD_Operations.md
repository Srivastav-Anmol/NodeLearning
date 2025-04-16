# 🧠 JSON CRUD Operations in JavaScript

This guide demonstrates how to perform **Create, Read, Update, and Delete (CRUD)** operations on JSON data using JavaScript.

---

## 🧱 Initial JSON Data

```javascript
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];
```

---

## ✅ CREATE – Add a New User

### 🛠 Methods: `.push()`, `.unshift()`, or `splice()`

```javascript
// Add a new user
const newUser = { id: 3, name: "Charlie", email: "charlie@example.com" };
users.push(newUser);

console.log("After Create:", users);
```

**Result:**
```javascript
[
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" }
]
```

---

## 🔍 READ – Get a Specific User

### 🛠 Methods: `.find()` or `.filter()`

```javascript
// Find user with ID = 2
const userFound = users.find(user => user.id === 2);
console.log("User Found:", userFound);
```

**Result:**
```javascript
{ id: 2, name: "Bob", email: "bob@example.com" }
```

#### Get all users with `@example.com` email

```javascript
const exampleUsers = users.filter(user => user.email.endsWith("@example.com"));
console.log("Users with example.com email:", exampleUsers);
```

---

## ✏️ UPDATE – Modify a User's Info

### 🛠 Method: `.map()` + spread syntax

```javascript
// Update Charlie's name to "Charles"
users = users.map(user => {
  if (user.id === 3) {
    return { ...user, name: "Charles" };
  }
  return user;
});

console.log("After Update:", users);
```

**Result:**
```javascript
[
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charles", email: "charlie@example.com" }
]
```

---

## ❌ DELETE – Remove a User

### 🛠 Method: `.filter()` (exclude item)

```javascript
// Remove user with ID = 1
users = users.filter(user => user.id !== 1);
console.log("After Delete:", users);
```

**Result:**
```javascript
[
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charles", email: "charlie@example.com" }
]
```

---

## 💡 BONUS: JSON String Operations

### Convert JS object to JSON string

```javascript
const jsonString = JSON.stringify(users);
console.log("JSON String:", jsonString);
```

### Convert back to JS object

```javascript
const parsedUsers = JSON.parse(jsonString);
console.log("Parsed Users:", parsedUsers);
```

---

## 🔁 Final Summary Table


| Method                          | Description                                      |
|--------------------------------|--------------------------------------------------|
| array.push(item)               | Adds an item to the end of the array             |
| array.unshift(item)            | Adds an item to the beginning of the array       |
| array.splice(index, 0, item)   | Inserts item at specific index                   |
| array.find(fn)                 | Finds the first item that matches a condition    |
| array.filter(fn)               | Returns all items matching a condition           |
| array.map(fn)                  | Transforms each item                             |
| JSON.parse(jsonStr)            | Converts JSON string to JS object/array          |
| JSON.stringify(obj)            | Converts JS object/array to JSON string          |
| array.map(fn)                  | Return a new array with updated objects          |
| array.filter(fn)               | Remove items that don’t match condition with "!" operator         |
| array.splice(index, 1)         | Remove item at a specific index                  |
