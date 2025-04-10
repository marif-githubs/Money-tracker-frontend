import { PiHandDepositBold, PiHandWithdrawBold } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { PageData } from "../store/function";

export const Stats = () => {
    const { expList, incList } = useContext(PageData);
    let d1 = incList.reduce((acc, item) => acc + item.amount, 0);
    let d2 = expList.reduce((acc, item) => acc + item.amount, 0);
    let d3 = d1 - d2;

    const [totalInc, setTotalInc] = useState(d1);
    const [totalExp, setTotalExp] = useState(d2);
    const [balance, setBalance] = useState(d3);


    return (
        <div className="stats shadow mx-auto my-10 bg-white flex flex-col sm:h-50 sm:flex-row">
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
