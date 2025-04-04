// import { PiHandDepositBold } from "react-icons/pi";
// import { PiHandWithdrawBold } from "react-icons/pi";
// import { BiMoneyWithdraw } from "react-icons/bi";
// import axios from "axios";
// import { useRef } from "react";

// export const Stats = () => {
//     const d1 = useRef();
//     const d2 = useRef();
//     const d3 = useRef();

//     const hanbleDashboardData = async () => {
//         const response = await axios.get("http://localhost:5000/transaction/dashboardData");
//         d1.current.value = response.data.total_inc;
//         d2.current.value = response.data.total_exp;
//         d3.current.value = response.data.balance;
//     }

//     hanbleDashboardData()
//     return (
//         <>
//             <div className="stats shadow h-50 mx-auto my-10 bg-white" >
//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <PiHandWithdrawBold className="inline-block h-8 w-8 stroke-current" />
//                     </div>
//                     <div className="stat-title">Earning</div>
//                     <div className="stat-value">{d1.current.value}</div>
//                     <div className="stat-desc">Jan 1st - Feb 1st</div>
//                 </div>

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <PiHandDepositBold className="inline-block h-8 w-8 stroke-current" />
//                     </div>
//                     <div className="stat-title">Outgoing</div>
//                     <div className="stat-value">{d2.current.value}</div>
//                     <div className="stat-desc">↘︎ 90 (14%)</div>
//                 </div>

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <BiMoneyWithdraw className="inline-block h-8 w-8 stroke-current" />
//                     </div>
//                     <div className="stat-title">Balance Save</div>
//                     <div className="stat-value">{d3.current.value}</div>
//                     <div className="stat-desc">↗︎ 400 (22%)</div>
//                 </div>
//             </div>

//         </>
//     )
// }

import { PiHandDepositBold, PiHandWithdrawBold } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { PageData } from "../store/function";

export const Stats = () => {
    const { expList, incList } = useContext(PageData);


    const [totalInc, setTotalInc] = useState(incList.reduce((acc, item) => acc + item.amount, 0));
    const [totalExp, setTotalExp] = useState(expList.reduce((acc, item) => acc + item.amount, 0));
    const [balance, setBalance] = useState(totalExp - totalInc);


    return (
        <div className="stats shadow h-50 mx-auto my-10 bg-white">
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <PiHandWithdrawBold className="inline-block h-8 w-8 stroke-current" />
                </div>
                <div className="stat-title">Earning</div>
                <div className="stat-value">{totalInc}</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <PiHandDepositBold className="inline-block h-8 w-8 stroke-current" />
                </div>
                <div className="stat-title">Outgoing</div>
                <div className="stat-value">{totalExp}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <BiMoneyWithdraw className="inline-block h-8 w-8 stroke-current" />
                </div>
                <div className="stat-title">Balance Save</div>
                <div className="stat-value">{balance}</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
        </div>
    );
};
