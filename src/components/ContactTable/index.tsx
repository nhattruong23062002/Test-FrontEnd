import React, { useState } from 'react';
import './ContactTable.css';
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Contact } from '../../types/types';

interface ContactTableProps {
    contacts: Contact[];
}
const ContactTable: React.FC<ContactTableProps> = ({ contacts }) => {
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [selectedContacts, setSelectedContacts] = useState<boolean[]>(new Array(contacts.length).fill(false));


    const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setSelectAll(isChecked);
        setSelectedContacts(new Array(contacts.length).fill(isChecked));
    };

    const handleContactChange = (index: number) => {
        const newSelectedContacts = [...selectedContacts];
        newSelectedContacts[index] = !newSelectedContacts[index];
        setSelectedContacts(newSelectedContacts);
    };

    return (
        <div className="contact-table-container">
            <table className="contact-table">
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAllChange}
                            />
                        </th>
                        <th>Nom du contact</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Opportunity</th>
                        <th>Responsable</th>
                        <th>Étiquettes</th>
                        <th><IoSettingsOutline className='icon-setting-table' /></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedContacts[index]}
                                    onChange={() => handleContactChange(index)}
                                />
                            </td>
                            <td>
                                <div className="contact-name">
                                    <span>{contact?.name}</span>
                                    <p className="contact-type">{contact?.type}</p>
                                </div>
                            </td>
                            <td><MdOutlineMail className="icon-contact-table" />{contact?.email}</td>
                            <td><LuPhone className="icon-contact-table" />{contact?.phone}</td>
                            <td>{contact?.opportunity}</td>
                            <td>
                                <img
                                    src={contact?.avatar}
                                    alt="User Avatar"
                                    className="avatar-responsible"
                                />
                                {contact?.responsible}
                            </td>
                            <td>
                                {contact?.labels.map((label, i) => (
                                    <span
                                        key={i}
                                        className={`label ${label === "BTP" ? "label-btp" : label === "BtoB" ? "label-btob" : "label-other"}`}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </td>
                            <td>
                                <div className="action-icons">
                                    <AiOutlineEdit className="edit-btn" />
                                    <RiDeleteBinLine className="delete-btn" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactTable;