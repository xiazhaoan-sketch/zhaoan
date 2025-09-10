// A classic welcome alert to greet your visitors!
window.onload = function() {
    alert("~*~*~*~*~ WELCOME TO THE BEST HAMSTER PAGE ON THE NET!!! ~*~*~*~*~");
};

// This creates the awesome trailing star cursor effect!
document.addEventListener('mousemove', function(e) {
    let trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);

    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';

    // Make the trail fade out and disappear
    setTimeout(function() {
        trail.style.opacity = '0';
        setTimeout(function() {
            document.body.removeChild(trail);
        }, 500); // This should match the transition time in CSS
    }, 100); // How long the star stays at full opacity
});