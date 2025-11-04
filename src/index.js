import {program} from "commander";
import {getContactById, listContacts} from "./contacts.js";

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({action, id, name, email, phone}) {
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
            // ... name email phone
            break;

        case "remove":
            // ... id
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

// invokeAction({action: "list"});
invokeAction({action: "get", id: "e6ywwRe4jcqxXfCZOj_1e"});