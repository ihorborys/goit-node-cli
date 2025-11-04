import {program} from "commander";
import {addContact, getContactById, listContacts, removeContact} from "./contacts.js";

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({action, id, ...data}) {
    switch (action) {
        case "list":
            const allContacts = await listContacts();
            console.log(allContacts);
            break;

        case "get":
            const getContact = await getContactById(id);
            console.log(getContact);
            break;


        case "add":
            const newContact = await addContact(data);
            console.log(newContact);
            break;

        case "remove":
            const removedContact = await removeContact(id);
            console.log(removedContact);
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

// ПРИКЛАДИ ВИКОРИСТАННЯ
// invokeAction({action: "list"});

// invokeAction({action: "get", id: "e6ywwRe4jcqxXfCZOj_1e"});

// invokeAction({
//     action: "addd",
//     name: "Pavlo Chubynskyi",
//     email: "pav.chub@gmail.com", phone: "(097) 840-6985"
// });

invokeAction({action: "remove", id: "90_Rs9XOJiTDjjLL_dfQR"});