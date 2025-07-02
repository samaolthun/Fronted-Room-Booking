// --- FIXED: Remove duplicate hotel and booking declarations, fix missing commas ---

const hotels = {
  1: {
    name: "Buiding STEM",
    location: "Room 306",
    price: 250,
    description: "A luxurious ",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490359854-dfba5d786237?q=80&w=1974&auto=format&fit=crop",
    ],
    mapQuery: " kom kompot, Cambodia",
  },
  2: {
    name: "Angkor Palace Resort",
    location: "Siem Reap, Cambodia",
    price: 180,
    description: "A beautiful resort near the ancient temples of Angkor Wat...",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c891f65a7a78?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586798434339-1a7df1690947?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1974&auto=format&fit=crop",
    ],
    mapQuery: "Siem Reap, Cambodia",
  },
  3: {
    name: "Angkor Palace Resort",
    location: "Siem Reap, Cambodia",
    price: 180,
    description: "A beautiful resort near the ancient temples of Angkor Wat...",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c891f65a7a78?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586798434339-1a7df1690947?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1974&auto=format&fit=crop",
    ],
    mapQuery: "Siem Reap, Cambodia",
  },
  4: {
    name: "Angkor Palace Resort",
    location: "Siem Reap, Cambodia",
    price: 180,
    description: "A beautiful resort near the ancient temples of Angkor Wat...",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c891f65a7a78?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586798434339-1a7df1690947?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1974&auto=format&fit=crop",
    ],
    mapQuery: "Siem Reap, Cambodia",
  },
  5: {
    name: "Angkor Palace Resort",
    location: "Siem Reap, Cambodia",
    price: 180,
    description: "A beautiful resort near the ancient temples of Angkor Wat...",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c891f65a7a78?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586798434339-1a7df1690947?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1974&auto=format&fit=crop",
    ],
    mapQuery: "Siem Reap, Cambodia",
  },
  6: {
    name: "Angkor Palace Resort",
    location: "Siem Reap, Cambodia",
    price: 180,
    description: "A beautiful resort near the ancient temples of Angkor Wat...",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c891f65a7a78?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1586798434339-1a7df1690947?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1974&auto=format&fit=crop",
    ],
    mapQuery: "Siem Reap, Cambodia",
  },
  7: {
    name: "Angkor Palace Resort",
    location: "Siem Reap, Cambodia",
    price: 180,
    description: "A beautiful resort near the ancient temples of Angkor Wat...",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c891f65a7a78?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586798434339-1a7df1690947?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1974&auto=format&fit=crop",
    ],
    mapQuery: "Siem Reap, Cambodia",
  },
};

// let mockBookings = [
//     { id: 'booking1', hotelId: '1', checkin: '2025-08-15', checkout: '2025-08-20', status: 'Upcoming' }
// ];

// let postSuccessAction = null;

// ...existing code...
let mockBookings = [
  {
    id: "booking1",
    hotelId: "1",
    checkin: "2025-08-15",
    checkout: "2025-08-20",
    status: "Upcoming",
  },
];
// let mockBookings = [
//     { id: 'booking1', hotelId: '1', checkin: '2025-08-15', checkout: '2025-08-20', status: 'Upcoming' },
// ];
// let mockBookings = [
//     { id: 'booking1', hotelId: '1', checkin: '2025-08-15', checkout: '2025-08-20', status: 'Upcoming' },
// ];
// let mockBookings = [
//     { id: 'booking1', hotelId: '1', checkin: '2025-08-15', checkout: '2025-08-20', status: 'Upcoming' },
// ];
let postSuccessAction = null;

