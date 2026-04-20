const closeRadioBtn = document.getElementById('close-btn');
document.querySelectorAll('.nav-anchor').forEach(anchor => {
    anchor.onclick = () => closeRadioBtn.checked = true;
});

