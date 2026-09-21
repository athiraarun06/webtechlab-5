// ================= HERO BUTTONS =================

function scrollToGallery(){
    document.getElementById("gallery").scrollIntoView({
        behavior:"smooth"
    });
}

function scrollToFeatures(){
    document.getElementById("features").scrollIntoView({
        behavior:"smooth"
    });
}

// ================= FEATURE 1 =================
// Caption Generator

function generateCaption(){

    const theme=document.getElementById("theme").value.trim();

    if(theme===""){
        document.getElementById("captionOutput").innerHTML=
        "Please enter a photo theme.";
        return;
    }

    const captions=[
        "✨ Capturing the beauty of " + theme + ", one frame at a time.",
        "📸 Every " + theme + " moment deserves to be remembered forever.",
        "🌅 Through my lens, " + theme + " becomes timeless.",
        "💛 Finding stories hidden inside every " + theme + " photograph."
    ];

    let random=Math.floor(Math.random()*captions.length);

    document.getElementById("captionOutput").innerHTML=captions[random];
}

// ================= FEATURE 2 =================
// Camera Settings Advisor

function cameraSettings(){

    let light=Number(document.getElementById("light").value);

    let output="";

    if(light<=0){
        output="Please enter a light level between 1 and 10.";
    }

    else if(light<=3){
        output="🌙 Low Light → ISO 1600 | 1/60 sec | Aperture f/2.8";
    }

    else if(light<=6){
        output="🌤️ Medium Light → ISO 400 | 1/125 sec | Aperture f/4";
    }

    else{
        output="☀️ Bright Light → ISO 100 | 1/500 sec | Aperture f/8";
    }

    document.getElementById("cameraOutput").innerHTML=output;
}

// ================= FEATURE 3 =================
// Random Photography Challenge

function photoChallenge(){

    const challenges=[
        "🌄 Capture a Sunrise Landscape.",
        "🌸 Take a Macro Flower Shot.",
        "🚶 Click a Street Photography Portrait.",
        "🌙 Capture the Night Sky.",
        "🐦 Photograph a Bird in Motion.",
        "🌊 Capture Water Reflections.",
        "🚴 Motion Blur Photography Challenge.",
        "☁️ Black & White Cloud Photography."
    ];

    let random=Math.floor(Math.random()*challenges.length);

    document.getElementById("challengeBox").innerHTML="📸";
    document.getElementById("challengeOutput").innerHTML=
    challenges[random];
}

// ================= FEATURE 4 =================
// Budget Converter

function convertBudget(){

    const amount=Number(document.getElementById("amount").value);
    const currency=document.getElementById("currency").value;

    if(amount<=0){
        document.getElementById("budgetOutput").innerHTML=
        "Please enter a valid amount.";
        return;
    }

    if(currency==="usd"){

        let usd=(amount/83).toFixed(2);

        document.getElementById("budgetOutput").innerHTML=
        "₹"+amount+" = $"+usd;

    }

    else{

        let inr=(amount*83).toFixed(2);

        document.getElementById("budgetOutput").innerHTML=
        "$"+amount+" = ₹"+inr;

    }
}

// ================= FEATURE 5 =================
// Lucky Gear Picker

function luckyGear(){

    const gear=[
        "📷 DSLR Camera",
        "📸 Mirrorless Camera",
        "🌅 Wide Angle Lens",
        "🔭 Telephoto Lens",
        "🎥 Tripod",
        "🚁 Camera Drone",
        "🎒 Camera Backpack",
        "💡 LED Soft Light"
    ];

    let random=Math.floor(Math.random()*gear.length);

    document.getElementById("gearBox").innerHTML="🎁";
    document.getElementById("gearOutput").innerHTML=
    "Your Lucky Gear: <strong>"+gear[random]+"</strong>";
}

// ================= FEATURE 6 =================
// Photo Print Calculator

function calculatePrint(){

    const size=Number(document.getElementById("size").value);
    const frame=Number(document.getElementById("frame").value);

    let total=size+frame;

    document.getElementById("printOutput").innerHTML=
    "🖼️ Total Price: <strong>₹"+total+"</strong>";
}