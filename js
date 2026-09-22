```javascript
/* =========================================
   K&R LOVE LETTERS
========================================= */


/* =========================================
   ACCOUNT DATA
========================================= */

let accounts = JSON.parse(
    localStorage.getItem("KR_accounts")
) || {

    Kat: {
        password: "K071717",

        dog: "Buddy",

        anniversary: "July 17, 2026"
    },

    Rachelle: {
        password: "R071717",

        dog: "Buddy",

        anniversary: "July 17, 2026"
    }

};


/* =========================================
   LETTER DATA
========================================= */

let letters = JSON.parse(
    localStorage.getItem("KR_letters")
) || [];


/* =========================================
   MEDIA DATA
========================================= */

let mediaFiles = JSON.parse(
    localStorage.getItem("KR_media")
) || [];


let currentUser = null;

let selectedPaper = "classic";

let selectedLetterId = null;


/* =========================================
   PAGE ELEMENTS
========================================= */

const loginPage =
    document.getElementById("loginPage");

const forgotPage =
    document.getElementById("forgotPage");

const mainPage =
    document.getElementById("mainPage");


/* =========================================
   LOGIN
========================================= */

document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const username =
            document
                .getElementById("username")
                .value
                .trim();

        const password =
            document
                .getElementById("password")
                .value;

        const message =
            document.getElementById("loginMessage");


        if (
            accounts[username] &&
            accounts[username].password === password
        ) {

            currentUser = username;

            localStorage.setItem(
                "KR_currentUser",
                currentUser
            );

            loginPage.classList.remove("active");

            mainPage.classList.add("active");

            document.getElementById(
                "currentUser"
            ).textContent = currentUser;

            updateEverything();

        } else {

            message.textContent =
                "Incorrect account name or password.";

        }

    });


/* =========================================
   SHOW PASSWORD
========================================= */

document
    .getElementById("showPassword")
    .addEventListener("click", function () {

        const password =
            document.getElementById("password");

        if (password.type === "password") {

            password.type = "text";

            this.textContent = "○";

        } else {

            password.type = "password";

            this.textContent = "◉";
        }

    });


/* =========================================
   FORGOT PASSWORD
========================================= */

document
    .getElementById("forgotButton")
    .addEventListener("click", function () {

        loginPage.classList.remove("active");

        forgotPage.classList.add("active");

    });


document
    .getElementById("backLogin")
    .addEventListener("click", function () {

        forgotPage.classList.remove("active");

        loginPage.classList.add("active");

    });


document
    .getElementById("resetPassword")
    .addEventListener("click", function () {

        const account =
            document.getElementById(
                "forgotAccount"
            ).value;

        const dog =
            document.getElementById(
                "dogAnswer"
            ).value
            .trim()
            .toLowerCase();

        const anniversary =
            document.getElementById(
                "anniversaryAnswer"
            ).value
            .trim()
            .toLowerCase();

        const newPassword =
            document.getElementById(
                "newPassword"
            ).value;


        const message =
            document.getElementById(
                "resetMessage"
            );


        if (!account || !dog || !anniversary || !newPassword) {

            message.textContent =
                "Please complete all fields.";

            return;
        }


        if (
            accounts[account].dog.toLowerCase() === dog &&
            accounts[account].anniversary.toLowerCase() === anniversary
        ) {

            accounts[account].password =
                newPassword;

            localStorage.setItem(
                "KR_accounts",
                JSON.stringify(accounts)
            );

            message.style.color = "#36a269";

            message.textContent =
                "Password changed successfully.";

        } else {

            message.style.color = "#e33";

            message.textContent =
                "The answers do not match.";

        }

    });


/* =========================================
   LOGOUT
========================================= */

document
    .getElementById("logoutButton")
    .addEventListener("click", function () {

        currentUser = null;

        localStorage.removeItem(
            "KR_currentUser"
        );

        mainPage.classList.remove("active");

        loginPage.classList.add("active");

        document.getElementById(
            "password"
        ).value = "";

    });


/* =========================================
   NAVIGATION
========================================= */

document
    .querySelectorAll(".folder")
    .forEach(function (folder) {

        folder.addEventListener("click", function () {

            const section =
                this.dataset.section;

            showSection(section);

        });

    });


document
    .querySelectorAll(".back-home")
    .forEach(function (button) {

        button.addEventListener("click", function () {

            showSection("home");

        });

    });


function showSection(section) {

    document
        .querySelectorAll(".content-section")
        .forEach(function (element) {

            element.classList.remove("active");

        });


    if (section === "home") {

        document
            .getElementById("homeSection")
            .classList.add("active");

    }

    if (section === "newLetters") {

        document
            .getElementById("newLettersSection")
            .classList.add("active");

        renderLetters();

    }

    if (section === "readLetters") {

        document
            .getElementById("readLettersSection")
            .classList.add("active");

        renderLetters();

    }

    if (section === "photos") {

        document
            .getElementById("photosSection")
            .classList.add("active");

        renderMedia();

    }

    if (section === "writeLetter") {

        document
            .getElementById("writeLetterSection")
            .classList.add("active");

    }

}


/* =========================================
   PAPER DESIGNS
========================================= */

const paperDesigns = [

    ["classic", "Classic Love"],

    ["redvelvet", "Red Velvet"],

    ["midnight", "Midnight"],

    ["rose", "Rose"],

    ["coffee", "Coffee"],

    ["superhero", "Superhero"],

    ["gothic", "Gothic"],

    ["cherry", "Cherry Blossom"],

    ["starry", "Starry Night"],

    ["vintage", "Vintage"]

];


const paperChoices =
    document.getElementById(
        "paperChoices"
    );


paperDesigns.forEach(function (paper) {

    const button =
        document.createElement("button");

    button.className =
        "paper-choice " + paper[0];

    button.textContent =
        paper[1];

    button.addEventListener(
        "click",
        function () {

            selectedPaper =
                paper[0];

            document
                .querySelectorAll(".paper-choice")
                .forEach(function (item) {

                    item.classList.remove(
                        "selected"
                    );

                });

            button.classList.add(
                "selected"
            );

            document
                .getElementById("paperPreview")
                .className =
                "paper " + selectedPaper;

        }
    );

    paperChoices.appendChild(button);

});


document
    .querySelector(".paper-choice")
    .classList.add("selected");


/* =========================================
   LETTER RECEIVER
========================================= */

document
    .getElementById("letterReceiver")
    .addEventListener("change", function () {

        updateSignature();

    });


function updateSignature() {

    document.getElementById(
        "signatureName"
    ).textContent = currentUser || "Kat";

}


/* =========================================
   SEND LETTER
========================================= */

document
    .getElementById("sendLetter")
    .addEventListener("click", function () {

        const receiver =
            document.getElementById(
                "letterReceiver"
            ).value;

        const title =
            document.getElementById(
                "letterTitle"
            ).value
            .trim();

        const body =
            document.getElementById(
                "letterBody"
            ).value
            .trim();


        if (!title || !body) {

            alert(
                "Please write a title and letter."
            );

            return;
        }


        const newLetter = {

            id: Date.now(),

            from: currentUser,

            to: receiver,

            title: title,

            body: body,

            paper: selectedPaper,

            date: new Date().toLocaleString(),

            read: false,

            replies: []

        };


        letters.push(newLetter);


        localStorage.setItem(
            "KR_letters",
            JSON.stringify(letters)
        );


        document.getElementById(
            "letterTitle"
        ).value = "";

        document.getElementById(
            "letterBody"
        ).value = "";


        alert(
            "Your letter has been sent. ♥"
        );


        updateEverything();

        showSection("home");

    });


/* =========================================
   DISPLAY LETTERS
========================================= */

function renderLetters() {

    const newList =
        document.getElementById(
            "newLettersList"
        );

    const readList =
        document.getElementById(
            "readLettersList"
        );


    newList.innerHTML = "";

    readList.innerHTML = "";


    const received =
        letters.filter(function (letter) {

            return letter.to === currentUser;

        });


    const allLetters =
        letters.filter(function (letter) {

            return (
                letter.from === currentUser ||
                letter.to === currentUser
            );

        });


    if (received.length === 0) {

        newList.innerHTML =
            `<div class="empty-state">
                No new letters yet.
            </div>`;

    } else {

        received
            .filter(letter => !letter.read)
            .forEach(function (letter) {

                newList.appendChild(
                    createLetterCard(letter)
                );

            });

    }


    if (allLetters.length === 0) {

        readList.innerHTML =
            `<div class="empty-state">
                No letters yet.
            </div>`;

    } else {

        allLetters.forEach(function (letter) {

            readList.appendChild(
                createLetterCard(letter)
            );

        });

    }

}


function createLetterCard(letter) {

    const card =
        document.createElement("div");

    card.className =
        "letter-card";

    card.innerHTML = `

        <p class="tiny-title">
            ${letter.from} → ${letter.to}
        </p>

        <h3>
            ${escapeHTML(letter.title)}
        </h3>

        <p class="letter-date">
            ${letter.date}
        </p>

        <p>
            ${escapeHTML(
                letter.body.substring(0, 100)
            )}${letter.body.length > 100 ? "..." : ""}
        </p>
    `;


    card.addEventListener(
        "click",
        function () {

            openLetter(letter.id);

        }
    );


    return card;

}


/* =========================================
   OPEN LETTER
========================================= */

function openLetter(id) {

    const letter =
        letters.find(function (item) {

            return item.id === id;

        });


    if (!letter) return;


    selectedLetterId = id;


    if (letter.to === currentUser) {

        letter.read = true;

        localStorage.setItem(
            "KR_letters",
            JSON.stringify(letters)
        );

    }


    document.getElementById(
        "modalFrom"
    ).textContent =
        letter.from + " → " + letter.to;


    document.getElementById(
        "modalTitle"
    ).textContent =
        letter.title;


    document.getElementById(
        "modalDate"
    ).textContent =
        letter.date;


    document.getElementById(
        "modalBody"
    ).textContent =
        letter.body;


    document
        .getElementById("letterModal")
        .classList.add("active");


    renderLetters();

}


/* =========================================
   CLOSE MODAL
========================================= */

document
    .getElementById("closeModal")
    .addEventListener("click", function () {

        document
            .getElementById("letterModal")
            .classList.remove("active");

    });


/* =========================================
   SEND REPLY
========================================= */

document
    .getElementById("sendReply")
    .addEventListener("click", function () {

        const reply =
            document.getElementById(
                "replyText"
            ).value.trim();


        if (!reply) {

            alert(
                "Please write a reply."
            );

            return;
        }


        const letter =
            letters.find(function (item) {

                return item.id === selectedLetterId;

            });


        if (!letter) return;


        letter.replies.push({

            from: currentUser,

            body: reply,

            date: new Date().toLocaleString()

        });


        /*
            For this prototype, replies are stored
            inside the original letter.
        */


        letters.push({

            id: Date.now(),

            from: currentUser,

            to: letter.from,

            title: "Re: " + letter.title,

            body: reply,

            paper: letter.paper,

            date: new Date().toLocaleString(),

            read: false,

            replies: []

        });


        localStorage.setItem(
            "KR_letters",
            JSON.stringify(letters)
        );


        document.getElementById(
            "replyText"
        ).value = "";


        alert(
            "Your reply has been sent. ♥"
        );


        document
            .getElementById("letterModal")
            .classList.remove("active");


        updateEverything();

    });


/* =========================================
   MEDIA UPLOAD
========================================= */

document
    .getElementById("mediaUpload")
    .addEventListener("change", function () {

        const files =
            Array.from(this.files);


        let currentSize =
            mediaFiles.reduce(
                function (total, item) {

                    return total + item.size;

                },
                0
            );


        const maxSize =
            150 * 1024 * 1024;


        files.forEach(function (file) {

            if (
                currentSize + file.size >
                maxSize
            ) {

                alert(
                    "The 150 MB storage limit would be exceeded."
                );

                return;

            }


            /*
                Local browser preview.

                Real cloud storage will be added
                when Supabase is connected.
            */

            const reader =
                new FileReader();


            reader.onload = function (event) {

                mediaFiles.push({

                    name: file.name,

                    type: file.type,

                    size: file.size,

                    data: event.target.result

                });


                currentSize += file.size;


                localStorage.setItem(
                    "KR_media",
                    JSON.stringify(mediaFiles)
                );


                renderMedia();

            };


            reader.readAsDataURL(file);

        });


        this.value = "";

    });


/* =========================================
   DISPLAY MEDIA
========================================= */

function renderMedia() {

    const gallery =
        document.getElementById(
            "mediaGallery"
        );


    gallery.innerHTML = "";


    let totalSize = 0;


    mediaFiles.forEach(function (file) {

        totalSize += file.size;


        const item =
            document.createElement("div");

        item.className =
            "media-item";


        if (
            file.type.startsWith("video")
        ) {

            item.innerHTML = `

                <video
                    src="${file.data}"
                    controls
                ></video>

            `;

        } else {

            item.innerHTML = `

                <img
                    src="${file.data}"
                    alt="${escapeHTML(file.name)}"
                >

            `;

        }


        gallery.appendChild(item);

    });


    const maxSize =
        150 * 1024 * 1024;


    const percentage =
        Math.min(
            (totalSize / maxSize) * 100,
            100
        );


    document.getElementById(
        "storageProgress"
    ).style.width =
        percentage + "%";


    document.getElementById(
        "storageText"
    ).textContent =
        formatMB(totalSize) +
        " MB / 150 MB";

}


/* =========================================
   UPDATE EVERYTHING
========================================= */

function updateEverything() {

    renderLetters();

    renderMedia();

    updateSignature();


    const newCount =
        letters.filter(function (letter) {

            return (
                letter.to === currentUser &&
                !letter.read
            );

        }).length;


    document.getElementById(
        "newCount"
    ).textContent =
        newCount +
        (
            newCount === 1
                ? " new letter"
                : " new letters"
        );

}


/* =========================================
   HELPER FUNCTIONS
========================================= */

function formatMB(bytes) {

    return (
        bytes /
        (1024 * 1024)
    ).toFixed(2);

}


function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================================
   RESTORE LOGIN SESSION
========================================= */

const savedUser =
    localStorage.getItem(
        "KR_currentUser"
    );


if (
    savedUser &&
    accounts[savedUser]
) {

    currentUser = savedUser;

    loginPage.classList.remove("active");

    mainPage.classList.add("active");

    document.getElementById(
        "currentUser"
    ).textContent =
        currentUser;

    updateEverything();

}
```

