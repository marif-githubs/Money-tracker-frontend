import { useContext, useRef } from 'react'
import { PageData } from '../store/function';

export const Form = ({ type }) => {
    const { addItem } = useContext(PageData);

    const title = useRef();
    const amount = useRef();
    const description = useRef();

    const handleSubmit = () => {

        addItem(
            title.current.value,
            amount.current.value,
            description.current.value,
            type)

        title.current.value = "";
        amount.current.value = "";
        description.current.value = "";
    }

    return (
        <div className="container flex flex-col max-w-88 gap-y-2 p-4 mt-5 shadow-md rounded h-53 sm:mx-auto xs:mx-10 bg-white">
            {/* <div>{ enter form head }</div> */}
            <div className='flex max-w-80 gap-2 '>
                <label className="floating-label">
                    <span>Title</span>
                    <input type="text" placeholder="Title" className="input input-md" ref={title} />
                </label>
                <label className="floating-label">
                    <span>Amount</span>
                    <input type="number" placeholder="Amount" className="input input-md" ref={amount} />
                </label>
            </div>
            <label className="floating-label ">
                <span>Description</span>
                <textarea className="textarea" placeholder="Description" ref={description}></textarea>
            </label>
            <button className="btn btn-active active:bg-green-300 btn-success text-white" onClick={() => handleSubmit()}>Add To List</button>
        </div>
    )
}