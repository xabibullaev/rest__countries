async function getCountry() {
  const url = await fetch("https://restcountries.eu/rest/v2/all");
  const res = await url.json();
  console.log(res);
  showCountry(res);
}
getCountry();
function showCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = {'
<div class="country-img">
  <img src="https://flagcdn.com/bw.svg" alt="" />
</div>
<div class="country-info">
  <h3>Germany</h3>
  <p><strong>Population :</strong>81.010.900</p>
  <p><strong>Region :</strong>Europe</p>
  <p><strong>Capital :</strong>Berlin</p>
</div>'
}
