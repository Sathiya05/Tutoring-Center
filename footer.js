// Tutoring Center - Footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer"); //[cite: 2]
  if (!footer) return; //[cite: 2]

  footer.innerHTML = `
<footer class="w-full transition-colors duration-500 bg-slate-50 dark:bg-[#0F172A] border-t border-gray-200 dark:border-slate-800"> <!--[cite: 2]-->
  
  <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 grid gap-12 grid-cols-1 md:grid-cols-12"> <!--[cite: 2]-->

    <!-- Brand & Bio Section -->
    <div class="md:col-span-12 lg:col-span-4 pr-0 lg:pr-8"> <!--[cite: 2]-->
    
               <a href="index.html" class="relative z-[60] flex items-center gap-3 group shrink-0"> <!--[cite: 2]-->
                    <div
                        class="w-11 h-11 rounded-xl bg-[#5ba0d9] flex items-center justify-center shadow-lg shadow-[#5ba0d9]/20">
                        <i class="fa-solid fa-graduation-cap text-white text-lg"></i>
                    </div>
                    <div class="flex flex-col">
                        <span
                            class="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
                            Tutor<span class="text-[#5ba0d9]">Center</span>
                        </span>
                        <span
                            class="text-[9px] tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 font-bold leading-none mt-1">
                            Student Success
                        </span>
                    </div>
                </a>
                <br>
      <p class="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed mb-6"> <!--[cite: 2]-->
        We bring professional tutoring services directly to your students. From comprehensive study programs to expert test preparation, experience academic growth in a supportive environment.
      </p>
      
      <!-- Social Media Icons -->
      <div class="mt-8 flex gap-3"> <!--[cite: 2]-->
        <a href="https://facebook.com/tutorcenter" target="_blank" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-[#5ba0d9] hover:border-[#5ba0d9] hover:text-white dark:hover:bg-[#5ba0d9] dark:hover:text-white shadow-sm">
          <i class="fa-brands fa-facebook-f text-lg"></i>
        </a>
        <a href="https://instagram.com/tutorcenter" target="_blank" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-[#5ba0d9] hover:border-[#5ba0d9] hover:text-white dark:hover:bg-[#5ba0d9] dark:hover:text-white shadow-sm">
          <i class="fa-brands fa-instagram text-lg"></i>
        </a>
        <a href="tel:+1234567890" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-[#5ba0d9] hover:border-[#5ba0d9] hover:text-white dark:hover:bg-[#5ba0d9] dark:hover:text-white shadow-sm">
          <i class="fa-solid fa-phone text-lg"></i>
        </a>
      </div>
    </div>

    <!-- Navigation Links -->
    <div class="md:col-span-4 lg:col-span-2"> <!--[cite: 2]-->
      <h3 class="text-sm font-bold mb-6 uppercase tracking-widest text-slate-900 dark:text-white border-b-2 inline-block pb-2 border-[#5ba0d9]">Navigation</h3> <!--[cite: 2]-->
      <ul class="space-y-3 text-sm font-semibold"> <!--[cite: 2]-->
        <li><a href="about.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">About Us</a></li>
        <li><a href="courses.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">All Programs</a></li>
        <li><a href="resources.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Resources</a></li>
        <li><a href="contact.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Contact</a></li>
      </ul>
    </div>

    <!-- Services Links -->
    <div class="md:col-span-4 lg:col-span-2"> <!--[cite: 2]-->
      <h3 class="text-sm font-bold mb-6 uppercase tracking-widest text-slate-900 dark:text-white border-b-2 inline-block pb-2 border-[#5ba0d9]">Courses</h3> <!--[cite: 2]-->
      <ul class="space-y-3 text-sm font-semibold"> <!--[cite: 2]-->
        <li><a href="courses.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Mathematics</a></li>
        <li><a href="courses.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Science & STEM</a></li>
        <li><a href="courses.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Test Preparation</a></li>
        <li><a href="courses.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Language Arts</a></li>
      </ul>
    </div>

    <!-- Newsletter Section -->
    <div class="md:col-span-4 lg:col-span-4"> <!--[cite: 2]-->
      <h3 class="text-sm font-bold mb-6 uppercase tracking-widest text-slate-900 dark:text-white border-b-2 inline-block pb-2 border-[#5ba0d9]">Education Updates</h3> <!--[cite: 2]-->
      <p class="text-sm font-medium text-slate-600 dark:text-slate-400 mb-5 leading-relaxed"> <!--[cite: 2]-->
        Subscribe to receive updates on study tips, new course offerings, and exclusive tutoring resources directly to your inbox.
      </p>

      <form class="flex flex-col gap-3" id="newsletterForm"> <!--[cite: 2]-->
        <div class="relative">
          <input type="email" required placeholder="Enter your email address..." class="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-gray-200 dark:border-slate-800 focus:outline-none focus:border-[#5ba0d9] dark:focus:border-[#5ba0d9] transition-all font-medium text-sm shadow-sm"> <!--[cite: 2]-->
        </div>
        <button type="submit" class="w-full py-3.5 rounded-xl font-bold text-sm bg-[#5ba0d9] dark:bg-[#5ba0d9] text-white dark:text-black transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-black/5 dark:shadow-[#5ba0d9]/10 flex items-center justify-center gap-2"> <!--[cite: 2]-->
          <span>Subscribe Now</span>
          <i class="fa-solid fa-paper-plane text-xs"></i>
        </button>
      </form>
    </div>
  </div>

  <!-- Bottom Copyright Bar -->
  <div class="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0F172A] transition-colors duration-500"> <!--[cite: 2]-->
    <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] uppercase tracking-[0.15em] font-bold text-slate-500 dark:text-slate-500"> <!--[cite: 2]-->
      
      <p>© ${new Date().getFullYear()} TutorCenter Educational Services. All rights reserved.</p> <!--[cite: 2]-->

      <div class="flex gap-6"> <!--[cite: 2]-->
        <a href="pricing.html" class="hover:text-[#5ba0d9] dark:hover:text-[#5ba0d9] transition-colors duration-300">Privacy Policy</a>
        <a href="pricing.html" class="hover:text-[#5ba0d9] dark:hover:text-[#5ba0d9] transition-colors duration-300">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

  /* ===============================
     INJECT STYLES
  =============================== */
  const footerStyles = document.createElement('style'); //[cite: 2]
  footerStyles.textContent = `
    .footer-link:hover {
      color: #5ba0d9 !important; /* Secondary Color */
      transform: translateX(6px);
    }
    
    .dark .footer-link:hover {
      color: #5ba0d9 !important; 
    }

    [dir="rtl"] .footer-link:hover {
      transform: translateX(-6px);
    }

    #newsletterForm input::placeholder {
      color: #94a3b8;
    }
    
    .dark #newsletterForm input::placeholder {
      color: #475569;
    }
  `;
  document.head.appendChild(footerStyles); //[cite: 2]

  // Form Logic
  const form = document.getElementById('newsletterForm'); //[cite: 2]
  if (form) { //[cite: 2]
    form.addEventListener('submit', (e) => { //[cite: 2]
      e.preventDefault(); //[cite: 2]
      alert('Success! You are now subscribed to Education Updates. Keep an eye on your inbox.');
      form.reset(); //[cite: 2]
    });
  }
});