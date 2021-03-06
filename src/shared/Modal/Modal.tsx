import React, {ReactNode} from 'react';
import cn from 'classnames';
import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import Button from '../Button/Button';
import {ReactComponent as CloseSvg} from '../../assets/icons/close.svg';

import styles from './Modal.module.scss';


interface ModalProps {
  className?: string,
  children?: ReactNode,
  onClose: () => void,
}

function Modal({className = '', children, onClose}: ModalProps) {
  const mainClasses = cn(styles.modal, className);

  return (
    <div className={mainClasses}>
      <div className={styles.overlay} onClick={() => onClose()}/>

      <div className={styles.content}>
        <Button
          icon={<CloseSvg />}
          type={'button'}
          size={BtnSize.Square}
          variants={[BtnVariant.Primary]}
          element={TypeElement.Button}
          onClick={onClose}
          className={styles.closeButton}
        >
          <span className="visually-hidden">Close modal</span>
        </Button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
