for (i = 0; i < document.querySelectorAll(".drum").length; i++) {

    //DETECTING MOUSE BUTTON CLICK
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let changeInnerHTML = this.innerHTML;
        makeSound(changeInnerHTML);
        buttonAnimation(changeInnerHTML);

    })

    // DETECTING KEYBORD CLICK
    document.addEventListener("keydown", function (event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    })
}

function makeSound(key) {
    switch (key) {
        case "w":
            let crashSound = new Audio("sounds/crash.mp3");
            crashSound.play();
            break;
        case "a":
            let kickSound = new Audio("sounds/kick-bass.mp3");
            kickSound.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log("Something went wrong");
            break;
    }
}

function buttonAnimation(pressedKey) {
    let buttonPressed = document.querySelector("." + pressedKey);
    buttonPressed.classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + pressedKey).classList.remove("pressed");
    }, 100);

}

// FUNKCJE OBIEKTOWE - HIGHER ORDER FUNCTIONS
// function HouseKeeper(name, gender, yearsOfExperience, languages, cleaningRepertouare) {
//     this.name = name;
//     this.gender = gender;
//     this.yearsOfExperience = yearsOfExperience;
//     this.langages = languages;
//     this.cleaningRepertouare = cleaningRepertouare;
// }

// let houseKeeper1 = new HouseKeeper("Łukasz", "male", "12", ["English, Polish"], ["Kittchen", "Bathroom"]);
// alert(houseKeeper1.name);

// function HouseKeeper2(name, gender, yearsOfExperience, languages, cleaningRepertouare) {
//     this.name = name;
//     this.gender = gender;
//     this.yearsofExperience = yearsOfExperience;
//     this.languages = languages;
//     this.cleaningRepertouare = cleaningRepertouare;
//     this.clean = function () {
//         return "Now I'm cleaning";
//     }
// }

// let houseKeeperŁukasz = new HouseKeeper2("Łukasz", "male", "0exp").clean();

// alert(houseKeeperŁukasz);