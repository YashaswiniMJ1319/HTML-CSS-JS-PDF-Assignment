// Dataset State A: Matches exactly your target PDF layout values
const documentDatasetA = {
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

// Dataset State B: Multi-row scaling dataset to prove table expansion in video presentation
const documentDatasetB = {
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

let toggleState = true;

// ==========================================================================
// DYNAMIC DOM INJECTION ROUTINES
// ==========================================================================
function renderExpenseForm(data) {
    // Render Primary String References
    document.getElementById('dyn-claim-no').innerText = data.claimNo;
    document.getElementById('dyn-worker-name').innerText = data.workerName;
    document.querySelectorAll('.dyn-app-id').forEach(el => el.innerText = data.appId);
    document.querySelectorAll('.dyn-submit-date').forEach(el => el.innerText = data.submittedDate);

    // 1. Render Prescription Drugs Table
    const rxBody = document.getElementById('table-rx-body');
    rxBody.innerHTML = '';
    data.prescriptionDrugs.forEach(row => {
        rxBody.innerHTML += `<tr>
            <td>${row.name}</td>
            <td>${row.rxDate}</td>
            <td>${row.buyDate}</td>
            <td>${row.provider}</td>
            <td><strong>${row.amount}</strong></td>
        </tr>`;
    });

    // 2. Render Over-the-Counter Drugs Table
    const otcBody = document.getElementById('table-otc-body');
    otcBody.innerHTML = '';
    data.otcDrugs.forEach(row => {
        otcBody.innerHTML += `<tr>
            <td>${row.name}</td>
            <td>${row.buyDate}</td>
            <td><strong>${row.amount}</strong></td>
            <td>${row.seller}</td>
            <td>${row.reason}</td>
        </tr>`;
    });

    // 3. Render Supplies Table
    const suppliesBody = document.getElementById('table-supplies-body');
    suppliesBody.innerHTML = '';
    data.supplies.forEach(row => {
        suppliesBody.innerHTML += `<tr>
            <td>${row.item}</td>
            <td>${row.buyDate}</td>
            <td>${row.prescribed}</td>
            <td>${row.provider}</td>
            <td><strong>${row.amount}</strong></td>
            <td>${row.seller}</td>
        </tr>`;
    });

    // 4. Render Parking Table
    const parkingBody = document.getElementById('table-parking-body');
    parkingBody.innerHTML = '';
    data.parking.forEach(row => {
        parkingBody.innerHTML += `<tr>
            <td>${row.facility}</td>
            <td>${row.date}</td>
            <td><strong>${row.amount}</strong></td>
            <td>${row.meterUsed}</td>
            <td>${row.meterNo}</td>
        </tr>`;
    });

    // 5. Render Mileage Table
    const mileageBody = document.getElementById('table-mileage-body');
    mileageBody.innerHTML = '';
    data.mileage.forEach(row => {
        mileageBody.innerHTML += `<tr>
            <td>${row.date}</td>
            <td>${row.facility}</td>
            <td>${row.workplace}</td>
            <td><strong>${row.km}</strong></td>
        </tr>`;
    });

    // 6. Render Transit Table
    const transitBody = document.getElementById('table-transit-body');
    transitBody.innerHTML = '';
    data.transit.forEach(row => {
        transitBody.innerHTML += `<tr>
            <td>${row.date}</td>
            <td>${row.start}</td>
            <td>${row.facility}</td>
            <td>${row.type}</td>
            <td><strong>${row.fare}</strong></td>
        </tr>`;
    });
}

// Controller Interaction Toggle Handler
function toggleExpenseData() {
    toggleState = !toggleState;
    renderExpenseForm(toggleState ? documentDatasetA : documentDatasetB);
}

// Initial Boot Hook
window.onload = () => {
    renderExpenseForm(documentDatasetA);
};