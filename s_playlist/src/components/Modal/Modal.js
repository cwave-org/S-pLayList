import React from 'react';
import './Modal.css';

const Modal = (props) => {
  const { open, close, header } = props;
  const seeSoBTI = () => {
    window.location.href = "https://www.banggooso.com/gl/88/result?code=183987"
  };

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <img src="images/explain.png" width={318}></img>
            <button className="seeSoBTI" onClick={seeSoBTI}>
              질주본능 라이더들의 소비성향 구경하고 혜택받기
            </button>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;