// data/expenseDataset1.js
module.exports = {
    claimNo: "20042047",
    workerName: "Madeleine Willson",
    appId: "712041",
    submittedDate: "March 28, 2024 20:43",
    prescriptionDrugs: [
        { name: "Naproxen", rxDate: "February 28, 2024", buyDate: "February 29, 2024", provider: "Dr. Best", amount: "$20.00" }
    ],
    otcDrugs: [
        { name: "Advil", buyDate: "March 28, 2024", amount: "$8.00", seller: "Shoppers Drug Mart", reason: "Pain" }
    ],
    supplies: [
        { item: "Tensor", buyDate: "February 28, 2024", prescribed: "Yes", provider: "Dr. Best", amount: "$10.00", seller: "Shoppers Drug Mart" }
    ],
    parking: [
        { facility: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada", date: "March 28, 2024", amount: "$10.00", meterUsed: "yes", meterNo: "12245" }
    ],
    mileage: [
        { date: "March 28, 2024", facility: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", km: "20 km" }
    ],
    transit: [
        { date: "March 28, 2024", start: "—", facility: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", type: "Bus", fare: "$3.00" },
        { date: "March 27, 2024", start: "25 Furby St, Winnipeg MB R3C2A2, Canada", facility: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada", type: "Taxi", fare: "$15.00" }
    ]
};