document.getElementById('verify-btn').addEventListener('mouseenter', function() {
  let button = this;
  
  // Chaotic button movement with smooth animation
  const moveButton = (e) => {
    let offsetX = Math.random() * 500 - 250; // Move within 500px
    let offsetY = Math.random() * 500 - 250;
    button.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${Math.random() * 360}deg)`;
  };

  button.addEventListener('mousemove', moveButton);

  // Add Crazy Pop-up Ads for Free Gifts, Subscriptions, etc.
  setInterval(() => {
    let adType = Math.random() > 0.5 ? 'popup' : (Math.random() > 0.5 ? 'banner' : 'large');
    if (adType === 'popup') {
      let popup = document.createElement('div');
      popup.classList.add('ad-popup');
      popup.innerHTML = `
        <span class="close-btn" onclick="closePopup(this)">&times;</span>
        <p>Get Your FREE Gift Now!</p>
        <p>Claim your prize before it's too late!</p>
      `;
      popup.style.left = `${Math.random() * 100}vw`;
      popup.style.top = `${Math.random() * 100}vh`;
      document.body.appendChild(popup);
      setTimeout(() => {
        popup.remove();
      }, 3000); // Popup disappears after 3 seconds
    } else if (adType === 'banner') {
      let banner = document.createElement('div');
      banner.classList.add('ad-banner');
      banner.innerHTML = 'FREE Subscription for 1 Month! Limited Time Offer!';
      document.body.appendChild(banner);
      setTimeout(() => {
        banner.remove();
      }, 5000); // Banner stays for 5 seconds
    } else if (adType === 'large') {
      let largeAd = document.createElement('div');
      largeAd.classList.add('ad-large');
      largeAd.innerHTML = `
        <p>🎁 Huge Gift Unlocked! 🎁</p>
        <p>Click Here to Claim FREE Stuff!</p>
      `;
      document.body.appendChild(largeAd);
      setTimeout(() => {
        largeAd.remove();
      }, 4000); // Large ad stays for 4 seconds
    }
  }, 300); // Pop-ups, banners, and large ads appear every 300ms!

  // Random Background Color and Flash Effect
  setInterval(() => {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;
    document.body.style.filter = `blur(${Math.random() * 5}px)`;
  }, 1000); // Every 1 second, random effect

});

function closePopup(button) {
  button.parentElement.style.display = 'none';
}

// Elegant Cars with smooth animations
const canvas = document.getElementById('roadCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cars = [];

function animateRoad() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw a more polished road with smooth lines
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2 + Math.random() * 10);
  ctx.lineTo(canvas.width, canvas.height / 2 + Math.random() * 10);
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.lineWidth = 5;
  ctx.stroke();

  // Random car spawning with smooth transitions
  if (Math.random() < 0.1) {
    cars.push(new ElegantCar(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * Math.PI * 2));
  }

  cars.forEach(car => {
    car.move();
    car.draw();
  });

  requestAnimationFrame(animateRoad);
}

class ElegantCar {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.speed = Math.random() * 2 + 1;
    this.size = 30;
  }

  move() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
    if (this.x > canvas.width || this.x < 0) this.angle = Math.random() * Math.PI * 2;
    if (this.y > canvas.height || this.y < 0) this.angle = Math.random() * Math.PI * 2;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}

animateRoad();

