window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  });
  
  const menuItems = document.querySelectorAll('#navbar a');
  
  menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      this.classList.add('active');
    });
  
    item.addEventListener('mouseout', function() {
      this.classList.remove('active');
    });
  });
  