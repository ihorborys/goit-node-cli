import fs from "node:fs/promises";
import path from 'path';

const contactsPath = path.join("src", "db", "contacts.json")

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