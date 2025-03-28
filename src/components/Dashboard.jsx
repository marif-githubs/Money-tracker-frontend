import '../App.css'
import { PiHandDepositBold } from "react-icons/pi";
import { PiHandWithdrawBold } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";

export const Dashboard = () => {

    return (
        <>
            <div className="stats shadow h-50 mx-auto my-10 bg-white" >
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <PiHandDepositBold className="inline-block h-8 w-8 stroke-current" />
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <PiHandWithdrawBold className="inline-block h-8 w-8 stroke-current" />
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <BiMoneyWithdraw className="inline-block h-8 w-8 stroke-current" />
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>

        </>
    )
}