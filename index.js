const { hash } = window.location;

const secretMessage = atob(hash.replace("#", ""));

if (secretMessage) {
  document.querySelector("#message-form").classList.add("d-none");
  document.querySelector("#message-show").classList.remove("d-none");

  document.querySelector("#message").innerHTML = secretMessage;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#message-form").classList.add("d-none");
  document.querySelector("#link-form").classList.remove("d-none");

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
