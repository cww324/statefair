const contentTarget = document.querySelector("div.people.sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
            <div class="person gawker"></div>`
    })
}



