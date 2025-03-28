import '../App.css'
export const Form = () => {

    return (<>
        <div class="container flex flex-col w-90 gap-y-2 p-4 mt-5 shadow-md rounded h-53 sm:mx-auto bg-white">
            {/* <div>{ enter form head }</div> */}
            <div className='flex w-80 gap-2 '>
                <label class="floating-label">
                    <span>Title</span>
                    <input type="text" placeholder="Title" class="input input-md" />
                </label>
                <label class="floating-label">
                    <span>Amount</span>
                    <input type="text" placeholder="Amount" class="input input-md" />
                </label>
            </div>
            <label class="floating-label ">
                <span>Description</span>
                <textarea className="textarea" placeholder="Description"></textarea>
            </label>
            <button className="btn btn-active btn-success text-white w-80">Add To List</button>        </div>
    </>)
}