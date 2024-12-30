// Patient
// //Pages
const ViewAppointment={
  template: `
  <main>
  <br>
        <div class="grid grid-cols-2 gap-4 mb-6">
            <button class="bg-white p-4 rounded-lg shadow flex items-center justify-center space-x-2">
                <i class="far fa-calendar text-blue-500"></i>
                <span>History</span>
            </button>
            <button class="bg-green-50 p-4 rounded-lg shadow flex items-center justify-center space-x-2">
                <i class="far fa-file-alt text-green-500"></i>
                <span>View Reports</span>
            </button>
        </div>

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

`
};
const FindDoctor ={
    template:`  <!-- Search and Filters -->
        <div class="bg-white p-4 shadow-sm mb-4">
            <input type="text" placeholder="Search doctors, clinics..." class="w-full px-4 py-2 border rounded-lg mb-4" />
            <div class="flex flex-wrap gap-2">
                <select class="border rounded-lg px-4 py-2">
                    <option value="">Specializations</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Neurology">Neurology</option>
                </select>
                <select class="border rounded-lg px-4 py-2">
                    <option value="">Location</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Houston">Houston</option>
                </select>
                <select class="border rounded-lg px-4 py-2">
                    <option value="">Availability</option>
                    <option value="Available Now">Available Now</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Week">This Week</option>
                </select>
            </div>
        </div>

        <!-- Categories -->
        <div class="bg-white p-4 overflow-x-auto whitespace-nowrap shadow-sm mb-4">
            <button class="px-4 py-2 rounded-full bg-blue-500 text-white mr-2">All</button>
            <button class="px-4 py-2 rounded-full bg-gray-200 text-gray-700 mr-2">Cardiology</button>
            <button class="px-4 py-2 rounded-full bg-gray-200 text-gray-700 mr-2">Dermatology</button>
            <button class="px-4 py-2 rounded-full bg-gray-200 text-gray-700 mr-2">Pediatrics</button>
            <button class="px-4 py-2 rounded-full bg-gray-200 text-gray-700 mr-2">Orthopedics</button>
            <button class="px-4 py-2 rounded-full bg-gray-200 text-gray-700 mr-2">Neurology</button>
        </div>

        <!-- Top Doctors Section -->
        <main class="p-4">
            <h2 class="text-lg font-semibold mb-4">Results</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Doctor Card 1 -->
                <div class="bg-white p-4 rounded-lg shadow">
                    <img src="https://th.bing.com/th/id/OIP.RPRpZ0mTLLrHDqxz4rhZuwHaHp?w=178&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Doctor" class="rounded-full w-24 h-24 mx-auto mb-4">
                    <h3 class="text-center text-lg font-bold">Dr. Sarah Wilson</h3>
                    <p class="text-center text-gray-600">Cardiologist</p>
                    <p class="text-sm text-gray-500 mt-2 text-center">"Providing compassionate care with cutting-edge treatments."</p>
                    <div class="mt-4 flex justify-center">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">View Profile</button>
                    </div>
                </div>

                <!-- Doctor Card 2 -->
                <div class="bg-white p-4 rounded-lg shadow">
                    <img src="https://th.bing.com/th/id/OIP.xmb76Waeoi8-DkLoJHw7zgHaH5?w=170&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Doctor" class="rounded-full w-24 h-24 mx-auto mb-4">
                    <h3 class="text-center text-lg font-bold">Dr. James Smith</h3>
                    <p class="text-center text-gray-600">Dermatologist</p>
                    <p class="text-sm text-gray-500 mt-2 text-center">"Helping you achieve healthy and glowing skin."</p>
                    <div class="mt-4 flex justify-center">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">View Profile</button>
                    </div>
                </div>

                <!-- Doctor Card 3 -->
                <div class="bg-white p-4 rounded-lg shadow">
                    <img src="https://via.placeholder.com/150" alt="Doctor" class="rounded-full w-24 h-24 mx-auto mb-4">
                    <h3 class="text-center text-lg font-bold">Dr. Emily Johnson</h3>
                    <p class="text-center text-gray-600">Pediatrician</p>
                    <p class="text-sm text-gray-500 mt-2 text-center">"Caring for your child's health and happiness."</p>
                    <div class="mt-4 flex justify-center">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">View Profile</button>
                    </div>
                </div>
            </div>
        </main>
        <br>
        <br>
`
}
const PatientHome = {
    template: `
      
        <!-- Categories -->
        <div class="bg-white p-4 overflow-x-auto whitespace-nowrap shadow-sm mb-4">
            <button class="px-4 py-2 rounded-full bg-blue-500 text-white mr-2">All</button>
            <button class="px-4 py-2 rounded-full bg-gray-200 text-gray-700 mr-2">Cardiology</button>
            <button class="px-4 py-2 rounded-full bg-gray-200 text-gray-700 mr-2">Dermatology</button>
            <button class="px-4 py-2 rounded-full bg-gray-200 text-gray-700 mr-2">Pediatrics</button>
            <button class="px-4 py-2 rounded-full bg-gray-200 text-gray-700 mr-2">Orthopedics</button>
            <button class="px-4 py-2 rounded-full bg-gray-200 text-gray-700 mr-2">Neurology</button>
        </div>
        <main>
       

            <!-- <div class="bg-white p-4 rounded-lg shadow mb-6">
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
        </main> -->

        <!-- Doctor Cards -->
        <main class="p-4">
            <h2 class="text-lg font-semibold mb-4">Featured Doctors</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Doctor Card 1 -->
                <div class="bg-white p-4 rounded-lg shadow">
                    <img src="data:image/jpeg;base64,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" alt="Doctor" class="rounded-full w-24 h-24 mx-auto mb-4">
                    <h3 class="text-center text-lg font-bold">Dr. Sarah Wilson</h3>
                    <p class="text-center text-gray-600">Cardiologist</p>
                    <p class="text-sm text-gray-500 mt-2 text-center">"Providing compassionate care with cutting-edge treatments."</p>
                    <div class="mt-4 flex justify-center">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">View Profile</button>
                    </div>
                </div>

                <!-- Doctor Card 2 -->
                <div class="bg-white p-4 rounded-lg shadow">
                    <img src="data:image/jpeg;base64,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" alt="Doctor" class="rounded-full w-24 h-24 mx-auto mb-4">
                    <h3 class="text-center text-lg font-bold">Dr. James Smith</h3>
                    <p class="text-center text-gray-600">Dermatologist</p>
                    <p class="text-sm text-gray-500 mt-2 text-center">"Helping you achieve healthy and glowing skin."</p>
                    <div class="mt-4 flex justify-center">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">View Profile</button>
                    </div>
                </div>

                <!-- Doctor Card 3 -->
                <div class="bg-white p-4 rounded-lg shadow">
                    <img src="https://th.bing.com/th/id/OIP.RPRpZ0mTLLrHDqxz4rhZuwHaHp?w=178&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Doctor" class="rounded-full w-24 h-24 mx-auto mb-4">
                    <h3 class="text-center text-lg font-bold">Dr. Emily Johnson</h3>
                    <p class="text-center text-gray-600">Pediatrician</p>
                    <p class="text-sm text-gray-500 mt-2 text-center">"Caring for your child's health and happiness."</p>
                    <div class="mt-4 flex justify-center">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">View Profile</button>
                    </div>
                </div>
            </div>
        </main>
<!-- Health Tips Section -->
        <section class="p-4 mt-4 bg-white shadow-sm rounded-lg">
            <h2 class="text-lg font-semibold mb-4">Health Tips</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="bg-blue-100 p-4 rounded-lg">
                    <h3 class="font-semibold">Stay Hydrated</h3>
                    <p class="text-sm text-gray-600">Drink at least 8 glasses of water daily to stay healthy.</p>
                </div>
                <div class="bg-blue-100 p-4 rounded-lg">
                    <h3 class="font-semibold">Regular Exercise</h3>
                    <p class="text-sm text-gray-600">Engage in physical activities for at least 30 minutes a day.</p>
                </div>
                <div class="bg-blue-100 p-4 rounded-lg">
                    <h3 class="font-semibold">Healthy Eating</h3>
                    <p class="text-sm text-gray-600">Include fruits and vegetables in your diet for better health.</p>
                </div>
            </div>
        </section>
        <br>
        <br>

    `
  };
// // Components
const PatientBottomNav = {
    template: `
      <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
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
    `,
    setup() {
      const route = VueRouter.useRoute();
  
      const isActive = (path) => route.path === path;
  
      return {
        isActive,
      };
    },
  };
  
const PatientTopBar={
    template:`
            <div class="bg-white p-4 flex justify-between items-center shadow-sm">
            <h1 class="text-lg font-semibold">DocKen</h1>
            <router-link to="/search">
            <button class="h-6 w-6 text-gray-500">
              <span class="material-symbols-outlined">
search
</span>
                    <path d="M21 2L3 22M3 2l18 18"></path>
      
            </button>
            </router-link>
        </div>
      
    `
}
 // Set up the routes
 const routes = [
    { path: '/', component: PatientHome },
    { path: '/search', component: FindDoctor },
    { path: '/view-appointment', component: ViewAppointment}
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