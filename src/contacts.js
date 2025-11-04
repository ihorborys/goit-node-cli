import fs from "node:fs/promises";
import path from 'node:path';
import {nanoid} from "nanoid";

const contactsPath = path.resolve("src", "db", "contacts.json");


// Повертає масив контактів.
export async function listContacts() {
    const contacts = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(contacts);
}

// Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
export async function getContactById(id) {
    const allContacts = await listContacts();
    const oneContact = allContacts.find(item => item.id === id);
    return oneContact || null;
}

// Повертає об'єкт доданого контакту (з id).
export async function addContact(payload) {
    const allContacts = await listContacts();
    const newContact = {
        id: nanoid(),
        ...payload,
    };
    allContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 4));
    return newContact;
}

//
// async function removeContact(contactId) {
//     // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
// }
//


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