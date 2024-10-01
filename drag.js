const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

draggables.forEach((task) => {
    task.addEventListener("dragstart", () =>{
task.classList.add("is-dragging");
    });
    task.addEventListener("dragend", () =>{
       task.classList.remove("is-dragging");
    });
});

droppables.forEach((zone) => {
    zone.addEventListener("dragover",(e)=>{
      e.preventDefault();

    const curTask = document.querySelector(".is-dragging");

       zone.appendChild(curTask);
    });
});


const insertAboveTask=(zone, mouseY) =>{
    const els = zone.querySelectorAll(".task:not(.is-dragging)");

    let closesTask=null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    els.forEach((task) => {
      const{top}=task.getBoundingClientrect();

      const Offset =mouseY-top;

      if(Offset< 0 && Offset > closestOffset){
        closestOffset = Offset;
        closesTask = task;
      }
    });
       return closesTask;
};