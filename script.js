// Get the menu icon and navbar elements
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Add an event listener to the menu icon
menuIcon.addEventListener('click', () => {
  // Toggle the navbar's display property
  navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
});

// Get the social icons container
const socialIconsContainer = document.querySelector('.social-icons');

// Add an event listener to the social icons container
socialIconsContainer.addEventListener('click', () => {
  // Get the social handles text element
  const socialHandlesText = document.querySelector('.social-handles-text');

  // Check if the social handles text element exists
  if (socialHandlesText) {
    // Toggle the display of the social handles text element
    socialHandlesText.style.display = socialHandlesText.style.display === 'block' ? 'none' : 'block';
  } else {
    // Create a new text element with the social handles text
    const newSocialHandlesText = document.createElement('p');
    newSocialHandlesText.classList.add('social-handles-text');
    newSocialHandlesText.textContent = 'My social handles: Instagram, LinkedIn, Twitter, Facebook';

    // Append the new text element to the social icons container
    socialIconsContainer.appendChild(newSocialHandlesText);
  }
});