// --- UI HTML GENERATORS ---
function getModalsHTML() {
  return `
    <!-- Booking Confirmation Modal -->
    <div id="booking-confirmation-modal" class="modal-overlay">
      <div class="modal-box text-left">
        <i data-lucide="x" class="modal-close-icon"></i>    
        <h2 class="text-2xl font-bold text-center mb-4">Confirm Your Booking</h2>
        <div id="booking-summary" class="bg-gray-50 p-4 rounded-lg mb-6 text-sm space-y-2"></div>
        <div class="flex gap-4">
          <button class="modal-close-btn w-full bg-gray-200 font-bold py-3 rounded-lg">Cancel</button>
          <button id="confirm-booking-btn" class="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg">Confirm & Book</button>
        </div>
      </div>
    </div>

    <!-- Edit Booking Modal -->
    <div id="edit-booking-modal" class="modal-overlay">
      <div class="modal-box text-left">
        <i data-lucide="x" class="modal-close-icon"></i>
        <h2 class="text-2xl font-bold text-center mb-4">Edit Your Booking</h2>
        <div class="space-y-4">
          <div>
            <label for="edit-checkin-date" class="block text-xs font-semibold text-gray-500 text-left mb-1">CHECK-IN</label>
            <input id="edit-checkin-date" type="date" class="w-full border-gray-300 rounded-md p-2">
          </div>
          <div>
            <label for="edit-checkout-date" class="block text-xs font-semibold text-gray-500 text-left mb-1">CHECK-OUT</label>
            <input id="edit-checkout-date" type="date" class="w-full border-gray-300 rounded-md p-2">
          </div>
        </div>
        <div class="flex gap-4 mt-6">
          <button class="modal-close-btn w-full bg-gray-200 font-bold py-3 rounded-lg">Cancel</button>
          <button id="save-booking-changes-btn" class="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg">Save Changes</button>
        </div>
      </div>
    </div>

    <!-- Delete Booking Modal -->
    <div id="delete-booking-modal" class="modal-overlay">
      <div class="modal-box">
        <i data-lucide="alert-triangle" class="text-red-500 w-16 h-16 mx-auto"></i>
        <h2 class="text-2xl font-bold mt-4">Are you sure?</h2>
        <p class="text-gray-600 mt-2">This process cannot be undone.</p>
        <div class="flex gap-4 mt-6">
          <button class="modal-close-btn w-full bg-gray-200 font-bold py-2 px-6 rounded-lg">Cancel</button>
          <button id="confirm-delete-btn" class="w-full bg-red-600 text-white font-bold py-2 px-6 rounded-lg">Delete</button>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div id="success-modal" class="modal-overlay">
      <div class="modal-box">
        <i data-lucide="check-circle" class="text-green-500 w-16 h-16 mx-auto"></i>
        <h2 class="text-2xl font-bold mt-4">Success!</h2>
        <p id="success-message" class="text-gray-600 mt-2"></p>
        <button id="success-continue-btn" class="mt-6 bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg">Continue</button>
      </div>
    </div>

    <!-- Message Host Modal -->
    <div id="message-modal" class="modal-overlay">
      <div class="modal-box text-left">
        <i data-lucide="x" class="modal-close-icon"></i>
        <h2 class="text-2xl font-bold text-center mb-4">Message Host</h2>
        <form id="message-form">
          <div class="mb-4">
            <label for="message-text" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea id="message-text" rows="4" class="w-full p-2 border rounded-md" required></textarea>
          </div>
          <button type="submit" class="w-full bg-indigo-600 text-white font-bold py-2 rounded-lg">Send Message</button>
        </form>
      </div>
    </div>

    <!-- Login Modal -->
    <div id="login-modal" class="modal-overlay">
      <div class="modal-box text-left">
        <i data-lucide="x" class="modal-close-icon"></i>
        <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
        <form id="login-form">
          <div class="mb-4">
            <label for="login-email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="login-email" class="w-full p-2 border rounded-md" required>
          </div>
          <div class="mb-4">
            <label for="login-password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" id="login-password" class="w-full p-2 border rounded-md" required>
          </div>
          <button type="submit" class="w-full bg-indigo-600 text-white font-bold py-2 rounded-lg">Login</button>
          <p class="text-center text-sm mt-4">No account? <a href="#" id="show-signup-link" class="text-indigo-600">Sign Up</a></p>
        </form>
      </div>
    </div>

    <!-- Signup Modal -->
    <div id="signup-modal" class="modal-overlay">
      <div class="modal-box text-left">
        <i data-lucide="x" class="modal-close-icon"></i>
        <h2 class="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form id="signup-form">
          <div class="mb-4">
            <label for="signup-name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" id="signup-name" class="w-full p-2 border rounded-md" required>
          </div>
          <div class="mb-4">
            <label for="signup-email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="signup-email" class="w-full p-2 border rounded-md" required>
          </div>
          <div class="mb-4">
            <label for="signup-password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" id="signup-password" class="w-full p-2 border rounded-md" required>
          </div>
          <button type="submit" class="w-full bg-indigo-600 text-white font-bold py-2 rounded-lg">Create Account</button>
          <p class="text-center text-sm mt-4">Already have an account? <a href="#" id="show-login-link" class="text-indigo-600">Login</a></p>
        </form>
      </div>
    </div>
  `;
}


function createHotelCardHTML(hotel, id) {
  return `<div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 hotel-card" data-hotel-id="${id}"><img src="${hotel.images[0]}" alt="${hotel.name}" class="w-full h-48 object-cover"><div class="p-4"><h3 class="font-semibold text-lg">${hotel.name}</h3><p class="text-sm text-gray-500">${hotel.location}</p><p class="text-lg font-bold text-indigo-600 mt-2">$${hotel.price}/night</p></div></div>`;
}

