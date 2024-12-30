// Patient
// //Pages
const FindDoctor ={
    template:` <main class="p-4">
            <div class="bg-white p-4 rounded-lg shadow mb-4">
                <input 
                    type="text" 
                    placeholder="Search for doctors..." 
                    class="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Doctor Card 1 -->
                <div class="bg-white p-4 rounded-lg shadow">
                    <div class="flex items-center mb-4">
                        <img src="https://via.placeholder.com/50" alt="Dr. Sarah Wilson" class="rounded-full w-12 h-12 mr-4">
                        <div>
                            <p class="font-medium">Dr. Sarah Wilson</p>
                            <p class="text-sm text-gray-600">Cardiologist</p>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-4">Expert in heart-related conditions and surgeries. 10+ years of experience.</p>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">View Profile</button>
                </div>

                <!-- Doctor Card 2 -->
                <div class="bg-white p-4 rounded-lg shadow">
                    <div class="flex items-center mb-4">
                        <img src="https://via.placeholder.com/50" alt="Dr. James Smith" class="rounded-full w-12 h-12 mr-4">
                        <div>
                            <p class="font-medium">Dr. James Smith</p>
                            <p class="text-sm text-gray-600">Dermatologist</p>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-4">Specialist in skin care and dermatological procedures. 8+ years of experience.</p>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">View Profile</button>
                </div>

                <!-- Doctor Card 3 -->
                <div class="bg-white p-4 rounded-lg shadow">
                    <div class="flex items-center mb-4">
                        <img src="https://via.placeholder.com/50" alt="Dr. Emily Johnson" class="rounded-full w-12 h-12 mr-4">
                        <div>
                            <p class="font-medium">Dr. Emily Johnson</p>
                            <p class="text-sm text-gray-600">Pediatrician</p>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-4">Dedicated to child healthcare and wellness. 12+ years of experience.</p>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">View Profile</button>
                </div>
            </div>
            <br>
            <br>
        </main>`
}
const PatientHome = {
    template: `
      <main>
            <div class="grid grid-cols-2 gap-4 mb-6">
                <button class="bg-white p-4 rounded-lg shadow flex items-center justify-center space-x-2">
                    <i class="far fa-calendar text-blue-500"></i>
                    <span>Book Appointment</span>
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
// // Components
const PatientBottomNav={
    template:`
            <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <ul class="flex justify-around py-3">
                <li>
                    <a href="#" class="flex flex-col items-center text-blue-500">
                        <i class="fas fa-home"></i>
                        <span class="text-xs mt-1">Home</span>
                    </a>
                </li>
                 <li>
                 <router-link to="/doclist">  <a href="#" class="flex flex-col items-center text-blue-500">
                        <i class="fas fa-user-md"></i>
                        <span class="text-xs mt-1">Doctors</span>
                    </a></router-link>
                  
                </li>
                <li>
                    <a href="#" class="flex flex-col items-center text-gray-500">
                        <i class="far fa-calendar"></i>
                        <span class="text-xs mt-1">Appointments</span>
                    </a>
                </li>
               
                <li>
                    <a href="#" class="flex flex-col items-center text-gray-500">
                        <i class="far fa-user"></i>
                        <span class="text-xs mt-1">Profile</span>
                    </a>
                </li>
            </ul>
        </nav>
    `
}
const PatientTopBar={
    template:`
            <div class="bg-white p-4 flex justify-between items-center shadow-sm">
            <h1 class="text-lg font-semibold">DocApp</h1>
            <button class="h-6 w-6 text-gray-500">
              <span class="material-symbols-outlined">
notifications
</span>
                    <path d="M21 2L3 22M3 2l18 18"></path>
                </svg>
            </button>
        </div>
        <br>
    `
}
 // Set up the routes
 const routes = [
    { path: '/', component: PatientHome },
    { path: '/doclist', component: FindDoctor },
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