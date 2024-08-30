import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

interface ImageModalProps {
  image: string | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      closeTimeoutMS={300}
    >
      {image && (
        <div className={css.content}>
          <img src={image} alt="" className={css.image} />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