function createBookingCardHTML(booking, hotel) {
  return `<div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"><img src="${hotel.images[0]}" class="w-full md:w-1/3 object-cover h-48 md:h-auto"><div class="p-6 flex-grow flex flex-col"><div class="flex-grow"><span class="text-xs font-semibold uppercase text-green-800 bg-green-100 px-2 py-1 rounded-full">${booking.status}</span><h3 class="font-bold text-xl mt-2">${hotel.name}</h3><div class="text-sm text-gray-600 mt-2"><p><span class="font-medium">Check-in:</span> ${booking.checkin}</p><p><span class="font-medium">Check-out:</span> ${booking.checkout}</p></div></div><div class="mt-4 border-t pt-4 flex gap-2"><button class="edit-booking-btn flex items-center gap-2 bg-gray-200 py-2 px-4 rounded-md text-sm font-semibold" data-booking-id="${booking.id}"><i data-lucide="edit-3" class="w-4 h-4"></i>Edit</button><button class="delete-booking-btn flex items-center gap-2 bg-red-100 text-red-800 py-2 px-4 rounded-md text-sm font-semibold" data-booking-id="${booking.id}"><i data-lucide="trash-2" class="w-4 h-4"></i>Delete</button></div></div></div>`;
}

// --- PAGE RENDERING LOGIC ---
function navigateTo(page, data = null) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(page + "-page").classList.add("active");

  if (page === "home") renderHomePage();
  if (page === "listing") renderListingPage(data);
  if (page === "bookings") renderBookingsPage();

  lucide.createIcons();
  window.scrollTo(0, 0);
}

function renderHomePage() {
  const container = document.getElementById("featured-hotels-container");
  container.innerHTML = "";
  Object.entries(hotels).forEach(
    ([id, hotel]) => (container.innerHTML += createHotelCardHTML(hotel, id))
  );
  addHotelCardListeners();
}

function renderListingPage(filteredHotels = null) {
  const container = document.getElementById("listing-page-cards");
  const hotelsToRender = filteredHotels || hotels;
  container.innerHTML = "";
  if (Object.keys(hotelsToRender).length === 0) {
    container.innerHTML = `<p class="text-center text-gray-500">No hotels found matching your search.</p>`;
    return;
  }
  Object.entries(hotelsToRender).forEach(
    ([id, hotel]) => (container.innerHTML += createHotelCardHTML(hotel, id))
  );
  addHotelCardListeners();
}

function renderBookingsPage() {
  const container = document.getElementById("bookings-container");
  if (mockBookings.length === 0) {
    container.innerHTML = `<p class="text-center text-gray-500">You have no bookings yet.</p>`;
    return;
  }
  container.innerHTML = mockBookings
    .map((booking) => createBookingCardHTML(booking, hotels[booking.hotelId]))
    .join("");
  addBookingActionListeners();
}

function renderDetailsPage(hotelId) {
  const hotel = hotels[hotelId];
  const container = document.getElementById("details-page");
  const today = new Date(),
    tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  container.innerHTML = `
                <div class="container mx-auto py-12 px-4">
                    <h1 class="text-4xl font-bold">${hotel.name}</h1>
                    <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-2">
                            <img src="${
                              hotel.images[0]
                            }" class="w-full h-96 object-cover rounded-lg shadow-md">
                            <h2 class="text-2xl font-bold mt-8">About this Hotel</h2>
                            <p class="mt-4 text-gray-700">${
                              hotel.description
                            }</p>
                            <h2 class="text-2xl font-bold mt-8">Location</h2>
                            <div class="mt-4 h-80 rounded-lg overflow-hidden"><iframe class="w-full h-full" src="https://maps.google.com/maps?q=${encodeURIComponent(
                              hotel.mapQuery
                            )}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"></iframe></div>
                        </div>
                        <div><div class="bg-white p-6 rounded-lg shadow-lg sticky top-24">
                            <p class="text-2xl font-bold">$${
                              hotel.price
                            }<span class="text-base font-normal">/night</span></p>
                            <div class="mt-4"><label class="block font-medium">Check-in</label><input id="checkin-date" type="date" value="${
                              today.toISOString().split("T")[0]
                            }" class="w-full border p-2 rounded mt-1"></div>
                            <div class="mt-4"><label class="block font-medium">Check-out</label><input id="checkout-date" type="date" value="${
                              tomorrow.toISOString().split("T")[0]
                            }" class="w-full border p-2 rounded mt-1"></div>
                            <button onclick="window.location.href='homepage.html'" id="book-now-btn" class="mt-6 w-full bg-indigo-600 text-white font-bold py-3 rounded-lg"> Book Now </button>

                            <button id="message-host-btn" class="mt-2 w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-lg">Message Host</button>
                        </div></div>
                    </div> 
                </div>`;
  addDetailsPageListeners(hotelId);
  navigateTo("details");
}

