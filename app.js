function startPay() {
  const amount = document.getElementById("amount").value;
  localStorage.setItem("amount", amount);
  location.href = "pay.html";
}

function pay(type) {
  const data = {
    amount: localStorage.getItem("amount"),
    pay: type,
    date: new Date().toLocaleString(),
    id: Math.random().toString(36).slice(2)
  };

  localStorage.setItem("current", JSON.stringify(data));
  location.href = "receipt.html";
}

if (location.pathname.includes("receipt")) {
  const data = JSON.parse(localStorage.getItem("current"));
  document.getElementById("info").innerText =
    `Сома: ${data.amount}₸ | ${data.pay}`;

  QRCode.toCanvas(
    document.getElementById("qr"),
    JSON.stringify(data)
  );
}

function saveReceipt() {
  const arr = JSON.parse(localStorage.getItem("receipts") || "[]");
  arr.push(JSON.parse(localStorage.getItem("current")));
  localStorage.setItem("receipts", JSON.stringify(arr));
  alert("Чек сақталды ✅");
}
