import React from 'react';
import css from './burgerMenu.module.css';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';


function BurgerMenu() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div onClick={handleOpen} className={css.burger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={css.paper}>
          <div className={css.modal_box}>
            <p className={css.modal} onClick={handleClose}>✕</p>
          </div>
          <div>
            <ul className={css.list}>
              <Link to="/aboutUs">
                <li onClick={handleClose} className={css.menu}>О нас</li>
              </Link>
              <Link to="/test">
                <li onClick={handleClose} className={css.menu}>Онлайн тест</li>
              </Link>
              <Link to="/exam">
                <li onClick={handleClose} className={css.menu}>Экзамен</li>
              </Link>
              <Link to="generalEducation">
                <li onClick={handleClose} className={css.menu}>База знаний</li>
              </Link>
              <Link to="/poleznoe">
                <li onClick={handleClose} className={css.menu}>Полезное</li>
              </Link>
              <Link to="/news">
                <li onClick={handleClose} className={css.menu}>Новости</li>
              </Link>
              <Link to="/contacts">
                <li onClick={handleClose} className={css.menu}>Контакты</li>
              </Link>
              <Link to="/auth">
                <li onClick={handleClose} className={css.menu}>Войти</li>
              </Link>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default BurgerMenu;