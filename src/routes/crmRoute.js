import { application } from "express";
import { addNewContact, deleteContact, getContacts,getContactsbyId, updateContacts } from "../controllers/crmController";
const routes = (app) => {
  app
    .route("/contact")

    .get((req,res,next)=>{
next();
    },getContacts)
    .post(addNewContact)

   

  app
    .route("/contact/:contactId")
    .get(getContactsbyId)

    //update contact
    .put(updateContacts)
    
    //delete contact
    .delete(deleteContact);
};

export default routes;
