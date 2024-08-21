import React, { useRef } from "react";
import Input from "./common/Input";
import Modal from "./common/Modal";

const NewProject = ({ onAddProject, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const eTitle = title.current.value;
    const eDesc = desc.current.value;
    const eDueDate = dueDate.current.value;

    if (eTitle.trim() === "" || eDesc.trim() === "" || eDueDate.trim() === "") {
      modal.current.showMyModal();
      return;
    }

    onAddProject({
      title: eTitle,
      desc: eDesc,
      dueDate: eDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl fond-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oh no! something wrong happened.</p>
        <p className="text-stone-600 mb-4">Please enter all required values!</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            ref={title}
            label="Title"
            type="text"
            placeholder="Enter title"
          />
          <Input
            ref={desc}
            label="Description"
            placeholder="Enter description"
            textarea
          />
          <Input
            ref={dueDate}
            label="Due Date"
            type="date"
            placeholder="Enter due date"
          />
        </div>
      </div>
    </>
  );
};

export default NewProject;
