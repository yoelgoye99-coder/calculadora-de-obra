const topbar = document.getElementById("topbar");
const topbarTitle = document.getElementById("topbarTitle");
const btnBack = document.getElementById("btnBack");

const screens = Array.from(document.querySelectorAll(".screen"));

const stack = ["home"];

function show(id){
  screens.forEach(s => s.classList.toggle("active", s.id === id));

  const el = document.getElementById(id);
  const title = el?.dataset?.title || "Calculadora de Obra";
  topbarTitle.textContent = title;

  if(id === "home") topbar.classList.add("hidden");
  else topbar.classList.remove("hidden");
}

function go(id){
  const cur = stack[stack.length - 1];
  if(cur !== id) stack.push(id);
  show(id);
}

function back(){
  if(stack.length <= 1) return;
  stack.pop();
  show(stack[stack.length - 1]);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-go]");
  if(!btn) return;
  go(btn.getAttribute("data-go"));
});

btnBack.addEventListener("click", back);

show("home");
