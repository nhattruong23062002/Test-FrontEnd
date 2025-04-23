import React from 'react';
import './OptionModal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OptionModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <ul className="modal-options">
          <li onClick={() => console.log('Créer / Editer une Liste')}>Créer / Editer une Liste</li>
          <li onClick={() => console.log('Créer / Editer une Etiquette')}>Créer / Editer une Etiquette</li>
          <li onClick={() => console.log('Exporter les résultats du filtre')}>Exporter les résultats du filtre</li>
          <li onClick={() => console.log('Importer des données')}>Importer des données</li>
        </ul>
      </div>
    </div>
  );
};

export default OptionModal;
