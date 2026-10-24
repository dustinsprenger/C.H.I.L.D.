"use strict";
const copyButton = document.getElementById("copy-citation");
const copyStatus = document.getElementById("copy-status");
copyButton.addEventListener("click", async () => {
  const citation = document.getElementById("citation-text").textContent.trim();
  try {
    await navigator.clipboard.writeText(citation);
    copyStatus.textContent = "Citation copied.";
  } catch (_) {
    copyStatus.textContent = "Select the citation text above to copy it, or download the BibTeX file.";
  }
});
