document.getElementById("searchButton").addEventListener("click", async () => {
    const mealName = document.getElementById("mealInput").value.trim();
    if (!mealName) return alert("Please enter a meal name");

    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
        const data = await res.json();
        const meal = data.meals?.[0];

        document.getElementById("mealInfo").innerHTML = meal ? `
            <h2>${meal.strMeal}</h2>
            <p><b>Category:</b> ${meal.strCategory}</p>
            <p><b>Area:</b> ${meal.strArea}</p>
            <p><b>Instructions:</b> ${meal.strInstructions.slice(0, 100)}...</p>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        ` : "<p>No meal found. Try another search.</p>";
    } catch {
        document.getElementById("mealInfo").innerHTML = "<p>Something went wrong. Please try again.</p>";
    }
});