import React from "react";
import { PlaneTakeoff, Wallet } from "lucide-react";

interface BoardingCardProps {
    passengerName: string;
    pnr: string;
    type?: string;
}

export function BoardingCard({
    passengerName,
    pnr,
    type = "ADT",
}: BoardingCardProps) {
    return (
        <div className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 mb-6">
            {/* Flight Header */}
            <div className="bg-gradient-to-r from-[#2F6FED] to-[#4F8FF7] p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                    <PlaneTakeoff className="w-6 h-6" />
                    <span className="font-bold text-lg tracking-wide">Qoomlee</span>
                </div>
                <span className="text-sm font-medium opacity-90">Boarding Pass</span>
            </div>

            <div className="p-5 md:p-6 flex flex-col gap-6">
                {/* Pax Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-wider">
                            Passenger
                        </p>
                        <h2 className="text-xl font-bold text-slate-900 uppercase">
                            {passengerName}
                        </h2>
                        <p className="text-xs text-slate-500 mt-1 uppercase font-medium">
                            {type} • PNR: {pnr}
                        </p>
                    </div>
                    <div className="text-right flex gap-4">
                        <div>
                            <p className="text-xs text-slate-400 font-semibold mb-1 uppercase text-center">
                                Terminal
                            </p>
                            <p className="text-xl font-bold text-slate-900 text-center">1</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-semibold mb-1 uppercase text-center">
                                Gate
                            </p>
                            <p className="text-xl font-bold text-slate-900 text-center">40</p>
                        </div>
                    </div>
                </div>

                {/* Route Info */}
                <div className="flex items-center justify-between border-y border-slate-100 py-4">
                    <div className="text-center w-1/3">
                        <p className="text-[10px] text-slate-400 uppercase leading-tight mb-1">
                            Suvarnabhumi Airport, Bangkok
                        </p>
                        <h3 className="text-4xl font-black text-[#2F6FED] tracking-tighter">
                            BKK
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mt-1">
                            19 Feb 2026
                        </p>
                    </div>

                    <div className="flex flex-col items-center w-1/3 text-slate-400">
                        <PlaneTakeoff className="w-5 h-5 mb-1 text-[#2F6FED]" />
                        <div className="w-full relative flex items-center justify-center">
                            <div className="w-full border-t border-dashed border-slate-300 absolute"></div>
                            <span className="bg-white px-2 z-10 text-[10px] font-bold text-slate-500 bg-slate-50">
                                QL123
                            </span>
                        </div>
                    </div>

                    <div className="text-center w-1/3">
                        <p className="text-[10px] text-slate-400 uppercase leading-tight mb-1">
                            Changi International Airport, Singapore
                        </p>
                        <h3 className="text-4xl font-black text-[#2F6FED] tracking-tighter">
                            SIN
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mt-1">
                            20 Feb 2026
                        </p>
                    </div>
                </div>

                {/* Seat / Boarding Info */}
                <div className="flex bg-slate-50 rounded-xl p-3 justify-between items-center text-center">
                    <div className="w-1/4">
                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">
                            Seat
                        </p>
                        <p className="text-lg font-bold text-slate-800">12A</p>
                    </div>
                    <div className="w-1/4">
                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">
                            Zone
                        </p>
                        <p className="text-lg font-bold text-slate-800">1</p>
                    </div>
                    <div className="w-1/4">
                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">
                            Seq
                        </p>
                        <p className="text-lg font-bold text-slate-800">023</p>
                    </div>
                    <div className="w-1/4 bg-blue-50/50 rounded-lg p-1 py-1.5">
                        <p className="text-[10px] text-slate-500 uppercase font-bold mb-0.5">
                            Boarding
                        </p>
                        <p className="text-lg font-bold text-[#2F6FED]">21:14</p>
                    </div>
                </div>

                {/* Times */}
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">
                            Departure
                        </p>
                        <p className="text-xl font-bold text-slate-800">
                            14:54 <span className="text-sm text-slate-400 font-semibold">UTC</span>
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">Thu • 19 Feb 2026</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">
                            Arrival
                        </p>
                        <p className="text-xl font-bold text-slate-800">
                            17:54 <span className="text-sm text-slate-400 font-semibold">UTC</span>
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">Fri • 20 Feb 2026</p>
                    </div>
                </div>

                {/* Barcode / Wallet */}
                <div className="mt-4 border-t border-slate-100 pt-6 flex flex-col gap-4">
                    <div className="border border-slate-200 rounded-lg p-4 flex flex-col items-center justify-center bg-slate-50/50">
                        <div className="w-full h-12 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e9/UPC-A-036000291452.svg')] bg-repeat-x bg-contain opacity-70 mb-2"></div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest text-center">
                            Scan at security and boarding gate
                        </p>
                    </div>

                    <button className="w-full bg-black text-white rounded-xl py-3.5 flex items-center justify-center gap-2 font-semibold hover:bg-slate-900 transition-colors">
                        <Wallet className="w-5 h-5 text-white" />
                        Add to Apple Wallet
                    </button>
                </div>
            </div>
        </div>
    );
}
