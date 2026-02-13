// Security check for SQLi
    if (/[';\-\-]/.test(val) || /OR /i.test(val)) {
        log.style.color = "#ff3e3e";
        log.innerText = ">> SECURITY_PROTOCOL_BLOCK: INJECTION_ATTEMPT";
        return;
    }

    if (val === CONFIG.ADMIN_KEY) {
        document.getElementById('gate-page').style.display = 'none';
        const portal = document.getElementById('portal-animation');
        portal.classList.add('active');
        portal.style.opacity = "1";

        setTimeout(() => {
            portal.classList.remove('active');
            portal.style.display = 'none';
            document.getElementById('cv-page').style.display = 'flex';
        }, 2000);
    } else {
        log.style.color = "#ff3e3e";
        log.innerText = ">> ACCESS_DENIED: INVALID_KEY";
    }
}

function lockVault() { location.reload(); }

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && document.getElementById('gate-page').style.display !== 'none') {
        unlockVault();
    }

});
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 2000); // 2 seconds dial l-hayba ;)
});

