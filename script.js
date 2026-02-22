document.addEventListener("DOMContentLoaded", ()=>{
    const $ = s => document.querySelector(s), r = a => a[Math.floor(Math.random()*a.length)];

    // Surprise Me code.
    const surpriseBtn = $("#surpriseBtn");
    if (surpriseBtn){
        surpriseBtn.onclick = () => {
            const pages = ["video.html", "geolocate.html", "trivia.html", "dogs.html"];
            window.location.href = r(pages);
        };
    }

    // Math Trivia for Fun code.
    const checkMath = $("#checkMath");
    if (checkMath) {
        checkMath.onclick = () => {
            let a = {q1:42, q2:56, q3:12, q4:55},s=0;
            for (let k in a)s+=+($("#"+k).value) === a[k];
            $("#mathResult").textContent = `${s}/4 correct`;
        };
    }

    // My Special Geolocator code.
    const show= (la,lo,l) => {$("#lat").textContent=la;$("#lon").textContent=lo;$("#label").textContent=l;$("#geoResults")?.classList.remove("d-none")};

    const geoBtn = $("#geoBtn");
    if (geoBtn) {
        geoBtn.onclick = async() => {
            let q=$("#address").value.trim(); if (!q)return;
            let d=await(await fetch(`https://nominatim.openstreetmap.org/search/?format=json&q=${encodeURIComponent(q)}&limit=1`)).json();
            if (d[0]) show(d[0].lat, d[0].lon, d[0].display_name);
        };
    }

    $("#useMyLocation")?.onclick = () => navigator.geolocation.getCurrentPosition(p=>show(p.coords.latitude, p.coords.longitude, "You"));

    $("#copyBtn")?.onclick = () => navigator.clipboard.writeText($("#lat").textContent+", "+$("#lon").textContent);

    const player=document.getElementById("player");
    if(player){
        player.onclick = () => player.innerHTML=
        `<iframe width="100%" height="450"
        src="https://www.youtube.com/embed/2GTUu8RDFX4?autoplay=1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen></iframe>`;
    }

    document.getElementById("testTitle").textContent = "JavaScript is working!";
});
