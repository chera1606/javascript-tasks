function fiterList() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll("#itemList li");

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? "list-item" : "none";
  });
}
