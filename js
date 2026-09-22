```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --black: #080808;
    --black2: #111111;
    --red: #b51220;
    --red2: #d7192a;
    --white: #ffffff;
    --gray: #888888;
    --border: #292929;
}

body {
    background: var(--black);
    color: var(--white);
    font-family: Arial, Helvetica, sans-serif;
    min-height: 100vh;
}

button,
input,
textarea,
select {
    font: inherit;
}

button {
    cursor: pointer;
}

.page {
    display: none;
    min-height: 100vh;
}

.page.active {
    display: flex;
}


/* ================= LOGIN ================= */

#loginPage,
#forgotPage {
    align-items: center;
    justify-content: center;

    padding: 20px;

    background:
        radial-gradient(
            circle at top,
            #39070d,
            #100203 40%,
            #080808 75%
        );
}

.login-box {
    width: 100%;
    max-width: 430px;

    padding: 45px 38px;

    background: #111;

    border: 1px solid var(--border);

    box-shadow:
        0 30px 80px rgba(0,0,0,.7);
}

.logo {
    text-align: center;

    font-size: 65px;

    font-weight: bold;

    letter-spacing: -6px;
}

.logo span {
    color: var(--red);
}

.logo-subtitle {
    text-align: center;

    color: #888;

    font-size: 10px;

    letter-spacing: 5px;

    margin-top: 5px;

    margin-bottom: 40px;
}

.small-logo {
    text-align: center;

    font-size: 38px;

    font-weight: bold;

    margin-bottom: 25px;
}

.login-box h2 {
    text-align: center;

    margin-bottom: 10px;
}

.description {
    color: #888;

    text-align: center;

    font-size: 13px;

    line-height: 1.6;

    margin-bottom: 25px;
}

label {
    display: block;

    color: #ccc;

    font-size: 12px;

    margin-top: 18px;

    margin-bottom: 8px;
}

input,
select,
textarea {
    width: 100%;

    padding: 14px;

    color: white;

    background: #090909;

    border: 1px solid #333;

    outline: none;

    transition: .2s;
}

input:focus,
select:focus,
textarea:focus {
    border-color: var(--red);
}

.password-wrapper {
    position: relative;
}

.password-wrapper input {
    padding-right: 50px;
}

#togglePassword {
    position: absolute;

    right: 8px;
    top: 7px;

    border: none;

    background: transparent;

    color: #888;

    padding: 8px;
}

.red-button {
    width: 100%;

    margin-top: 24px;

    padding: 15px;

    border: none;

    background: var(--red);

    color: white;

    font-size: 11px;

    font-weight: bold;

    letter-spacing: 2px;

    transition: .2s;
}

.red-button:hover {
    background: var(--red2);

    transform: translateY(-2px);
}

.forgot,
.back-button {
    display: block;

    margin: 18px auto 0;

    background: transparent;

    border: none;

    color: #888;

    font-size: 12px;
}

.forgot:hover,
.back-button:hover {
    color: white;
}

#loginMessage,
#resetMessage {
    text-align: center;

    color: #e33;

    font-size: 12px;

    min-height: 20px;

    margin-top: 15px;
}


/* ================= HEADER ================= */

#mainPage {
    flex-direction: column;

    background: #080808;
}

header {
    height: 72px;

    padding: 0 6%;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border-bottom: 1px solid var(--border);

    position: sticky;

    top: 0;

    z-index: 20;

    background: rgba(8,8,8,.97);
}

.header-logo {
    font-size: 25px;

    font-weight: bold;
}

.header-logo span {
    color: var(--red);
}

.header-right {
    display: flex;

    align-items: center;

    gap: 18px;
}

.header-right span {
    color: #888;

    font-size: 12px;
}

.header-right button {
    padding: 8px 12px;

    background: transparent;

    color: #888;

    border: 1px solid #333;

    font-size: 9px;
}

.header-right button:hover {
    color: white;

    border-color: var(--red);
}


/* ================= MAIN ================= */

main {
    width: 100%;
}

.section {
    display: none;

    width: 90%;

    max-width: 1100px;

    margin: auto;

    padding: 70px 0;
}

.section.active {
    display: block;
}

.welcome {
    margin-bottom: 50px;
}

.welcome small,
.section-title small {
    color: var(--red);

    font-size: 10px;

    font-weight: bold;

    letter-spacing: 4px;
}

.welcome h1 {
    font-size: clamp(55px, 10vw, 95px);

    letter-spacing: -7px;

    margin: 8px 0;
}

.welcome p {
    color: #777;

    font-size: 14px;
}


/* ================= FOLDERS ================= */

.folders {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 18px;
}

.folder {
    min-height: 190px;

    padding: 28px;

    text-align: left;

    color: white;

    background: #111;

    border: 1px solid var(--border);

    transition: .25s;
}

.folder:hover {
    border-color: var(--red);

    transform: translateY(-4px);

    background: #151515;
}

.folder-icon {
    color: var(--red);

    font-size: 28px;

    margin-bottom: 35px;
}

.folder h3 {
    font-size: 17px;

    margin-bottom: 7px;
}

.folder p {
    color: #777;

    font-size: 11px;
}


/* ================= SECTION TITLE ================= */

.section-title {
    display: flex;

    align-items: center;

    gap: 18px;

    margin-bottom: 40px;
}

.section-title h2 {
    margin-top: 7px;

    font-size: 32px;
}

.backHome {
    width: 45px;

    height: 45px;

    background: #111;

    color: white;

    border: 1px solid #333;
}

.backHome:hover {
    border-color: var(--red);
}


/* ================= LETTER CARDS ================= */

.letter-card {
    padding: 25px;

    margin-bottom: 12px;

    background: #111;

    border: 1px solid var(--border);

    cursor: pointer;

    transition: .2s;
}

.letter-card:hover {
    border-color: var(--red);
}

.letter-card small {
    color: var(--red);

    font-size: 9px;

    letter-spacing: 2px;
}

.letter-card h3 {
    margin: 8px 0;
}

.letter-card p {
    color: #777;

    font-size: 12px;
}

.empty {
    padding: 60px 20px;

    text-align: center;

    color: #666;

    border: 1px dashed #292929;
}


/* ================= PAPER CHOICES ================= */

.paper-grid {
    display: grid;

    grid-template-columns:
        repeat(5, 1fr);

    gap: 10px;

    margin-top: 10px;
}

.paper-choice {
    height: 75px;

    border: 1px solid #333;

    cursor: pointer;

    padding: 8px;

    font-size: 9px;

    display: flex;

    align-items: flex-end;

    justify-content: center;

    color: #222;
}

.paper-choice.selected {
    outline: 2px solid var(--red);

    outline-offset: 2px;
}


/* ================= LETTER PAPER ================= */

.letter-paper {
    min-height: 560px;

    margin-top: 30px;

    padding: 55px;

    box-shadow:
        0 20px 60px rgba(0,0,0,.4);

    transition: .3s;
}

.letter-paper input,
.letter-paper textarea {
    background: transparent;

    color: inherit;

    border: none;
}

.letter-paper input {
    font-size: 28px;

    font-weight: bold;

    padding: 0;
}

.letter-paper textarea {
    min-height: 330px;

    resize: vertical;

    padding: 20px 0;

    line-height: 1.8;
}

.paper-divider {
    height: 1px;

    background: currentColor;

    opacity: .2;

    margin: 18px 0;
}

.signature {
    text-align: right;

    font-size: 13px;
}

.signature strong {
    display: block;

    margin-top: 5px;
}


/* ================= 50 PAPER DESIGNS ================= */

/* 1 */
.paper-1 {
    background: white;
    color: #222;
}

/* 2 */
.paper-2 {
    background: #111;
    color: white;
}

/* 3 */
.paper-3 {
    background: #8b101b;
    color: white;
}

/* 4 */
.paper-4 {
    background: #f5e5e8;
    color: #641d2b;
}

/* 5 */
.paper-5 {
    background: #eee;
    color: #222;
}

/* 6 */
.paper-6 {
    background: #ead8bd;
    color: #432b1b;
}

/* 7 */
.paper-7 {
    background: #e7d4ba;
    color: #352
```
