// ==========================================================================
// DATA ENGINE LAYER
// ==========================================================================

// Dataset Scenario A: Extracted text elements from "Worker Progress Report-2.pdf_0137.pdf"
const primaryDataset = {
    claimNo: "20042047 WP",
    workerName: "Madeleine Willson",
    appId: "712041",
    submitted: "March 19, 2024 19:21",
    rtwSelection: "returned", // Option array elements mapping target keys
    returnDate: "March 15, 2024",
    dutySelection: "mod-red", 
    workOther: "—",
    rtwStatus: "Terrible. Testing Testing",
    expectDate: "—",
    rtwConcerns: "—",
    employerContact: "—",
    contactDate: "—",
    recoverySelection: "fully", 
    recoveryComments: "—",
    painRating: 8,
    medSelection: "none", 
    providerType: "—",
    lastProvider: "—",
    lastDate: "—",
    nextProvider: "—",
    nextDate: "—",
    therapyFreq: "—",
    rxSelection: "none",
    rxName: "—",
    exeSelection: "none",
    exercisesList: "—",
    additionalInfo: "No info Testing Testing"
};

// Dataset Scenario B: Testing matrix array validation profile
const alternateDataset = {
    claimNo: "99955511 WP",
    workerName: "Alexander Vance",
    appId: "852914",
    submitted: "July 07, 2026 11:42",
    rtwSelection: "not-returned", 
    returnDate: "—",
    dutySelection: "mod-reg", 
    workOther: "Assigned clerical triage desk roles",
    rtwStatus: "Stiff joint performance tracking normal, but stamina remains low.",
    expectDate: "August 12, 2026",
    rtwConcerns: "Extended driving duties could aggravate deep muscle healing.",
    employerContact: "Sarah Jenkins (Operations Chief)",
    contactDate: "July 02, 2026",
    recoverySelection: "not-fully", 
    recoveryComments: "Continuing core strength recovery track.",
    painRating: 4,
    medSelection: "active", 
    providerType: "Physiotherapist Specialist",
    lastProvider: "Metro Motion Therapy",
    lastDate: "July 03, 2026",
    nextProvider: "Metro Motion Therapy",
    nextDate: "July 10, 2026",
    therapyFreq: "3 Sessions Per Week",
    rxSelection: "active",
    rxName: "Naproxen 500mg therapeutic dose",
    exeSelection: "active",
    exercisesList: "Pelvic tilts, quad sets, low-impact stationary cycling.",
    additionalInfo: "Requested temporary schedule variance for morning appointments."
};

let currentDataState = true;

// ==========================================================================
// DRIVER LOGIC RENDERING ROUTINES
// ==========================================================================
function renderData(data) {
    
    // ---------------------------------------
    // 1. Render Core Case Tracking Contexts
    // ---------------------------------------
    document.getElementById('dyn-claim-no').innerText = data.claimNo;
    document.getElementById('dyn-worker-name').innerText = data.workerName;
    document.querySelectorAll('.dyn-app-id').forEach(el => el.innerText = data.appId);
    document.querySelectorAll('.dyn-submit-date').forEach(el => el.innerText = data.submitted);

    // ---------------------------------------
    // 2. Render Checkbox Options Arrays Loops
    // ---------------------------------------
    
    // Return to Work Selectors Array
    const rtwMapping = [
        { id: 'chk-missed', matchKey: 'missed' },
        { id: 'chk-not-returned', matchKey: 'not-returned' },
        { id: 'chk-returned', matchKey: 'returned' }
    ];
    rtwMapping.forEach(item => {
        document.getElementById(item.id).className = (data.rtwSelection === item.matchKey) ? 'box checked' : 'box';
    });
    document.getElementById('dyn-return-date').innerText = data.returnDate;

    // Working Assignment Duties Options Array
    const dutyMapping = [
        { id: 'chk-full-reg', matchKey: 'full-reg' },
        { id: 'chk-full-red', matchKey: 'full-red' },
        { id: 'chk-mod-reg', matchKey: 'mod-reg' },
        { id: 'chk-mod-red', matchKey: 'mod-red' }
    ];
    dutyMapping.forEach(item => {
        document.getElementById(item.id).className = (data.dutySelection === item.matchKey) ? 'box checked' : 'box';
    });
    document.getElementById('dyn-work-other').innerText = data.workOther;

    // Recovery Selections Array Loop
    const recoveryMapping = [
        { id: 'chk-not-recovered', matchKey: 'not-fully' },
        { id: 'chk-fully-recovered', matchKey: 'fully' }
    ];
    recoveryMapping.forEach(item => {
        document.getElementById(item.id).className = (data.recoverySelection === item.matchKey) ? 'box checked' : 'box';
    });

    // Medical Treatments, Medications & Exercises Option Mappings Array Loop
    const statusBoxMapping = [
        { id: 'chk-med-none', condition: data.medSelection === 'none' },
        { id: 'chk-med-active', condition: data.medSelection === 'active' },
        { id: 'chk-rx-none', condition: data.rxSelection === 'none' },
        { id: 'chk-rx-active', condition: data.rxSelection === 'active' },
        { id: 'chk-exe-none', condition: data.exeSelection === 'none' },
        { id: 'chk-exe-active', condition: data.exeSelection === 'active' }
    ];
    statusBoxMapping.forEach(item => {
        document.getElementById(item.id).className = item.condition ? 'box checked' : 'box';
    });

    // ---------------------------------------
    // 3. Render Variable Free-Text Containers
    // ---------------------------------------
    document.getElementById('dyn-rtw-status').innerText = data.rtwStatus;
    document.getElementById('dyn-expect-date').innerText = data.expectDate;
    document.getElementById('dyn-rtw-concerns').innerText = data.rtwConcerns;
    document.getElementById('dyn-employer-contact').innerText = data.employerContact;
    document.getElementById('dyn-contact-date').innerText = data.contactDate;
    document.getElementById('dyn-recovery-comments').innerText = data.recoveryComments;
    document.getElementById('dyn-provider-type').innerText = data.providerType;
    document.getElementById('dyn-last-provider').innerText = data.lastProvider;
    document.getElementById('dyn-last-date').innerText = data.lastDate;
    document.getElementById('dyn-next-provider').innerText = data.nextProvider;
    document.getElementById('dyn-next-date').innerText = data.nextDate;
    document.getElementById('dyn-therapy-freq').innerText = data.therapyFreq;
    document.getElementById('dyn-rx-name').innerText = data.rxName;
    document.getElementById('dyn-exercises-list').innerText = data.exercisesList;
    document.getElementById('dyn-additional-info').innerText = data.additionalInfo;

    // ---------------------------------------
    // 4. Render Dynamic Pain Matrix Array Loop
    // ---------------------------------------
    const scaleGroup = document.getElementById('pain-scale-group');
    scaleGroup.innerHTML = ''; // Safely purge content block node tree
    
    // Standard 10 point matrix population sequence loop
    for(let i = 1; i <= 10; i++) {
        const checkedClass = (data.painRating === i) ? 'checked' : '';
        scaleGroup.innerHTML += `<div class="checkbox-item"><div class="box ${checkedClass}"></div> ${i}</div>`;
    }
}

// Interactive Toggle Sequence
function loadAlternateData() {
    currentDataState = !currentDataState;
    renderData(currentDataState ? primaryDataset : alternateDataset);
}

// Primary execution initialization
window.onload = () => { renderData(primaryDataset); };