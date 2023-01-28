import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  try {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(contact);
      }
    });
  } catch (error) {
    console.log(`something went wrong while calling addNewContacts`, error);
  }
};

export const getContacts = (req, res) => {
  try {
    Contact.find({}, (err, contact) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(contact);
      }
    });
  } catch (error) {
    console.log(`something went wrong while calling getcontacts`, error);
  }
};

export const getContactsbyId = (req, res) => {
  try {
    let contactId = req.params.contactId;
    Contact.findById(contactId, (err, contact) => {
      if (err) {
        return res.send(err);
      } else {
        res.json(contact);
      }
    });
  } catch (error) {
    console.log(`something went wrong while calling getcontactsbyID`, error);
  }
};

export const updateContacts = (req, res) => {
  try {
    let contactId = req.params.contactId;
    Contact.findByIdAndUpdate(
      contactId,
      req.body,
      { new: true },
      (err, contact) => {
        if (err) {
          return res.send(err);
        } else {
          res.json(contact);
        }
      }
    );
  } catch (error) {
    console.log(`something went wrong while calling updateContacts`, error);
  }
};

export const deleteContact = (req, res) => {
  try {
    let contactId = req.params.contactId;
    Contact.remove({ _id: req.params.contactId }, (err) => {
      if (err) {
        return res.status(400).send({ err: err.message });
      } else {
        res.json({ message: ` ${contactId} is sucessfully deleted contact` });
      }
    });
  } catch (error) {
    console.log(`something went wrong while calling deleteContact`, error);
  }
};
