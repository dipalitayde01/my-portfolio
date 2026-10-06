const glowBoxes = document.querySelectorAll(".hero-copy, .card, .move, .stat-hero, .tabpanel, .pill, .clink");

glowBoxes.forEach((box) => {
	box.addEventListener("pointermove", (event) => {
		const bounds = box.getBoundingClientRect();
		box.style.setProperty("--glow-x", `${event.clientX - bounds.left}px`);
		box.style.setProperty("--glow-y", `${event.clientY - bounds.top}px`);
		box.classList.add("is-glowing");
	});

	box.addEventListener("pointerleave", () => {
		box.classList.remove("is-glowing");
	});
});
