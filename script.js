function initNavbarScrolling() {
    const navbarLinks = document.querySelectorAll('.navbar ul li a'); 
  
    navbarLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const linkText = link.textContent.trim().toLowerCase();
        const contentId = `${linkText}-content`;
        const contentSection = document.getElementById(contentId);
  
        if (!contentSection) {
          console.error(`Content section not found: ${contentId}`);
          return;
        }
  
        try {
          contentSection.scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
          console.error(`Error scrolling to content section: ${error}`);
        }
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', initNavbarScrolling);