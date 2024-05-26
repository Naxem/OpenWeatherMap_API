function aff_details() {
    let details = document.getElementById('details')
    let details_btn = document.getElementById('toggle-button')
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden')
        details_btn.textContent = 'Moins de détails'
    } else {
        details.classList.add('hidden')
        details_btn.textContent = 'Plus de détails'
    }
}