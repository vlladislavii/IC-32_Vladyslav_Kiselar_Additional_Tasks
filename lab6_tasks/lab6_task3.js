const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

const applyDiscount = (items) => {
    return items.map((item, index) => ({
        id: index + 1,
        name: item.name,
        price: item.price > 300 ? Math.round(item.price * 0.7) : item.price,
    }));
};

const discountedMedicines = applyDiscount(medicines);
console.log(discountedMedicines);