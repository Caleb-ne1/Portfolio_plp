let currentWeek = null;

function toggleContent(weekId) {
  const weekContent = document.getElementById(weekId);
  const weekList = weekContent.querySelector(".week-list");

  if (currentWeek !== null && currentWeek !== weekId) {
    const previousWeekContent = document.getElementById(currentWeek);
    const previousWeekList = previousWeekContent.querySelector(".week-list");
    previousWeekList.classList.remove("show");
  }

  weekList.classList.toggle("show");
  currentWeek = weekId;
}