// --- EVENT LISTENER ATTACHMENT ---
function addHotelCardListeners() {
  document.querySelectorAll(".hotel-card").forEach((card) => {
    card.addEventListener("click", (e) =>
      renderDetailsPage(e.currentTarget.dataset.hotelId)
    );
  });
}

function addDetailsPageListeners(hotelId) {
  document.getElementById("book-now-btn").addEventListener("click", () => {
    const checkin = document.getElementById("checkin-date").value;
    const checkout = document.getElementById("checkout-date").value;
    document.getElementById(
      "booking-summary"
    ).innerHTML = `<p><b>Hotel:</b> ${hotels[hotelId].name}</p><p><b>Check-in:</b> ${checkin}</p><p><b>Check-out:</b> ${checkout}</p>`;
    document.getElementById("confirm-booking-btn").onclick = () => {
      mockBookings.push({
        id: "booking" + Date.now(),
        hotelId,
        checkin,
        checkout,
        status: "Upcoming",
      });
      hideAllModals();
      postSuccessAction = () => navigateTo("bookings");
      showSuccessModal("Booking Successful!");
    };
    showModal("booking-confirmation-modal");
  });
  document.getElementById("message-host-btn").addEventListener("click", () => {
    showModal("message-modal");
  });
}

function addBookingActionListeners() {
  document
    .getElementById("bookings-container")
    .addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (!button) return;
      const bookingId = button.dataset.bookingId;
      if (!bookingId) return;

      if (button.classList.contains("edit-booking-btn")) {
        const booking = mockBookings.find((b) => b.id === bookingId);
        document.getElementById("edit-checkin-date").value = booking.checkin;
        document.getElementById("edit-checkout-date").value = booking.checkout;
        document.getElementById("save-booking-changes-btn").onclick = () => {
          booking.checkin = document.getElementById("edit-checkin-date").value;
          booking.checkout =
            document.getElementById("edit-checkout-date").value;
          hideAllModals();
          navigateTo("bookings");
          showSuccessModal("Your booking has been updated.");
        };
        showModal("edit-booking-modal");
      }
      if (button.classList.contains("delete-booking-btn")) {
        document.getElementById("confirm-delete-btn").onclick = () => {
          mockBookings = mockBookings.filter((b) => b.id !== bookingId);
          hideAllModals();
          navigateTo("bookings");
          showSuccessModal("Your booking has been deleted.");
        };
        showModal("delete-booking-modal");
      }
    });
}

// --- MODAL UTILITIES ---
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = "flex";
  lucide.createIcons();
}

function hideAllModals() {
  document
    .querySelectorAll(".modal-overlay")
    .forEach((m) => (m.style.display = "none"));
}

function showSuccessModal(message) {
  document.getElementById("success-message").textContent = message;
  showModal("success-modal");
}

// --- APP INITIALIZATION ---
function setupEventListeners() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(e.currentTarget.dataset.page);
    });
  });
  document
    .getElementById("login-btn")
    .addEventListener("click", () => showModal("login-modal"));
  document
    .getElementById("signup-btn")
    .addEventListener("click", () => showModal("signup-modal"));

  const modalContainer = document.getElementById("modal-container");
  modalContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains("modal-close-icon") ||
      target.classList.contains("modal-close-btn")
    ) {
      hideAllModals();
    }
    if (target.id === "show-signup-link") {
      e.preventDefault();
      hideAllModals();
      showModal("signup-modal");
    }
    if (target.id === "show-login-link") {
      e.preventDefault();
      hideAllModals();
      showModal("login-modal");
    }
  });

  const loginForm = modalContainer.querySelector("#login-form");
  if (loginForm)
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      hideAllModals();
      showSuccessModal("Logged in successfully!");
    });

  const signupForm = modalContainer.querySelector("#signup-form");
  if (signupForm)
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      hideAllModals();
      showSuccessModal("Account created successfully!");
    });

  const messageForm = modalContainer.querySelector("#message-form");
  if (messageForm)
    messageForm.addEventListener("submit", (e) => {
      e.preventDefault();
      hideAllModals();
      showSuccessModal("Your message has been sent!");
    });

  document
    .getElementById("success-continue-btn")
    .addEventListener("click", () => {
      hideAllModals();
      if (postSuccessAction) postSuccessAction();
    });

  document.getElementById("search-input").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = Object.fromEntries(
      Object.entries(hotels).filter(
        ([id, hotel]) =>
          hotel.name.toLowerCase().includes(searchTerm) ||
          hotel.location.toLowerCase().includes(searchTerm)
      )
    );
    navigateTo("listing", filtered);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("modal-container").innerHTML = getModalsHTML();
  navigateTo("home");
  setupEventListeners();
});
