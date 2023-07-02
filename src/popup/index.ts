import "../app.css";
import Index from "../components/Index.svelte";

const target = document.getElementById("app");

async function render() {
  new Index({ target });
}
document.addEventListener("DOMContentLoaded", render);
