// Page navigation functionality
     function showPage(pageId) {
      // Hide all pages
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
      });
      
      // Show selected page
      document.getElementById(pageId).classList.add('active');
      
      // Update active nav link
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
      });
      event.target.classList.add('active');
    }
    
    // Form functions
    function cancelForm() {
      if(confirm('Are you sure you want to cancel? All changes will be lost.')) {
        // Reset form fields
        document.querySelectorAll('#profile input').forEach(input => {
          input.value = '';
        });
      }
    }
    
    function confirmForm() {
      // Basic validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      
      if(!name || !email) {
        alert('Please fill in all required fields');
        return;
      }
      
      // In a real application, you would send this data to a server
      alert('Profile updated successfully!');
    }
    
    // Initialize the page (show profile by default)
    document.addEventListener('DOMContentLoaded', function() {
      showPage('profile');
    });