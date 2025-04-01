const contentTarget = document.querySelector("div.people.food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        contentTarget.innerHTML += `
            <div class="person eater"></div>`
    })
}