


    document.addEventListener("DOMContentLoaded", function () {

  const interviewCountElem = document.getElementById("interview-count");
  const rejectedCountElem = document.getElementById("rejected-count");
  const jobsCountSpan = document.querySelector('.flex > p');
  const allTabBtn = document.querySelector('[data-tab="all"]');
  const interviewTabBtn = document.querySelector('[data-tab="interview"]');
  const rejectedTabBtn = document.querySelector('[data-tab="rejected"]');
  const noJobsMessage = document.getElementById("no-jobs-message");

  let interviewCount = 0;
  let rejectedCount = 0;

  const cards = document.querySelectorAll(".job-card");

 
  allTabBtn.classList.add("bg-blue-500", "text-white");
  jobsCountSpan.innerText = cards.length + " jobs";

  cards.forEach(card => {
    const interviewBtn = card.querySelector(".interview-btn");
    const rejectedBtn = card.querySelector(".rejected-btn");
    const status = card.querySelector(".status");

    let statusFlag = "none";

    interviewBtn.addEventListener("click", () => {
      if (statusFlag !== "interview") {

        interviewCount++;
        interviewCountElem.innerText = interviewCount;

        status.innerText = "Interview";
        status.classList.remove("text-gray-500","text-red-600");
        status.classList.add("text-green-600");

        statusFlag = "interview";
        updateTab();
      }
    });

    rejectedBtn.addEventListener("click", () => {
      if (statusFlag !== "rejected") {
        rejectedCount++;
        rejectedCountElem.innerText = rejectedCount;

        status.innerText = "Rejected";
        status.classList.remove("text-gray-500","text-green-600");
        status.classList.add("text-red-600");

        statusFlag = "rejected";
        updateTab();
      }
    });

  });


  allTabBtn.addEventListener("click", () => showTab("all"));
  interviewTabBtn.addEventListener("click", () => showTab("interview"));
  rejectedTabBtn.addEventListener("click", () => showTab("rejected"));

  function showTab(tab) {
    let visible = 0;
    cards.forEach(card => {
      const st = card.querySelector(".status").innerText.toLowerCase();
      if(tab==="all" || (tab==="interview" && st==="interview") || (tab==="rejected" && st==="rejected")){
        card.style.display = "block";
        visible++;
      } else {
        card.style.display = "none";
      }
    });

    jobsCountSpan.innerText = visible + " jobs";
    noJobsMessage.classList.toggle("hidden", visible>0);

    [allTabBtn, interviewTabBtn, rejectedTabBtn].forEach(b=>{
      b.classList.remove("bg-blue-500","text-white");
      b.classList.add("bg-gray-200","text-black");
    });
    if(tab==="all") allTabBtn.classList.add("bg-blue-500",);
    if(tab==="interview") interviewTabBtn.classList.add("bg-blue-500",);
    if(tab==="rejected") rejectedTabBtn.classList.add("bg-blue-500",);
  }

  function updateTab(){
    const activeTab = document.querySelector(".tab-btn.bg-blue-500").dataset.tab;
    showTab(activeTab);
  }


 const tabButtons = [allTabBtn, interviewTabBtn, rejectedTabBtn];

  function activateTab(tabBtn) {
   
    tabButtons.forEach(btn => {
      btn.classList.remove("bg-blue-500", "text-white");
      btn.classList.add("bg-gray-200", "text-black");
    });

   
    tabBtn.classList.add("bg-blue-500", "text-white");
    tabBtn.classList.remove("bg-gray-200", "text-black");
  }

 
  activateTab(allTabBtn);


  allTabBtn.addEventListener("click", () => activateTab(allTabBtn));
  interviewTabBtn.addEventListener("click", () => activateTab(interviewTabBtn));
  rejectedTabBtn.addEventListener("click", () => activateTab(rejectedTabBtn));
});
