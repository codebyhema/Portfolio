function openImage(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  modalImg.src = src;
  modal.style.display = "flex";
}

function closeImage() {
  document.getElementById("imgModal").style.display = "none";
}

const demoVideo = document.getElementById("demoVideo");
const videoModal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeDemo");

document.querySelectorAll("#openDemo").forEach((btn) => {
  btn.addEventListener("click", () => {
    const videoSrc = btn.getAttribute("data-video");
    demoVideo.src = videoSrc;
    videoModal.style.display = "flex";
    demoVideo.play();
  });
});

closeBtn.addEventListener("click", () => {
  videoModal.style.display = "none";
});
// Close when clicking outside video
videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
  }
});
