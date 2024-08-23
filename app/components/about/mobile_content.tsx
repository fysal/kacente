import React from 'react'
import Content from './content';
import { EssetionalCloseCircleOutline } from 'react-icons-sax';

const MobileContent = () => {
  return (
    <dialog
      id="my_modal_5"
      className="modal  modal-bottom sm:modal-middle sm:hidden"
    >
      <div className="modal-box bg-white">
        <form method="dialog" className="modal-backdrop float-right">
          <button className="text-slate-700">
            <EssetionalCloseCircleOutline />
          </button>
        </form>
        <div className="modal-action">
          <Content padding="p-5" />
        </div>
      </div>
    </dialog>
  );
}

export default MobileContent