document.querySelector("#burgerInput").innerHTML = "";

async function submitBurger(event) {
  event.preventDefault();
  data = {
    title: document.querySelector("#burgerInput").value,
  };

  let logInResult = await fetch("/api/index", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((r) => r.json());
  location.reload();
}

async function listLoad() {
  const getBurgerList = await fetch("/api/index").then((r) => r.json());
}
listLoad();

async function removeBurger(id) {
  const deleteRequest = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  const deleteBurger = await fetch(
    `/api/index/${id}`,
    deleteRequest
  ).then((r) => r.json());
  location.reload();
}

async function eatBurger(id) {
  const updateRequest = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };
  const updateBurgerState = await fetch(
    `/api/index/${id}`,
    updateRequest
  ).then((r) => r.json());
  location.reload();
}
