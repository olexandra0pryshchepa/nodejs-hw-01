import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();  
    const newContacts = Array.from({ length: number }, () => createFakeContact());  
    contacts.push(...newContacts); 
    await writeContacts(contacts);  
    console.log(`${number} contacts generated.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
