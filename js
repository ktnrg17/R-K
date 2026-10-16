
const letters = {
  first: {
    title: "A Letter for My Girl",
    body: `My love,

Sometimes I wonder how I got so lucky to have someone like you in my life.

You make ordinary days feel special, and even the smallest moments with you become memories I want to keep forever.

I hope you never forget how important you are to me. You deserve a love that makes you feel safe, appreciated, and chosen, even on the days when things aren't easy.

I may not always find the perfect words, but I will always try to show you how much you mean to me.

If I could choose again, in every lifetime and every version of my life, I would still look for you.

I love you, always.`
  },

  miss: {
    title: "When You Miss Me",
    body: `Hi, my favorite person. ❤️

If you're reading this because you miss me, imagine me giving you the longest hug right now.

I know I can't always be beside you whenever you want me to be. But please remember that distance doesn't make you any less important to me.

Think of our favorite memories, the little things that make us laugh, and all the moments we still have waiting for us.

Until I can hold you again, let these words remind you that you are loved.

Take care of that beautiful heart of yours for me.

I'm always cheering for you, my love.`
  },

  thank: {
    title: "Thank You, Love",
    body: `To my girl,

Thank you for being part of my life.

Thank you for the laughter, the memories, the little conversations, and all the moments that might seem ordinary but mean so much to me.

Thank you for letting me know you, for sharing pieces of your world with me, and for giving us a chance to build something of our own.

I know that love isn't only about the happy moments. It's also about patience, understanding, and choosing to keep learning about each other.

I hope I can continue to make you feel appreciated, respected, and loved.

You mean more to me than one letter could ever explain.

Thank you for being you. ❤️`
  }
};

const modal = document.getElementById("letter-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

function openLetter(id) {
  const letter = letters[id];

  if (!letter) return;

  modalTitle.textContent = letter.title;
  modalBody.textContent = letter.body;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  modal.querySelector(".close-button").focus();
}

function closeLetter() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-letter]").forEach(card => {
  card.addEventListener("click", () => {
    openLetter(card.dataset.letter);
  });
});

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", closeLetter);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeLetter();
  }
});

// Reveal sections as they enter the screen.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

// Update the displayed number of letters.
document.getElementById("letter-count").textContent =
  `${String(Object.keys(letters).length).padStart(2, "0")} LETTERS`;
