function showCard() {
  const email = document.getElementById("emailInput").value.trim();
  const card = document.getElementById("subscribeCard");
  if (email !== "") {
    card.classList.remove("d-none");
  } else {
    alert("សូមបញ្ចូលអ៊ីមែលមុនសិន។");
  }
}
function hideCard() {
  document.getElementById("subscribeCard").classList.add("d-none");
}

function showCard() {
  const email = document.getElementById("emailInput").value.trim();
  const card = document.getElementById("subscribeCard");
  if (email !== "") {
    card.classList.remove("d-none");
  } else {
    alert("Please enter your email first.");
  }
}
function hideCard() {
  document.getElementById("subscribeCard").classList.add("d-none");
}
