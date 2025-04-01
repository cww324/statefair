const contentTarget = document.querySelectorAll(".rides .food .games .sideshow")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", () => {
        const contentTargets = document.querySelectorAll(".rides, .food, .games, .sideshow")

        contentTargets.forEach(section => {
            section.innerHTML += `<div class="person bigSpender"></div>`
        })
    })
}


