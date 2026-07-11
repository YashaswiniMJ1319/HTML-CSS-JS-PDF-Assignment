// data/expenseDataset2.js
module.exports = {
    claimNo: "40091152",
    workerName: "Madeleine Willson",
    appId: "931045",
    submittedDate: "July 07, 2026 14:15",
    prescriptionDrugs: [
        { name: "Amoxicillin", rxDate: "June 01, 2026", buyDate: "June 02, 2026", provider: "Dr. Evans", amount: "$45.50" },
        { name: "Gabapentin", rxDate: "June 15, 2026", buyDate: "June 15, 2026", provider: "Dr. Evans", amount: "$32.10" }
    ],
    otcDrugs: [
        { name: "Acetaminophen", buyDate: "June 04, 2026", amount: "$12.40", seller: "Rexall Pharmacy", reason: "Fever Management" },
        { name: "Ibuprofen 400mg", buyDate: "June 18, 2026", amount: "$9.15", seller: "Walmart Pharmacy", reason: "Swelling Control" }
    ],
    supplies: [
        { item: "Knee Brace", buyDate: "June 02, 2026", prescribed: "Yes", provider: "Dr. Evans", amount: "$65.00", seller: "Medical Supply Depot" },
        { item: "Medical Tape", buyDate: "June 10, 2026", prescribed: "No", provider: "—", amount: "$4.50", seller: "Shoppers Drug Mart" }
    ],
    parking: [
        { facility: "St. Boniface Hospital Lot A", date: "June 02, 2026", amount: "$14.00", meterUsed: "no", meterNo: "—" },
        { facility: "Clinical Triage Zone West", date: "June 15, 2026", amount: "$6.00", meterUsed: "yes", meterNo: "8841A" }
    ],
    mileage: [
        { date: "June 02, 2026", facility: "St. Boniface, 409 Taché Ave, Winnipeg, Canada", workplace: "WCB, 333 Broadway, Winnipeg, Canada", km: "14 km" },
        { date: "June 15, 2026", facility: "Pan Am Clinic, 75 Poseidon Bay, Winnipeg, Canada", workplace: "WCB, 333 Broadway, Winnipeg, Canada", km: "28 km" }
    ],
    transit: [
        { date: "June 10, 2026", start: "Home Residence", facility: "Pan Am Clinic Diagnostic Wing", type: "Taxi", fare: "$22.50" }
    ]
};