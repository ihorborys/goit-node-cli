import fs from "node:fs/promises";
import path from 'node:path';

const contactsPath = path.resolve("src", "db", "contacts.json");


// Повертає масив контактів.
export async function listContacts() {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
}

// async function getContactById(contactId) {
//     // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
// }
//
// async function removeContact(contactId) {
//     // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
// }
//
// async function addContact(name, email, phone) {
//     // ...твій код. Повертає об'єкт доданого контакту (з id).
// }


// import fs from "fs";
// fs.readFile("src/db/contacts.json", (error, data)=> {
//     console.log(error);
//     console.log(data)
// });

// import fs from "node:fs/promises";
// // //
// // // fs.readFile("src/db/contacts.json")
// // //     .then(data => console.log(data))
// // //     .catch(error => console.log(error))


// const buffer = await fs.readFile("src/db/contacts.json", "utf-8")
// console.log(buffer)
//
// const result = await fs.appendFile("src/db/contacts.json", "\nnewContact")
// console.log(result)
//
// const newResult = await fs.writeFile("src/db/contacts1.json", "\nnewContact")
// console.log(result)

// await fs.unlink("src/db/contacts1.json")

// listContacts()