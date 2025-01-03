// Patient
// //Pages
const Register = {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      role: "patient", // Default role
      phone_number: "",
      address: "",
      profile_picture: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await fetch(`${window.config.apiBaseUrl}/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            role: this.role,
            phone_number: this.phone_number || null,
            address: this.address || null,
            profile_picture: this.profile_picture || null,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Registration failed");
        }

        const data = await response.json();
        console.log("Registration successful:", data.message);
        this.$router.push("/login"); // Redirect to login page
      } catch (err) {
        this.error = err.message;
      }
    },
  },
  template: `
    <div class="bg-white p-6 shadow-lg max-w-md mx-auto mt-12 rounded-lg">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-6">DocKen</h1>
      <h2 class="text-xl font-bold mb-4">Register</h2>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label class="block text-gray-700">First Name</label>
          <input
            type="text"
            v-model="first_name"
            class="w-full border rounded-lg px-4 py-2"
            placeholder="Enter your first name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Last Name</label>
          <input
            type="text"
            v-model="last_name"
            class="w-full border rounded-lg px-4 py-2"
            placeholder="Enter your last name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input
            type="email"
            v-model="email"
            class="w-full border rounded-lg px-4 py-2"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <input
            type="password"
            v-model="password"
            class="w-full border rounded-lg px-4 py-2"
            placeholder="Enter your password"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Role</label>
          <select v-model="role" class="w-full border rounded-lg px-4 py-2">
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Phone Number</label>
          <input
            type="text"
            v-model="phone_number"
            class="w-full border rounded-lg px-4 py-2"
            placeholder="Enter your phone number (optional)"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Address</label>
          <textarea
            v-model="address"
            class="w-full border rounded-lg px-4 py-2"
            placeholder="Enter your address (optional)"
          ></textarea>
        </div>
        <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
          Register
        </button>
      </form>
    </div>
    <br><br>
  `,
};

const Login = {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch(`${window.config.apiBaseUrl}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: this.email, password: this.password }),
        });

        if (!response.ok) {
          throw new Error("Invalid email or password");
        }

        const data = await response.json();

        // Save the token in localStorage
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user_id", data.user_id);

        // Trigger the global 'login' event
        window.dispatchEvent(new Event("login"));

        // Redirect to the home page
        this.$router.push("/");
      } catch (err) {
        this.error = err.message;
      }
    },
  },
  template: `
    <div class="bg-white p-6 shadow-lg max-w-md mx-auto mt-12 rounded-lg">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-6">DocKen</h1>
      <h2 class="text-xl font-bold mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input
            type="email"
            v-model="email"
            class="w-full border rounded-lg px-4 py-2"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <input
            type="password"
            v-model="password"
            class="w-full border rounded-lg px-4 py-2"
            placeholder="Enter your password"
            required
          />
        </div>
        <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
          Login
        </button>
      </form>
    </div>
  `,
};


