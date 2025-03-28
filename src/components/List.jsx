import '../App.css';
import { TbXboxX } from "react-icons/tb";

export const List = () => {

    return (
        <>
            <div className='rounded-box shadow-md m-4 '>
                <ul className="list bg-base-100 ">

                    <p className="p-4 pb-2 text-sm opacity-60 tracking-wide">Most played songs this week</p>

                    <li className="list-col">
                        <li className="list-row flex pb-2">
                            <div className='flex-grow'>Dio Lupa</div>
                            <div >RS150</div>
                            <TbXboxX className='w-10 h-5 opacity-60' />
                        </li>
                        <div className="pl-4 text-sm font-semibold opacity-40 ">Remaining Reasonkkkkkjkjjknlknnnnnnnnnnnnnnnnnnnnnnnkkkkkkkkkk</div>
                        <div className="divider m-0" ></div>
                    </li>
                    <li className="list-col">
                        <li className="list-row flex pb-2">
                            <div className='flex-grow'>Dio Lupa</div>
                            <div >RS150</div>
                            <TbXboxX className='w-10 h-5 opacity-60' />
                        </li>
                        <div className="pl-4 text-sm font-semibold opacity-40 ">Remaining Reasonkkkkkjkjjknlknnnnnnnnnnnnnnnnnnnnnnnkkkkkkkkkk</div>
                        <div className="divider m-0" ></div>
                    </li>
                    <li className="list-col">
                        <li className="list-row flex pb-2">
                            <div className='flex-grow'>Dio Lupa</div>
                            <div >RS150</div>
                            <TbXboxX className='w-10 h-5 opacity-60' />
                        </li>
                        <div className="pl-4 text-sm font-semibold opacity-40 ">Remaining Reasonkkkkkjkjjknlknnnnnnnnnnnnnnnnnnnnnnnkkkkkkkkkk</div>
                        <div className="divider m-0" ></div>
                    </li>
                </ul>
            </div>
        </>
    )
}