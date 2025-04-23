import React, { useState } from "react";
import "./ContactPage.css";
import Button from "../../components/Button";
import { CgAddR } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import ContactTable from "../../components/ContactTable";
import { CONTACTS } from "../../constant/constant";
import { MdArrowBackIosNew } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import Modal from "../../components/OptionsModal";
import OptionModal from "../../components/OptionsModal";

const ContactPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); 
  const [showModal, setShowModal] = useState(false); 

  const totalItems = CONTACTS.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = CONTACTS.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <div className="contact-left">
          <Button text="Ajouter de contact" icon={CgAddR} className="add-contact-btn" />
          <div className="contact-count"><b>{totalItems}</b> Contacts</div>
        </div>
        <div className="filter-search">
          <div className="filter-dropdown">
            <select>
              <option>Plus de filtre</option>
              <option>Filtre 1</option>
              <option>Filtre 2</option>
            </select>
          </div>
          <div className="toute-dropdown">
            <select>
              <option>Toute les monde</option>
              <option>Toute les monde 1</option>
              <option>Toute les monde 2</option>
            </select>
          </div>
          <div className="search-table">
            <div className="search-table-icon">
              <FiSearch />
            </div>
            <input
              type="text"
              placeholder="Titre, contact, responsable..."
              className="search-input"
            />
          </div>
          <div className="wrap-setting-option">
            <button className="settings-btn" onClick={toggleModal}><IoSettingsOutline /></button>
            <OptionModal isOpen={showModal} onClose={toggleModal} />
          </div>
        </div>
      </div>
      
      <div className="contact-table">
        <ContactTable contacts={currentItems} /> 
      </div>

      <div className="contact-pagination">
        <div className="wrap-pagination-left">
          <p>Éléments par page</p>
          <select className="pagination-select">
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <p>{`${startIndex + 1}-${endIndex} sur ${totalItems} éléments`}</p>
        </div>
        <div className="wrap-pagination-right">
          <RxTrackPrevious
            className="icon-pagination"
            onClick={() => handlePageChange(1)}
          />
          <MdArrowBackIosNew
            className="icon-pagination"
            onClick={() => handlePageChange(currentPage - 1)} 
          />
          <input type="text" value={currentPage} readOnly />
          <p>de {totalPages}</p>
          <GrNext
            className="icon-pagination"
            onClick={() => handlePageChange(currentPage + 1)} 
          />
          <RxTrackNext
            className="icon-pagination"
            onClick={() => handlePageChange(totalPages)} 
          />
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