const PatientProfile = {
  data() {
    return {
      user: null,
      patientProfile: null,
      patientProfileExists: false,
      loading: true,
      error: null
    };
  },
  mounted() {
    this.fetchPatientProfile();
  },
  methods: {
    async fetchPatientProfile() {
      const uid = localStorage.getItem('user_id');

      try {
        const response = await fetch(`${window.config.apiBaseUrl}/patient-profile/${uid}`);
        const data = await response.json();

        if (data.patient_profile_exists) {
          this.user = data.user;
          this.patientProfile = data.user_patient_profile;
          this.patientProfileExists = true;
        } else {
          this.user = data.user;
          this.patientProfileExists = false;
        }
      } catch (err) {
        this.error = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    }
  },
  template: `
    <div v-if="loading" class="text-center py-4">
      <p>Loading...</p>
    </div>

    <div v-else>
      <div class="bg-white p-6 shadow-sm mb-4">
        <!-- Profile Info Section -->
        <div class="flex items-center">
          <img v-if="user.profile_picture" :src="user.profile_picture" alt="User" class="rounded-full w-24 h-24 mr-4">
          <img v-else src="https://via.placeholder.com/150?text=No+Image" alt="Placeholder" class="rounded-full w-24 h-24 mr-4">
          <div>
            <h2 class="text-xl font-bold">{{ user.first_name }} {{ user.last_name }}</h2>
            <p class="text-gray-600">{{ user.email }}</p>
            <p class="text-gray-600">{{ user.phone_number || 'Phone not available' }}</p>
          </div>
        </div>
      </div>

      <div v-if="patientProfileExists" class="grid grid-cols-2 gap-4 mb-6">
        <button class="bg-white p-4 rounded-lg shadow flex items-center justify-center space-x-2">
          <i class="fa fa-user-md text-blue-500"></i>
          <span>Saved Doctors</span>
        </button>
        <button class="bg-green-50 p-4 rounded-lg shadow flex items-center justify-center space-x-2">
          <i class="far fa-file-alt text-green-500"></i>
          <span>View Reports</span>
        </button>
      </div>

      <div v-else>
        <p class="text-gray-600">No patient profile found. Would you like to <a href="/register" class="text-blue-500">register as a patient?</a></p>
      </div>
    </div>

    <div v-if="error" class="text-red-500 text-center py-4">
      <p>{{ error }}</p>
    </div>
  `
};

const ViewAppointment={
  template: `
  <main>
  <br>
        

        <div class="bg-white p-4 rounded-lg shadow mb-6">
            <h2 class="text-lg font-semibold mb-2">Upcoming Appointment</h2>
            <div class="flex justify-between items-center">
                <div>
                    <p class="font-medium">Dr. Sarah Wilson</p>
                    <p class="text-sm text-gray-600">Today at 14:30</p>
                </div>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">#A45</span>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="text-sm text-gray-600 mb-1">Current Token</h3>
                <p class="text-2xl font-bold">A43</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="text-sm text-gray-600 mb-1">Est. Wait Time</h3>
                <p class="text-2xl font-bold">15 min</p>
            </div>
        </div>
    </main>
      <!-- Past Appointments Section -->
        <div class="bg-white p-6 shadow-sm mb-4">
            <h2 class="text-lg font-semibold mb-4">Past Appointments</h2>
             
            <div class="flex flex-col gap-4">
                <!-- Appointment 1 -->
                <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center">
                    <div>
                        <h3 class="font-semibold">Dr. Sarah Wilson</h3>
                        <p class="text-sm text-gray-600">Cardiologist</p>
                        <p class="text-sm text-gray-500">March 20, 2024 | 10:30 AM</p>
                    </div>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Rebook</button>
                </div>
                <!-- Appointment 2 -->
                <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center">
                    <div>
                        <h3 class="font-semibold">Dr. Emily Johnson</h3>
                        <p class="text-sm text-gray-600">Pediatrician</p>
                        <p class="text-sm text-gray-500">February 15, 2024 | 2:00 PM</p>
                    </div>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Rebook</button>
                </div>
            </div>
        </div>
        <br>
        <br>

`
};
const FindDoctor = {
    data() {
      return {
        doctors: [], // Original list of doctors
        filteredDoctors: [], // Filtered list of doctors
        loading: true, // Loading state
        error: null, // Error state
        searchQuery: "", // Search input value
        specializationFilter: "", // Selected specialization
        locationFilter: "", // Selected location
        availabilityFilter: "", // Selected availability
      };
    },
    methods: {
      async fetchDoctors() {
        try {
          const response = await fetch(`${window.config.apiBaseUrl}/doctors`); // Replace with your API endpoint
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          this.doctors = await response.json();
          this.filteredDoctors = this.doctors; // Initialize filtered list
        } catch (err) {
          this.error = err.message;
        } finally {
          this.loading = false;
        }
      },
      applyFilters() {
        console.log("Applying filters...");
        console.log("Search Query:", this.searchQuery);
        console.log("Specialization:", this.specializationFilter);
        console.log("Location:", this.locationFilter);
        console.log("Availability:", this.availabilityFilter);
      
        this.filteredDoctors = this.doctors.filter((doctor) => {
          const matchesSearchQuery = doctor.full_name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
          const matchesSpecialization =
            !this.specializationFilter ||
            doctor.specialization === this.specializationFilter;
          const matchesLocation =
            !this.locationFilter || doctor.location === this.locationFilter;
          const matchesAvailability =
            !this.availabilityFilter || doctor.availability === this.availabilityFilter;
      
          return (
            matchesSearchQuery &&
            matchesSpecialization &&
            matchesLocation &&
            matchesAvailability
          );
        });
      
        console.log("Filtered Doctors:", this.filteredDoctors);
      },
      
    },
    watch: {
      // Watchers for filters to re-apply them whenever a filter changes
      searchQuery: "applyFilters",
      specializationFilter: "applyFilters",
      locationFilter: "applyFilters",
      availabilityFilter: "applyFilters",
    },
    created() {
      this.fetchDoctors();
    },
    template: `
      <!-- Search and Filters -->
      <div class="bg-white p-4 shadow-sm mb-4">
        <input
          type="text"
          placeholder="Search doctors, clinics..."
          class="w-full px-4 py-2 border rounded-lg mb-4"
          v-model="searchQuery"
        />
        <div class="flex flex-wrap gap-2">
          <select
            class="border rounded-lg px-4 py-2"
            v-model="specializationFilter"
          >
            <option value="">Specializations</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Neurology">Neurology</option>
          </select>
          <select class="border rounded-lg px-4 py-2" v-model="locationFilter">
            <option value="">Location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
          </select>
          <select class="border rounded-lg px-4 py-2" v-model="availabilityFilter">
            <option value="">Availability</option>
            <option value="Available Now">Available Now</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="This Week">This Week</option>
          </select>
        </div>
      </div>
  
      <!-- Doctor List -->
      <main class="p-4">
        <h2 class="text-lg font-semibold mb-4">Results</h2>
        <div v-if="loading" class="text-center text-gray-500">Loading...</div>
        <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
        <div v-else-if="filteredDoctors.length === 0" class="text-center text-gray-500">
          No doctors found.
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="doctor in filteredDoctors"
            :key="doctor.id"
            class="bg-white p-4 rounded-lg shadow"
          >
           <img 
            :src="doctor.image || './docprofile.png'" 
            alt="Doctor" 
            class="rounded-full w-24 h-24 mx-auto mb-4 border-4 border-blue-500 object-cover"
          />
            <h3 class="text-center text-lg font-bold">{{ doctor.full_name }}</h3>
            <p class="text-center text-gray-600">{{ doctor.specialization }}</p>
            <p class="text-sm text-gray-500 mt-2 text-center">
              {{ doctor.description }}
            </p>
            <div class="mt-4 flex justify-center">
              <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </main>
    `,
  };
  
  
const PatientHome = {
    data() {
      return {
        doctors: [], // List of all doctors
        filteredDoctors: [], // Filtered list of doctors based on filters
        specializationFilter: "", // Current specialization filter
        error: null, // Error message, if any
        loading: true, // Loading state for API calls
      };
    },
    methods: {
      // Fetch doctors from the backend
      async fetchDoctors() {
        try {
          const response = await fetch(`${window.config.apiBaseUrl}/doctors`); // Replace with your API endpoint
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          this.doctors = await response.json();
          this.filteredDoctors = this.doctors; // Initialize filtered list
        } catch (err) {
          this.error = err.message;
        } finally {
          this.loading = false;
        }
      },
      // Apply filters to doctor list
      applyFilters() {
        this.filteredDoctors = this.doctors.filter((doctor) => {
          const matchesSpecialization =
            !this.specializationFilter ||
            doctor.specialization.toLowerCase() ===
              this.specializationFilter.toLowerCase();
          return matchesSpecialization;
        });
      },
      // Set the specialization filter and apply it
      setFilter(specialization) {
        this.specializationFilter = specialization;
        this.applyFilters();
      },
    },
    mounted() {
      // Fetch doctors when the component is mounted
      this.fetchDoctors();
    },
    template: `
      <div>
        <!-- Categories -->
<div class="bg-white p-4 overflow-x-auto whitespace-nowrap shadow-sm mb-4">
  <button 
    class="px-4 py-2 rounded-full mr-2"
    :class="specializationFilter === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'"
    @click="setFilter('')"
  >
    All
  </button> 
  <button 
    v-for="specialization in ['Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics', 'Neurology']"
    :key="specialization"
    class="px-4 py-2 rounded-full mr-2"
    :class="specializationFilter === specialization ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'"
    @click="setFilter(specialization)"
  >
    {{ specialization }}
  </button> 
</div>

  
        <!-- Doctor Cards -->
    <main class="px-6">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800">Featured Doctors</h2>
      <div v-if="loading" class="text-center text-gray-500">Loading...</div>
      <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>
      <div v-else-if="filteredDoctors.length === 0" class="text-center text-gray-500">No doctors found for the selected specialization.</div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="doctor in filteredDoctors" 
          :key="doctor.id"
          class="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          <img 
            :src="doctor.image || './docprofile.png'" 
            alt="Doctor" 
            class="rounded-full w-24 h-24 mx-auto mb-4 border-4 border-blue-500 object-cover"
          />
          <h3 class="text-center text-lg font-bold text-gray-800">{{ doctor.full_name }}</h3>
          <p class="text-center text-gray-600">{{ doctor.specialization }}</p>
          <p class="text-center text-gray-800 font-medium">₹ {{ doctor.consultation_fee }}</p>
          <p class="text-sm text-gray-500 mt-4 text-center">{{ doctor.description || '' }}</p>
          <div class="mt-6 flex justify-center">
   
          </div>
        </div>
      </div>
    </main>

    <!-- Health Tips Section -->
    <section class="px-6 py-8 mt-8 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800">Health Tips</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          class="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          v-for="tip in ['Stay Hydrated', 'Regular Exercise', 'Healthy Eating']" 
          :key="tip"
        >
          <h3 class="font-semibold text-gray-800 mb-2">{{ tip }}</h3>
          <p class="text-sm text-gray-600">
            {{ tip === 'Stay Hydrated' ? 'Drink at least 8 glasses of water daily to stay healthy.' : 
              tip === 'Regular Exercise' ? 'Engage in physical activities for at least 30 minutes a day.' : 
              'Include fruits and vegetables in your diet for better health.' }}
          </p>
        </div>
      </div>
    </section>
  </div>
  <br><br>
`,
  };

const PatientBottomNav = {
    template: `
      <div>
        <!-- Bottom Nav for Logged-in Users -->
        <nav v-if="isLoggedIn" class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <ul class="flex justify-around py-3">
            <li>
              <router-link to="/" class="flex flex-col items-center" :class="{ 'text-blue-500': isActive('/') }">
                <i class="fas fa-home"></i>
                <span class="text-xs mt-1">Home</span>
              </router-link>
            </li>
            <li>
              <router-link to="/view-appointment" class="flex flex-col items-center" :class="{ 'text-blue-500': isActive('/view-appointment') }">
                <i class="far fa-calendar"></i>
                <span class="text-xs mt-1">Appointments</span>
              </router-link>
            </li>
            <li>
              <router-link to="/notifications" class="flex flex-col items-center" :class="{ 'text-blue-500': isActive('/notifications') }">
                <i class="fa fa-bell"></i>
                <span class="text-xs mt-1">Notifications</span>
              </router-link>
            </li>
            <li>
              <router-link to="/profile" class="flex flex-col items-center" :class="{ 'text-blue-500': isActive('/profile') }">
                <i class="fa fa-user"></i>
                <span class="text-xs mt-1">Profile</span>
              </router-link>
            </li>
          </ul>
        </nav>
  
        <!-- Bottom Nav for Guests -->
        <nav v-else class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <ul class="flex justify-around py-3">
            <li>
              <router-link to="/login" class="flex flex-col items-center" :class="{ 'text-blue-500': isActive('/login') }">
                <i class="fa fa-sign-in-alt"></i>
                <span class="text-xs mt-1">Login</span>
              </router-link>
            </li>
            <li>
              <router-link to="/register" class="flex flex-col items-center" :class="{ 'text-blue-500': isActive('/register') }">
                <i class="fa fa-user-plus"></i>
                <span class="text-xs mt-1">Register</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    `,
    setup() {
      const route = VueRouter.useRoute();
      const isLoggedIn = Vue.ref(!!localStorage.getItem("token"));
  
      // Monitor login state changes
      const updateLoginState = () => {
        isLoggedIn.value = !!localStorage.getItem("token");
      };
  
      // Listen to custom login/logout events
      window.addEventListener("login", updateLoginState);
      window.addEventListener("logout", updateLoginState);
  
      const isActive = (path) => route.path === path;
  
      return {
        isLoggedIn,
        isActive,
      };
    },
  };
  const PatientTopBar = {
    template: `
      <div v-if="isLoggedIn" class="bg-white p-4 flex justify-between items-center shadow-sm">
        <h1 class="text-lg font-semibold">DocKen</h1>
        <router-link to="/search">
          <button class="h-6 w-6 text-gray-500">
            <span class="material-symbols-outlined">
              search
            </span>
          </button>
        </router-link>
      </div>
    `,
    setup() {
      const isLoggedIn = Vue.ref(!!localStorage.getItem("token")); // Check initial login state
  // Listen to custom login/logout events
  const updateLoginState = () => {
    isLoggedIn.value = !!localStorage.getItem("token");
  };
  window.addEventListener("login", updateLoginState);
  window.addEventListener("logout", updateLoginState);

    
      return {
        isLoggedIn,
      };
    },
  };
  
 // Set up the routes
const routes = [
  { path: '/', component: PatientHome ,  beforeEnter: (to, from, next) => {
    const token = localStorage.getItem("token");
    if (!!token) {
      next(); // Proceed to the home page
    } else {
      next('/login');// Redirect to login page if not logged in
    }
  }},
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/search', component: FindDoctor },
    { path: '/view-appointment', component: ViewAppointment},    
    { path: '/profile', component: PatientProfile}
  ];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(), // or createWebHistory() for HTML5 History mode
    routes
  });

 
const app = Vue.createApp({
    data() {
        return {
            appInfo: 'This is my first Vue 3 App, Hi from Abhay :)',
            message: 'Hello, Vue 3 with CDN!',
        };
    },
    components: { 
        'patient-bottom-nav':PatientBottomNav,
        'patient-top-bar':PatientTopBar,
    }
});
app.use(router);
// app.use(router);
app.mount('#app');