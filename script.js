const products = {
    "iphone 14": [
        { store: "Amazon", price: 69999 },
        { store: "Flipkart", price: 68999 },
        { store: "Croma", price: 70999 }
    ],
    "laptop": [
        { store: "Amazon", price: 55999 },
        { store: "Flipkart", price: 54999 },
        { store: "Reliance Digital", price: 56999 }
    ]
};

function comparePrice() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (!products[input]) {
        resultDiv.innerHTML = "<p>No product found.</p>";
        return;
    }

    products[input].forEach(item => {
        const div = document.createElement("div");
        div.className = "result-card";
        div.innerHTML = `<strong>${item.store}</strong>: ₹${item.price}`;
        resultDiv.appendChild(div);
    });
}
